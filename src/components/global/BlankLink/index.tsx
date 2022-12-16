import { FC, ReactNode } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface IBlankLink {
  className?: string;
  href: string;
  title?: string;
  children: ReactNode;
}

export const BlankLink: FC<IBlankLink> = ({
  className,
  href,
  title,
  children,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={classNames(className)}
      title={title}
    >
      {children}
    </Link>
  );
};
