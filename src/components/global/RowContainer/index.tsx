import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './RowContainer.module.scss';

interface IRowContainer {
  className?: string;
  children: ReactNode;
}

export const RowContainer: FC<IRowContainer> = ({ className, children }) => {
  return <div className={classNames(styles.box, className)}>{children}</div>;
};
