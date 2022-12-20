import { createContext, Dispatch, SetStateAction } from 'react';

type ActionType<T> = Dispatch<SetStateAction<T>>;

export interface IGlobalContext {
  state: {
    scroll: {
      value: number;
      setScroll: ActionType<number>;
    };
    // mobileMenu: {
    //   isShow: boolean;
    //   setShowMobileMenu: ActionType<boolean>;
    // };
  };
}

export const GlobalContext = createContext<IGlobalContext>({
  state: {
    scroll: {
      value: 0,
      setScroll: () => {},
    },
    // mobileMenu: {
    //   isShow: false,
    //   setShowMobileMenu: () => {},
    // },
  },
});

export const ContextProvider = GlobalContext.Provider;
