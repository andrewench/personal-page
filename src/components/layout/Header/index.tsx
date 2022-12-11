import { RowContainer } from '@components:global';
import { Logotype } from '@components:layout';
import { HeaderLink } from '@components:ui';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <RowContainer className={styles.box}>
      <Logotype title="andrewench" description="> Person.init();" href="/" />

      <RowContainer className={styles.nav}>
        <HeaderLink href="#skills">Skills</HeaderLink>
        <HeaderLink href="#portfolio">Portfolio</HeaderLink>
        <HeaderLink href="#plan">Plan</HeaderLink>
        <HeaderLink href="#about">About</HeaderLink>
      </RowContainer>
    </RowContainer>
  );
};
