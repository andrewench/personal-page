import { memo } from 'react';
import { HiArrowDown } from 'react-icons/hi2';
import ScrollTo from 'react-scroll-into-view';
import { Container } from '@components:global';
import classNames from 'classnames';
import styles from './Offer.module.scss';

export const Offer = memo(function Offer() {
  return (
    <Container
      flex
      column
      className={classNames(styles.flexContainer, styles.box)}
    >
      <p className={styles.primaryHeading}>Hi, I am andrewench</p>
      <p className={styles.secondaryHeading}>React Frontend Developer</p>

      <ScrollTo selector="#skills" smooth scrollOptions={{ block: 'start' }}>
        <button type="button" className={styles.jumpTo}>
          <HiArrowDown />
        </button>
      </ScrollTo>
    </Container>
  );
});
