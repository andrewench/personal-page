import React, { FC } from 'react';

import { BaseLayout } from '@/components/global';

import { IGithubApiResponse } from '@/types';

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
      <div style={{ height: '1000px', background: '#333' }}>Blog</div>
    </BaseLayout>
  );
};
