import { ScreenContainer } from '@components:global';
import classNames from 'classnames';
import styles from './Plans.module.scss';

export const Plans = () => {
  return (
    <ScreenContainer anchor="plans" className={classNames(styles.box)}>
      Plans
    </ScreenContainer>
  );
};
