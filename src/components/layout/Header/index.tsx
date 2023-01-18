import cn from 'classnames';

import { useRouter } from 'next/router';

import { FC, memo, useContext, useEffect, useState } from 'react';

import { Logotype } from '@/components/layout';

import { FlexContainer } from '@/components/global';

import { HamburgerMenu, HeaderLink } from '@/components/ui';

import { FlexAlignOnMainAxis } from '@/types';

import { HeaderLinks } from '@/data';

import { GlobalContext } from '@/context';

import styles from './Header.module.scss';

enum HeaderBehaviorVariant {
  STICKY = 'sticky',
  FIXED = 'fixed',
}

export const Header: FC<{
  variant: Lowercase<keyof typeof HeaderBehaviorVariant>;
}> = memo(function Header({ variant }) {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const router = useRouter();

  const MemoComponent = memo(FlexContainer);

  const {
    state: {
      scroll: { value, setScroll },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    document.onscroll = () => {
      setScroll(window.scrollY);

      value >= 200 ? setIsSticky(true) : setIsSticky(false);
    };
  }, [value, setScroll]);

  return (
    <div id="top">
      <FlexContainer
        align={FlexAlignOnMainAxis.CENTER}
        className={cn(styles.box, {
          [styles.stickyBackground]: isSticky,
          [styles.stickyBehavior]: variant === HeaderBehaviorVariant.STICKY,
          [styles.fixedBehavior]: variant === HeaderBehaviorVariant.FIXED,
        })}
      >
        <Logotype title="andrewench" description="\> about.me();" />

        {router.pathname === '/' && (
          <MemoComponent className={styles.nav}>
            {HeaderLinks.map(({ hash, label }, idx) => (
              <HeaderLink
                anchor={hash}
                className={cn(styles.link, {
                  [styles.activeLink]: router.asPath.substring(1) === hash,
                })}
                key={idx}
              >
                {label}
              </HeaderLink>
            ))}
          </MemoComponent>
        )}

        <HamburgerMenu />
      </FlexContainer>
    </div>
  );
});
