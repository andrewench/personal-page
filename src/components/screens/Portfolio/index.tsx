import Image from 'next/image';
import Link from 'next/link';
import { ScreenContainer, Container } from '@components:global';
import {
  SectionTitle,
  CLIMode,
  ShowcaseList,
  ShowcaseListItem,
} from '@components:ui';
import { PortfolioStack } from '@data';
import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  return (
    <ScreenContainer anchor="portfolio" className={styles.box}>
      <SectionTitle
        className={styles.title}
        cli={{
          user: 'andrewench',
          branch: 'dev',
          command: 'show-portfolio --username andrewench --outType image',
          mode: CLIMode.DARK,
        }}
      />

      <Container flex className={styles.showcase}>
        <Link
          className={styles.link}
          href="/images/pet-project.png"
          target="_blank"
          title="Click to open in new tab"
          draggable={false}
        >
          <Image
            className={styles.image}
            src="/images/pet-project.png"
            alt="Music Platform by andrewench"
            width={640}
            height={360}
            quality={100}
            draggable={false}
          />
        </Link>

        <ShowcaseList>
          <ShowcaseListItem label="Title">Music Platform</ShowcaseListItem>
          <ShowcaseListItem label="Stack" className={styles.item}>
            <Container flex className={styles.stack}>
              {PortfolioStack.map(({ label, link, src }, idx) => (
                <Link
                  className={styles.link}
                  href={link}
                  target="_blank"
                  title={`Click to open ${label} Website in new tab`}
                  draggable={false}
                  key={idx}
                >
                  <Image
                    src={src}
                    alt={label}
                    width={32}
                    height={32}
                    draggable={false}
                  />
                </Link>
              ))}
            </Container>
          </ShowcaseListItem>
          <ShowcaseListItem label="Status">In develop</ShowcaseListItem>
        </ShowcaseList>
      </Container>
    </ScreenContainer>
  );
};
