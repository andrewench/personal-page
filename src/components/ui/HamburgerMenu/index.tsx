import { memo } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { ButtonType } from '@types';
import styles from './HamburgerMenu.module.scss';

export const HamburgerMenu = memo(function HamburgerMenu() {
  return (
    <button type={ButtonType.BUTTON} className={styles.btn}>
      <HiBars3BottomRight />
    </button>
  );
});
