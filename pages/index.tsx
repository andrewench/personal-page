import { NextPage } from 'next';

import { Home } from '@/components/pages';

import type { IGithubApiResponse } from '@/types';

const HomePage: NextPage<{ user: IGithubApiResponse }> = ({ user }) => {
  return <Home user={user} />;
};

export const getStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/andrewench');
  const data: Awaited<Promise<IGithubApiResponse>> = await response.json();

  return {
    props: {
      user: data,
    },
    revalidate: 30,
  };
};

export default HomePage;
