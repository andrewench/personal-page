import { BaseLayout } from '@components:global';
import { Offer } from '@components:screens';

export const Home = () => {
  return (
    <div>
      <BaseLayout
        title="andrewench | Personal Page"
        meta={{
          keywords: 'andrewench, react, frontend, next, tailwind, typescript',
          description: 'Home page',
          author: 'andrewench',
        }}
      >
        <Offer />
      </BaseLayout>
    </div>
  );
};
