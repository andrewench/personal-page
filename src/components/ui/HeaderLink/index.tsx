import cn from 'classnames';

import { FC, memo } from 'react';
import ScrollTo from 'react-scroll-into-view';

import styles from './HeaderLink.module.scss';

interface IHeaderLink {
  anchor: string;
  className?: string;
  children: string;
}

export const HeaderLink: FC<IHeaderLink> = memo(function HeaderLink({
  anchor,
  className,
  children,
}) {
  return (
    <ScrollTo selector={anchor} smooth scrollOptions={{ block: 'start' }}>
      <button
        type="button"
        className={cn(styles.link, className)}
        draggable={false}
      >
        {children}
      </button>
    </ScrollTo>
  );
});
