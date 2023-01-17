import Head from 'next/head';

import { FC, ReactNode, useContext } from 'react';

import { Footer, Header } from '@/components/layout';

import { ScrollToTop } from '@/components/ui';

import type { IGithubApiResponse } from '@/types';

import { GlobalContext } from '@/context';

interface IBaseLayout {
  title: string;
  meta: {
    keywords: string;
    description: string;
    author: string;
  };
  user: IGithubApiResponse;
  children: ReactNode;
}

export const BaseLayout: FC<IBaseLayout> = ({
  title,
  meta: { keywords, description, author },
  user,
  children,
}) => {
  const {
    state: { scroll },
  } = useContext(GlobalContext);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <Header />

      {children}

      {scroll.value >= 300 && <ScrollToTop />}

      <Footer user={user} />
    </>
  );
};
