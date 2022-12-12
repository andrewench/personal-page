import { Container } from '@components:global';
import { Logotype } from '@components:layout';
import { flexAlign } from '@types';
import { HeaderLink } from '@components:ui';
import { HeaderLinks } from '@data';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <Container flex align={flexAlign.CENTER} className={styles.box}>
      <Logotype title="andrewench" description="> Person.init();" href="/" />

      <Container flex className={styles.nav}>
        {HeaderLinks.map(({ href, label }, idx) => (
          <HeaderLink className={styles.link} href={href} key={idx}>
            {label}
          </HeaderLink>
        ))}
      </Container>
    </Container>
  );
};
