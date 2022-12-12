import { Header } from '@components:layout';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

interface IBaseLayout {
  title: string;
  meta: {
    keywords: string;
    description: string;
    author: string;
  };
  children: ReactNode;
}

export const BaseLayout: FC<IBaseLayout> = ({
  title,
  meta: { keywords, description, author },
  children,
}) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      {children}
    </div>
  );
};
