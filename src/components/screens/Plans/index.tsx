import { ScreenContainer } from '@components:global';
import { SectionTitle, CLIMode } from '@components:ui';
import classNames from 'classnames';
import styles from './Plans.module.scss';

export const Plans = () => {
  return (
    <ScreenContainer anchor="plans" className={classNames(styles.box)}>
      <SectionTitle
        cli={{
          user: 'andrewench',
          branch: 'main',
          command: 'show-plans --username andrewench --grid',
          mode: CLIMode.LIGHT,
        }}
      />
    </ScreenContainer>
  );
};
