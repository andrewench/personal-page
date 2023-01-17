import cn from 'classnames';

import Link from 'next/link';

import { FC, ReactNode } from 'react';

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
    <Link href={href} target="_blank" className={cn(className)} title={title}>
      {children}
    </Link>
  );
};
