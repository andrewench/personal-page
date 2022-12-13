import { ScreenContainer } from '@components:global';
import styles from './About.module.scss';

export const About = () => {
  return (
    <ScreenContainer anchor="about" className={styles.box}>
      About
    </ScreenContainer>
  );
};
