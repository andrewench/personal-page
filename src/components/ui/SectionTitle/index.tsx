import { FC, memo } from 'react';
import classNames from 'classnames';
import { IoAt, IoGitBranchOutline } from 'react-icons/io5';
import { Container } from '@components:global';
import { FlexAlignOnMainAxis } from '@types';
import styles from './SectionTitle.module.scss';

export enum CLIMode {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ISectionTitle {
  className?: string;
  cli: {
    user: string;
    branch: string;
    command: string;
    mode: CLIMode;
  };
}

export const SectionTitle: FC<ISectionTitle> = memo(function SectionTitle({
  className,
  cli: { user, branch, command, mode },
}) {
  return (
    <Container flex className={classNames(styles.box, className)}>
      <Container
        flex
        className={classNames(styles.PS1, {
          [styles.PS1Inverse]: mode === CLIMode.DARK,
        })}
      >
        <Container
          flex
          align={FlexAlignOnMainAxis.CENTER}
          className={styles.user}
        >
          <IoAt className={styles.icon} />
          {user}
        </Container>

        <Container
          flex
          align={FlexAlignOnMainAxis.CENTER}
          className={styles.branch}
        >
          <IoGitBranchOutline className={styles.icon} />
          {branch}
        </Container>
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
});
