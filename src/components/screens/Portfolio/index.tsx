import Image from 'next/image';

import { memo } from 'react';

import {
  BlankLink,
  FlexContainer,
  ScreenContainer,
  SvgIcon,
} from '@/components/global';

import {
  CLIMode,
  SectionTitle,
  ShowcaseList,
  ShowcaseListItem,
} from '@/components/ui';

import { PortfolioStack } from '@/data';

import styles from './Portfolio.module.scss';

export const Portfolio = memo(function Portfolio() {
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

      <FlexContainer className={styles.showcase}>
        <BlankLink
          className={styles.link}
          href="/images/pet-project.png"
          title="Click to open image in new tab"
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
        </BlankLink>

        <ShowcaseList>
          <ShowcaseListItem label="Title">Music Platform</ShowcaseListItem>

          <ShowcaseListItem label="Stack" className={styles.item}>
            <FlexContainer className={styles.stack}>
              {PortfolioStack.map(({ label, link, src }, idx) => (
                <BlankLink
                  className={styles.link}
                  href={link}
                  title={`Click to open ${label} Website in new tab`}
                  key={idx}
                >
                  <SvgIcon src={src} label={label} />
                </BlankLink>
              ))}
            </FlexContainer>
          </ShowcaseListItem>

          <ShowcaseListItem label="Status">In develop</ShowcaseListItem>
        </ShowcaseList>
      </FlexContainer>
    </ScreenContainer>
  );
});
