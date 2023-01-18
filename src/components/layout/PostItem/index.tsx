import Image from 'next/image';

import { ArticleDate, ArticleTitle } from '@/components/layout';

import { FlexContainer } from '@/components/global';

import styles from './PostItem.module.scss';

export const PostItem = () => {
  return (
    <FlexContainer className={styles.box}>
      <ArticleDate />
      <div className={styles.content}>
        <ArticleTitle label="Static post on this website" variant="multi" />
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quidem
          veritatis cum? Ducimus delectus dolore, provident, ad nam pariatur
          tempora minus placeat, tempore voluptatum repellendus aperiam
          assumenda rerum ratione laudantium. Architecto repudiandae tempore
          consequuntur nobis explicabo praesentium libero illum exercitationem,
          amet mollitia cupiditate, reiciendis molestiae? Aspernatur nesciunt
          praesentium sunt exercitationem aliquid, suscipit nobis perferendis
          minima alias officia? Maxime, odit itaque? Quam facere unde fugit vero
          nisi? At sed inventore maiores nam assumenda expedita aperiam debitis
          quaerat non? Cumque totam illum deleniti delectus alias ullam velit
          libero, placeat natus neque at. Unde vitae repellendus asperiores esse
          necessitatibus mollitia id tempora sapiente magnam, corporis veniam
          aut minus quasi velit blanditiis vel laboriosam assumenda est
          reprehenderit laudantium obcaecati porro voluptatem sit. Delectus,
          explicabo.
        </p>

        <div className={styles.imageContainer}>
          <Image
            src="/images/post.jpg"
            alt="Post Photo"
            fill
            quality={100}
            draggable={false}
          />
        </div>
      </div>
    </FlexContainer>
  );
};
