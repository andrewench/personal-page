import '../src/styles/globals.scss';
import { AppProps } from 'next/app';

import { useMemo, useState } from 'react';

import { ContextProvider, IGlobalContext } from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  const [scroll, setScroll] = useState<number>(0);

  const config: IGlobalContext = useMemo(
    () => ({
      state: {
        scroll: {
          value: scroll,
          setScroll,
        },
      },
    }),
    [scroll]
  );

  return (
    <ContextProvider value={config}>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
