import Image from 'next/image';
import Link from 'next/link';

import { FC } from 'react';
import { IoCalendarNumberOutline, IoTimeOutline } from 'react-icons/io5';

import { FlexContainer } from '@/components/global';

import { FlexAlignOnCrossAxis, FlexAlignOnMainAxis } from '@/types';

import styles from './ArticleDate.module.scss';

export const ArticleDate: FC = () => {
  return (
    <FlexContainer
      column
      content={FlexAlignOnCrossAxis.CENTER}
      className={styles.box}
    >
      <div className={styles.meta}>
        <FlexContainer
          align={FlexAlignOnMainAxis.CENTER}
          content={FlexAlignOnCrossAxis.CENTER}
          className={styles.time}
        >
          <IoTimeOutline size={18} />
          <p>14:30</p>
        </FlexContainer>

        <FlexContainer
          align={FlexAlignOnMainAxis.CENTER}
          content={FlexAlignOnCrossAxis.CENTER}
          className={styles.date}
        >
          <IoCalendarNumberOutline size={18} />
          <p>13 Feb</p>
        </FlexContainer>
      </div>

      <Link href="/profile?id=1">
        <Image
          className={styles.author}
          src="/images/avatar.png"
          alt="Author's avatar"
          width={40}
          height={40}
          draggable={false}
        />
      </Link>
    </FlexContainer>
  );
};
