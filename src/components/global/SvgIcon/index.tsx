import Image from 'next/image';
import classNames from 'classnames';

interface Icon {
  src: string;
  label: string;
  className?: string;
}

export const SvgIcon = ({ src, label, className }: Icon) => {
  return (
    <Image
      className={classNames(className)}
      src={src}
      alt={label}
      width={32}
      height={32}
      quality={100}
      draggable={false}
    />
  );
};
