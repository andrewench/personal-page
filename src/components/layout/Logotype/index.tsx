import cn from 'classnames';

import { FC, memo } from 'react';
import ScrollTo from 'react-scroll-into-view';

import styles from './Logotype.module.scss';

interface ILogotype {
  title: string;
  description: string;
}

export const Logotype: FC<ILogotype> = memo(function Logotype({
  title,
  description,
}) {
  return (
    <ScrollTo selector="#top" smooth scrollOptions={{ block: 'start' }}>
      <button type="button" className={styles.link}>
        <p className={styles.title}>{title}</p>
        <p className={cn(styles.description, 'blink-cursor', 'blink-inverse')}>
          {description}
        </p>
      </button>
    </ScrollTo>
  );
});
