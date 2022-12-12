import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface ISectionTitle {
  className?: string;
  children: ReactNode;
}

export const SectionTitle: FC<ISectionTitle> = ({ className, children }) => {
  return <div className={classNames(className)}>{children}</div>;
};
