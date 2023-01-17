import cn from 'classnames';

import { memo } from 'react';

import { FlexContainer, ScreenContainer } from '@/components/global';

import {
  CLIMode,
  ProgressBar,
  ProgressBarBox,
  ProgressBarMode,
  SectionTitle,
} from '@/components/ui';

import { PlansList } from '@/data';

import styles from './Plans.module.scss';

export const Plans = memo(function Plans() {
  return (
    <ScreenContainer anchor="plans" className={cn(styles.box)}>
      <SectionTitle
        cli={{
          user: 'andrewench',
          branch: 'dev',
          command: 'show-plans --username andrewench --grid',
          mode: CLIMode.DARK,
        }}
      />

      <FlexContainer grid center className={styles.plans}>
        {PlansList.map(({ label, percent }, idx) => (
          <ProgressBarBox label={label} mode={ProgressBarMode.LIGHT} key={idx}>
            <ProgressBar percent={percent} mode={ProgressBarMode.LIGHT} />
          </ProgressBarBox>
        ))}
      </FlexContainer>
    </ScreenContainer>
  );
});
