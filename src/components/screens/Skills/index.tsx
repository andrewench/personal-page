import {
  Container,
  ScreenContainer,
  SectionTitle,
  CLIMode,
} from '@components:global';
import { ProgressBar, ProgressBarBox } from '@components:ui';
import { SkillsList } from '@data';
import styles from './Skills.module.scss';

export const Skills = () => {
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

      <Container flex grid className={styles.skills}>
        {SkillsList.map(({ label, percent }, idx) => (
          <ProgressBarBox label={label} key={idx}>
            <ProgressBar percent={percent} />
          </ProgressBarBox>
        ))}
      </Container>
    </ScreenContainer>
  );
};
