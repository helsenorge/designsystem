import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.ArticleTeaser.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.ArticleTeaser.nb-NO.json';
import { HNDesignsystemArticleTeaser } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemArticleTeaser => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
