import { NextPage } from 'next';

import { Blog } from '@/components/pages';

import { IGithubApiResponse } from '@/types';

import { fetchGithubUserByLogin } from '@/utils';

const BlogPage: NextPage<{ user: IGithubApiResponse }> = ({ user }) => {
  return <Blog user={user} />;
};

export const getStaticProps = async () => {
  const data: Awaited<Promise<IGithubApiResponse>> =
    await fetchGithubUserByLogin('andrewench');

  return {
    props: {
      user: data,
    },
    revalidate: 30,
  };
};

export default BlogPage;
