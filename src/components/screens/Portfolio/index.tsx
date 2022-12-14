import { ScreenContainer, SectionTitle, CLIMode } from '@components:global';
import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  return (
    <ScreenContainer anchor="portfolio" className={styles.box}>
      <SectionTitle
        cli={{
          user: 'andrewench',
          branch: 'dev',
          command: 'show-portfolio --username andrewench --outType image',
          mode: CLIMode.DARK,
        }}
      />
    </ScreenContainer>
  );
};
