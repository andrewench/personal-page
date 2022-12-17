import { memo } from 'react';
import { Container, ScreenContainer } from '@components:global';
import {
  ProgressBar,
  ProgressBarBox,
  SectionTitle,
  CLIMode,
} from '@components:ui';
import { SkillsList } from '@data';
import styles from './Skills.module.scss';

export const Skills = memo(function Skills() {
  return (
    <ScreenContainer anchor="skills" className={styles.box}>
      <SectionTitle
        cli={{
          user: 'andrewench',
          branch: 'main',
          command: 'show-skills --user andrewench --grid',
          mode: CLIMode.LIGHT,
        }}
      />

      <Container flex grid center>
        {SkillsList.map(({ label, percent }, idx) => (
          <ProgressBarBox label={label} key={idx}>
            <ProgressBar percent={percent} />
          </ProgressBarBox>
        ))}
      </Container>
    </ScreenContainer>
  );
});
