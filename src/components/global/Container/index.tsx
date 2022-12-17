import { FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import { FlexAlignOnMainAxis, FlexAlignOnCrossAxis } from '@types';
import styles from './Container.module.scss';

interface IContainer {
  id?: string;
  className?: string;
  flex: boolean;
  grid?: boolean;
  align?: FlexAlignOnMainAxis;
  content?: FlexAlignOnCrossAxis;
  column?: boolean;
  center?: boolean;
  children: ReactNode;
}

export const Container: FC<IContainer> = memo(function Container({
  id = '',
  className = '',
  flex,
  column,
  grid,
  align,
  content,
  center,
  children,
}) {
  return (
    <div
      id={id}
      className={classNames(
        {
          [styles.flexContainer]: flex,
          [styles.flexCol]: column,
          [styles.flexFullCenter]: center,
          [styles.grid]: grid,
          [styles.alignStart]: align === FlexAlignOnMainAxis.START,
          [styles.alignCenter]: align === FlexAlignOnMainAxis.CENTER,
          [styles.alignBaseline]: align === FlexAlignOnMainAxis.BASELINE,
          [styles.alignStretch]: align === FlexAlignOnMainAxis.STRETCH,
          [styles.contentStart]: content === FlexAlignOnCrossAxis.START,
          [styles.contentCenter]: content === FlexAlignOnCrossAxis.CENTER,
          [styles.contentEnd]: content === FlexAlignOnCrossAxis.END,
          [styles.contentBetween]: content === FlexAlignOnCrossAxis.BETWEEN,
          [styles.contentAround]: content === FlexAlignOnCrossAxis.AROUND,
          [styles.contentEvenly]: content === FlexAlignOnCrossAxis.EVENLY,
        },
        className
      )}
    >
      {children}
    </div>
  );
});
