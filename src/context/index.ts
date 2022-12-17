import { createContext, Dispatch, SetStateAction } from 'react';

export interface IGlobalContext {
  state: {
    scroll: {
      value: number;
      setScroll: Dispatch<SetStateAction<number>>;
    };
  };
}

export const GlobalContext = createContext<IGlobalContext>({
  state: {
    scroll: {
      value: 0,
      setScroll: () => {},
    },
  },
});

export const ContextProvider = GlobalContext.Provider;
