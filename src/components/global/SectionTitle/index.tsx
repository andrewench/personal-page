import { FC } from 'react';
import classNames from 'classnames';
import { IoAt, IoGitBranchOutline } from 'react-icons/io5';
import { Container } from '@components:global';
import { flexAlign } from '@types';
import styles from './SectionTitle.module.scss';

export enum CLIMode {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ISectionTitle {
  cli: {
    user: string;
    branch: string;
    command: string;
    mode: CLIMode;
  };
}

export const SectionTitle: FC<ISectionTitle> = ({
  cli: { user, branch, command, mode },
}) => {
  return (
    <Container flex align={flexAlign.CENTER} className={styles.box}>
      <Container flex align={flexAlign.CENTER} className={styles.user}>
        <IoAt className={styles.icon} />
        {user}
      </Container>
      <Container flex align={flexAlign.CENTER} className={styles.branch}>
        <IoGitBranchOutline className={styles.icon} />
        {branch}
      </Container>
      <p
        className={classNames(styles.command, 'blink-cursor', {
          [styles.textInverse]: mode === CLIMode.DARK,
          'blink-inverse': mode === CLIMode.LIGHT,
        })}
      >
        {command}
      </p>
    </Container>
  );
};
