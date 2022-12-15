import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Container } from '@components:global';
import { Logotype } from '@components:layout';
import { HeaderLink } from '@components:ui';
import { flexAlign } from '@types';
import { HeaderLinks } from '@data';
import styles from './Header.module.scss';

export const Header = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [scroll, setScroll] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    document.onscroll = () => {
      setScroll(window.scrollY);

      scroll >= 200 ? setIsSticky(true) : setIsSticky(false);
    };
  }, [scroll]);

  return (
    <div id="top">
      <Container
        flex
        align={flexAlign.CENTER}
        className={classNames(styles.box, {
          [styles.sticky]: isSticky,
        })}
      >
        <Logotype title="andrewench" description="\> about.me();" />

        <Container flex className={styles.nav}>
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
        </Container>
      </Container>
    </div>
  );
};
