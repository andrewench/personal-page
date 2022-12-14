import { FC, ReactNode } from 'react';
import styles from './ProgressBarBox.module.scss';

interface IProgressBarBox {
  label: string;
  children: ReactNode;
}

export const ProgressBarBox: FC<IProgressBarBox> = ({ label, children }) => {
  return (
    <div className={styles.box}>
      <p className={styles.label}>{label}</p>
      {children}
    </div>
  );
};
