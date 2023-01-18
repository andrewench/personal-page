import { FC, ReactNode } from 'react';

export const Wall: FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};
