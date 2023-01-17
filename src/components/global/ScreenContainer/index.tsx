import cn from 'classnames';

import { FC, ReactNode, memo } from 'react';

import { FlexContainer } from '@/components/global';

import styles from './ScreenContainer.module.scss';

interface IScreenContainer {
  anchor: string;
  children: ReactNode;
  className?: string;
}

export const ScreenContainer: FC<IScreenContainer> = memo(
  function ScreenContainer({ anchor, children, className }) {
    return (
      <FlexContainer column className={cn(styles.box, className)} id={anchor}>
        {children}
      </FlexContainer>
    );
  }
);
