interface IPortfolioStack {
  label: string;
  link: string;
  src: string;
}

export const PortfolioStack: IPortfolioStack[] = [
  {
    label: 'React',
    link: 'https://reactjs.org/',
    src: '/icons/react.svg',
  },
  {
    label: 'Typescript',
    link: 'https://www.typescriptlang.org/',
    src: '/icons/typescript.svg',
  },
  {
    label: 'Vite',
    link: 'https://vitejs.dev/',
    src: '/icons/vite.svg',
  },
  {
    label: 'Electron',
    link: 'https://electronjs.org/',
    src: '/icons/electron.svg',
  },
  {
    label: 'Prisma',
    link: 'https://prisma.io/',
    src: '/icons/prisma.svg',
  },
];
