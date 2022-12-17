import { memo } from 'react';
import { Container, ScreenContainer } from '@components:global';
import {
  SectionTitle,
  CLIMode,
  ProgressBarBox,
  ProgressBar,
  ProgressBarMode,
} from '@components:ui';
import classNames from 'classnames';
import { PlansList } from '@data';
import styles from './Plans.module.scss';

export const Plans = memo(function Plans() {
  return (
    <ScreenContainer anchor="plans" className={classNames(styles.box)}>
      <SectionTitle
        cli={{
          user: 'andrewench',
          branch: 'dev',
          command: 'show-plans --username andrewench --grid',
          mode: CLIMode.DARK,
        }}
      />

      <Container flex grid center className={styles.plans}>
        {PlansList.map(({ label, percent }, idx) => (
          <ProgressBarBox label={label} mode={ProgressBarMode.LIGHT} key={idx}>
            <ProgressBar percent={percent} mode={ProgressBarMode.LIGHT} />
          </ProgressBarBox>
        ))}
      </Container>
    </ScreenContainer>
  );
});
