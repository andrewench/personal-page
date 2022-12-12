import Link from 'next/link';
import { Container, ScreenContainer } from '@components:global';
import classNames from 'classnames';
import { HiArrowDown } from 'react-icons/hi2';
import styles from './Offer.module.scss';

export const Offer = () => {
  return (
    <ScreenContainer className={classNames(styles.box)}>
      <Container flex column className={styles.flexContainer}>
        <p className={styles.primaryHeading}>Hi, I am andrewench</p>
        <p className={styles.secondaryHeading}>React Frontend Developer</p>

        <Link href="/#skills" className={styles.jumpTo}>
          <HiArrowDown />
        </Link>
      </Container>
    </ScreenContainer>
  );
};
