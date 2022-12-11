import { FC } from 'react';
import Link from 'next/link';
import { ColumnContainer } from '@components:global';
import classNames from 'classnames';
import styles from './Logotype.module.scss';

interface ILogotype {
  title: string;
  description: string;
  href: string;
}

export const Logotype: FC<ILogotype> = ({ title, description, href }) => {
  return (
    <ColumnContainer>
      <Link href={href}>
        <p className={styles.title}>{title}</p>
        <p className={classNames(styles.description, 'blink-cursor')}>
          {description}
        </p>
      </Link>
    </ColumnContainer>
  );
};
