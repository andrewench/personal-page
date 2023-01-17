import Image from 'next/image';

import { memo } from 'react';

import { Logotype } from '@/components/layout';

import { BlankLink, FlexContainer, SvgIcon } from '@/components/global';

import { FlexAlignOnMainAxis } from '@/types';
import type { IGithubApiResponse } from '@/types';

import { BuildStack } from '@/data';

import styles from './Footer.module.scss';

export const Footer = memo(function Footer({
  user,
}: {
  user: IGithubApiResponse;
}) {
  return (
    <FlexContainer column className={styles.box}>
      <FlexContainer>
        <Logotype title="andrewench" description="\> about.me();" />
      </FlexContainer>

      <BlankLink
        href="https://github.com/andrewench"
        className={styles.profileLink}
      >
        <FlexContainer
          align={FlexAlignOnMainAxis.CENTER}
          className={styles.profile}
        >
          <p className={styles.label}>Github Page:</p>
          <Image
            className={styles.avatar}
            src={user.avatar_url}
            width={30}
            height={30}
            alt={user.login}
            draggable={false}
          />
          <p className={styles.username}>{user.login}</p>
        </FlexContainer>
      </BlankLink>

      <FlexContainer
        align={FlexAlignOnMainAxis.CENTER}
        className={styles.stack}
      >
        <p className={styles.label}>Build Stack:</p>

        {BuildStack.map(({ label, link, src }, idx) => (
          <BlankLink
            href={link}
            title={`Click to open ${label} Website in new tab`}
            key={idx}
          >
            <SvgIcon src={src} label={label} />
          </BlankLink>
        ))}
      </FlexContainer>

      <p className={styles.copyright}>© 2022-2023. All right reserved.</p>
    </FlexContainer>
  );
});
