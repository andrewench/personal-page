import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './HeaderLink.module.scss';

interface IHeaderLink {
  href: string;
  className?: string;
  children: string;
}

export const HeaderLink: FC<IHeaderLink> = ({ href, className, children }) => {
  return (
    <Link
      href={href}
      className={classNames(styles.link, className)}
      draggable={false}
    >
      {children}
    </Link>
  );
};
