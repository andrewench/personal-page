import cn from 'classnames';

import { FC, useState } from 'react';

import styles from './TextareaBox.module.scss';

interface ITextareaBox {
  label: string;
  className?: string;
}

export const TextareaBox: FC<ITextareaBox> = ({ label, className }) => {
  const [value, setValue] = useState<string>('');

  return (
    <div
      className={cn(styles.box, className, {
        [styles.filled]: Boolean(value),
      })}
    >
      <textarea
        className={cn(styles.textarea, {
          [styles.filled]: Boolean(value),
        })}
        onChange={(e) => setValue(e.target.value)}
      />
      <p
        className={cn(styles.label, {
          [styles.pinned]: Boolean(value),
        })}
      >
        {label}
      </p>
    </div>
  );
};
