import { useState } from 'react';
import { InputType } from '@types';
import classNames from 'classnames';
import styles from './InputBox.module.scss';

interface IInputBox {
  label: string;
  type: InputType;
}

export const InputBox = ({ label, type }: IInputBox) => {
  const [value, setValue] = useState<string>('');

  return (
    <div className={styles.box}>
      <input
        type={type}
        className={classNames(styles.input, {
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
