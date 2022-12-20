import { BaseLayout } from '@components:global';
import { Contact, Offer, Plans, Portfolio, Skills } from '@components:screens';
import type { IGithubApiResponse } from '@types';

export const Home = ({ user }: { user: IGithubApiResponse }) => {
  return (
    <BaseLayout
      title="andrewench | Personal Page"
      meta={{
        keywords: 'andrewench, react, frontend, next, tailwind, typescript',
        description: 'Home page',
        author: 'andrewench',
      }}
      user={user}
    >
      <Offer />
      <Skills />
      <Portfolio />
      <Plans />
      <Contact />
    </BaseLayout>
  );
};
