import { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './TextareaBox.module.scss';

interface ITextareaBox {
  label: string;
  className?: string;
}

export const TextareaBox: FC<ITextareaBox> = ({ label, className }) => {
  const [value, setValue] = useState<string>('');

  return (
    <div
      className={classNames(styles.box, className, {
        [styles.filled]: Boolean(value),
      })}
    >
      <textarea
        className={classNames(styles.textarea, {
          [styles.filled]: Boolean(value),
        })}
        onChange={(e) => setValue(e.target.value)}
      />
      <p
        className={classNames(styles.label, {
          [styles.pinned]: Boolean(value),
        })}
      >
        {label}
      </p>
    </div>
  );
};
