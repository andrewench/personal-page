import { FC, ReactNode } from 'react';
import { ButtonType } from '@types';
import classNames from 'classnames';
import styles from './PrimaryButton.module.scss';

interface IPrimaryButton {
  type: ButtonType;
  className?: string;
  children: ReactNode;
}

export const PrimaryButton: FC<IPrimaryButton> = ({
  type,
  className,
  children,
}) => {
  return (
    <button type={type} className={classNames(styles.btn, className)}>
      {children}
    </button>
  );
};
