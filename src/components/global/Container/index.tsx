import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { flexAlign, flexContent } from '@types';
import styles from './Container.module.scss';

interface IContainer {
  id?: string;
  className?: string;
  flex: boolean;
  grid?: boolean;
  align?: flexAlign;
  content?: flexContent;
  column?: boolean;
  center?: boolean;
  children: ReactNode;
}

export const Container: FC<IContainer> = ({
  id = '',
  className = '',
  flex,
  column,
  grid,
  align,
  content,
  center,
  children,
}) => {
  return (
    <div
      id={id}
      className={classNames(
        {
          [styles.flexContainer]: flex,
          [styles.flexCol]: column,
          [styles.flexFullCenter]: center,
          [styles.grid]: grid,
          [styles.alignStart]: align === flexAlign.START,
          [styles.alignCenter]: align === flexAlign.CENTER,
          [styles.alignBaseline]: align === flexAlign.BASELINE,
          [styles.alignStretch]: align === flexAlign.STRETCH,
          [styles.contentStart]: content === flexContent.START,
          [styles.contentCenter]: content === flexContent.CENTER,
          [styles.contentEnd]: content === flexContent.END,
          [styles.contentBetween]: content === flexContent.BETWEEN,
          [styles.contentAround]: content === flexContent.AROUND,
          [styles.contentEvenly]: content === flexContent.EVENLY,
        },
        className
      )}
    >
      {children}
    </div>
  );
};
