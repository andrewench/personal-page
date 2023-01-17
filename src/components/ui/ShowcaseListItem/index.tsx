import cn from 'classnames';

import { FC, ReactNode } from 'react';

import styles from './ShowcaseListItem.module.scss';

interface IShowcaseListItem {
  label: string;
  className?: string;
  children: ReactNode;
}

export const ShowcaseListItem: FC<IShowcaseListItem> = ({
  label,
  className,
  children,
}) => {
  return (
    <li className={styles.item}>
      <div className={cn(styles.value, className)}>
        <span className={styles.label}>{label}:</span>
        {children}
      </div>
    </li>
  );
};
