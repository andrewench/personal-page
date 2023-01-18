import React, { FC } from 'react';

import { PostItem, Wall, WallSideBar } from '@/components/layout';

import { BaseLayout, FlexContainer } from '@/components/global';

import { IGithubApiResponse } from '@/types';

import styles from './Blog.module.scss';

export const Blog: FC<{ user: IGithubApiResponse }> = ({ user }) => {
  return (
    <BaseLayout
      title="andrewench | Blog"
      meta={{
        keywords: 'andrewench, blog, posts, news',
        description: `andrewench's blog`,
        author: 'andrewech',
      }}
      user={user}
    >
      <FlexContainer className={styles.box}>
        <Wall>
          <PostItem />
        </Wall>
        <WallSideBar />
      </FlexContainer>
    </BaseLayout>
  );
};
