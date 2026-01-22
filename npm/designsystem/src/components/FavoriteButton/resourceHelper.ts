import type { HNDesignsystemFavoriteButton } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import nbNO from '../../resources/HN.Designsystem.FavoriteButton.nb-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemFavoriteButton => {
  switch (language) {
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
