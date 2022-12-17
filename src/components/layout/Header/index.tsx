import { useState, useEffect, useContext, memo } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Container } from '@components:global';
import { Logotype } from '@components:layout';
import { HeaderLink } from '@components:ui';
import { FlexAlignOnMainAxis } from '@types';
import { HeaderLinks } from '@data';
import { GlobalContext } from '@context';
import styles from './Header.module.scss';

export const Header = memo(function Header() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const router = useRouter();

  const MemoComponent = memo(Container);

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
      <Container
        flex
        align={FlexAlignOnMainAxis.CENTER}
        className={classNames(styles.box, {
          [styles.sticky]: isSticky,
        })}
      >
        <Logotype title="andrewench" description="\> about.me();" />

        <MemoComponent flex className={styles.nav}>
          {HeaderLinks.map(({ hash, label }, idx) => (
            <HeaderLink
              anchor={hash}
              className={classNames(styles.link, {
                [styles.activeLink]: router.asPath.substring(1) === hash,
              })}
              key={idx}
            >
              {label}
            </HeaderLink>
          ))}
        </MemoComponent>
      </Container>
    </div>
  );
});
