import cn from 'classnames';

import Image from 'next/image';

interface Icon {
  src: string;
  label: string;
  className?: string;
}

export const SvgIcon = ({ src, label, className }: Icon) => {
  return (
    <Image
      className={cn(className)}
      src={src}
      alt={label}
      width={32}
      height={32}
      quality={100}
      draggable={false}
    />
  );
};
