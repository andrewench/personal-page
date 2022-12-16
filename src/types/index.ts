import { ReactNode } from 'react';

export { ButtonType } from './ButtonType';
export { InputType } from './InputType';
export type { IStack } from './Stack';
export type { IGithubApiResponse } from './GithubApiResponse';

export interface IAlignContainer {
  className?: string;
  children: ReactNode;
}

export enum flexAlign {
  START = 'items-start',
  CENTER = 'items-center',
  END = 'items-end',
  BASELINE = 'items-baseline',
  STRETCH = 'items-stretch',
}

export enum flexContent {
  START = 'justify-start',
  CENTER = 'justify-center',
  END = 'justify-end',
  BETWEEN = 'justify-between',
  AROUND = 'justify-around',
  EVENLY = 'justify-evenly',
}
