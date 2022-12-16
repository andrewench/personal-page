import Image from 'next/image';
import { Container, SvgIcon, BlankLink } from '@components:global';
import { Logotype } from '@components:layout';
import { BuildStack } from '@data';
import { flexAlign } from '@types';
import type { IGithubApiResponse } from '@types';
import styles from './Footer.module.scss';

export const Footer = ({ user }: IGithubApiResponse) => {
  return (
    <Container flex column className={styles.box}>
      <Container flex>
        <Logotype title="andrewench" description="\> about.me();" />
      </Container>

      <BlankLink
        href="https://github.com/andrewench"
        className={styles.profileLink}
      >
        <Container flex align={flexAlign.CENTER} className={styles.profile}>
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
        </Container>
      </BlankLink>

      <Container flex align={flexAlign.CENTER} className={styles.stack}>
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
      </Container>

      <p className={styles.copyright}>© 2022-2023. All right reserved.</p>
    </Container>
  );
};
