import cn from 'classnames';

import { FC, memo } from 'react';
import { IoAt, IoGitBranchOutline } from 'react-icons/io5';

import { FlexContainer } from '@/components/global';

import { FlexAlignOnMainAxis } from '@/types';

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
    <FlexContainer className={cn(styles.box, className)}>
      <FlexContainer
        className={cn(styles.PS1, {
          [styles.PS1Inverse]: mode === CLIMode.DARK,
        })}
      >
        <FlexContainer
          align={FlexAlignOnMainAxis.CENTER}
          className={styles.user}
        >
          <IoAt className={styles.icon} />
          {user}
        </FlexContainer>

        <FlexContainer
          align={FlexAlignOnMainAxis.CENTER}
          className={styles.branch}
        >
          <IoGitBranchOutline className={styles.icon} />
          {branch}
        </FlexContainer>
      </FlexContainer>

      <p
        className={cn(styles.command, 'blink-cursor', {
          [styles.textInverse]: mode === CLIMode.DARK,
          'blink-inverse': mode === CLIMode.LIGHT,
        })}
      >
        {command}
      </p>
    </FlexContainer>
  );
});
