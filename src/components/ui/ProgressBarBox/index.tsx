import cn from 'classnames';

import { FC, ReactNode, memo } from 'react';

import { ProgressBarMode } from '@/components/ui';

import styles from './ProgressBarBox.module.scss';

interface IProgressBarBox {
  label: string;
  mode?: ProgressBarMode;
  children: ReactNode;
}

export const ProgressBarBox: FC<IProgressBarBox> = memo(
  function ProgressBarBox({ label, mode, children }) {
    return (
      <div className={styles.box}>
        <p
          className={cn(styles.label, {
            [styles.labelInverse]: mode === ProgressBarMode.LIGHT,
          })}
        >
          {label}
        </p>
        {children}
      </div>
    );
  }
);
