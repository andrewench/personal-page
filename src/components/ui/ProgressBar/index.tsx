import { useCallback, useRef, useState } from 'react';
import { calculateProgress } from '@utils';
import styles from './ProgressBar.module.scss';

export const ProgressBar = ({ percent }: { percent: number }) => {
  const track = useRef<HTMLDivElement>(null);
  const [dragPosition, setDragPosition] = useState<number>(0);

  const calculateOffsetWidth = useCallback(
    (percentProgress: number): number => {
      const trackBar = track.current;
      const maxProgressLength = Number(trackBar?.offsetWidth);

      return calculateProgress({
        currentProgress: percentProgress,
        maxProgress: maxProgressLength,
      });
    },
    []
  );

  const renderProgress = useCallback(
    (drag: HTMLDivElement) => {
      if (drag !== null) {
        setDragPosition(calculateOffsetWidth(percent));
        const styleOffset = `${dragPosition}px`;

        // eslint-disable-next-line no-param-reassign
        drag.style.width = styleOffset;
      }
    },
    [percent, calculateOffsetWidth, dragPosition]
  );

  return (
    <div className={styles.box}>
      <div className={styles.track} ref={track} />
      <div className={styles.drag} ref={renderProgress}>
        <span className={styles.tooltip} style={{ left: `${dragPosition}px` }}>
          {percent}
        </span>
      </div>
    </div>
  );
};
