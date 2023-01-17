import cn from 'classnames';

import { FC, ReactNode } from 'react';

import { ButtonType } from '@/types';

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
    <button type={type} className={cn(styles.btn, className)}>
      {children}
    </button>
  );
};
