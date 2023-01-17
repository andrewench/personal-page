import cn from 'classnames';

import { memo } from 'react';
import { HiArrowDown } from 'react-icons/hi2';
import ScrollTo from 'react-scroll-into-view';

import { FlexContainer } from '@/components/global';

import styles from './Offer.module.scss';

export const Offer = memo(function Offer() {
  return (
    <FlexContainer column className={cn(styles.flexContainer, styles.box)}>
      <p className={styles.primaryHeading}>Hi, I am andrewench</p>
      <p className={styles.secondaryHeading}>React Frontend Developer</p>

      <ScrollTo selector="#skills" smooth scrollOptions={{ block: 'start' }}>
        <button type="button" className={styles.jumpTo}>
          <HiArrowDown />
        </button>
      </ScrollTo>
    </FlexContainer>
  );
});
