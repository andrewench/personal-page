import { FC } from 'react';
import { IAlignContainer } from '@types';
import classNames from 'classnames';
import styles from './ColumnContainer.module.scss';

export const ColumnContainer: FC<IAlignContainer> = ({
  className,
  children,
}) => {
  return <div className={classNames(styles.box, className)}>{children}</div>;
};
