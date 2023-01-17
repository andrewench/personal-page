import cn from 'classnames';

import { FC, ReactNode, memo } from 'react';

import { FlexAlignOnCrossAxis, FlexAlignOnMainAxis } from '@/types';

import styles from './FlexContainer.module.scss';

interface IFlexContainer {
  id?: string;
  className?: string;
  grid?: boolean;
  align?: FlexAlignOnMainAxis;
  content?: FlexAlignOnCrossAxis;
  column?: boolean;
  center?: boolean;
  children: ReactNode;
}

export const FlexContainer: FC<IFlexContainer> = memo(function FlexContainer({
  id = '',
  className = '',
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
      className={cn(
        styles.flexContainer,
        {
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
