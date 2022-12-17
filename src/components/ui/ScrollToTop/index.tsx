import { memo } from 'react';
import ScrollTo from 'react-scroll-into-view';
import { HiArrowUp } from 'react-icons/hi2';
import styles from './ScrollToTop.module.scss';

export const ScrollToTop = memo(function ScrollToTop() {
  return (
    <ScrollTo selector="#top">
      <button className={styles.btn}>
        <HiArrowUp />
      </button>
    </ScrollTo>
  );
});
