import { FC } from 'react';
import ScrollTo from 'react-scroll-into-view';
import classNames from 'classnames';
import styles from './Logotype.module.scss';

interface ILogotype {
  title: string;
  description: string;
}

export const Logotype: FC<ILogotype> = ({ title, description }) => {
  return (
    <ScrollTo selector="#top" smooth scrollOptions={{ block: 'start' }}>
      <button type="button" className={styles.link}>
        <p className={styles.title}>{title}</p>
        <p className={classNames(styles.description, 'blink-cursor')}>
          {description}
        </p>
      </button>
    </ScrollTo>
  );
};
