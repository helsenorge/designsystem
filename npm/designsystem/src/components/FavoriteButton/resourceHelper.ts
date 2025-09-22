import { LanguageLocales } from '../../constants';
import nbNO from '../../resources/HN.Designsystem.FavoriteButton.nb-NO.json';
import { HNDesignsystemFavoriteButton } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemFavoriteButton => {
  switch (language) {
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
