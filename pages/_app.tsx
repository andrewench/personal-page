import { useState, useMemo } from 'react';
import { AppProps } from 'next/app';
import { ContextProvider, IGlobalContext } from '@context';
import '../src/styles/globals.scss';

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
