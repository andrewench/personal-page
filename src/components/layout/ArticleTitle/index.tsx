import { FC } from 'react';
import { IoOpenOutline } from 'react-icons/io5';

import { FlexContainer } from '@/components/global';

import { FlexAlignOnCrossAxis, FlexAlignOnMainAxis } from '@/types';

import styles from './ArticleTitle.module.scss';

type ArticleTitleVariant = 'single' | 'multi';

interface IArticleTitle {
  label: string;
  variant: ArticleTitleVariant;
}

export const ArticleTitle: FC<IArticleTitle> = ({ label, variant }) => {
  return (
    <FlexContainer
      align={FlexAlignOnMainAxis.START}
      content={FlexAlignOnCrossAxis.BETWEEN}
      className={styles.box}
    >
      <h1 className={styles.title}>{label}</h1>

      {variant === 'multi' && (
        <button type="button" className={styles.externalLink}>
          <IoOpenOutline />
        </button>
      )}
    </FlexContainer>
  );
};
