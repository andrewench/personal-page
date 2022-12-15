import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './ShowcaseList.module.scss';

interface IShowcaseList {
  className?: string;
  children: ReactNode;
}

export const ShowcaseList: FC<IShowcaseList> = ({ className, children }) => {
  return <ul className={classNames(styles.list, className)}>{children}</ul>;
};
