import { BaseLayout } from '@components:global';
import { About, Offer, Plans, Portfolio, Skills } from '@components:screens';

export const Home = () => {
  return (
    <BaseLayout
      title="andrewench | Personal Page"
      meta={{
        keywords: 'andrewench, react, frontend, next, tailwind, typescript',
        description: 'Home page',
        author: 'andrewench',
      }}
    >
      <Offer />
      <Skills />
      <Portfolio />
      <Plans />
      <About />
    </BaseLayout>
  );
};
