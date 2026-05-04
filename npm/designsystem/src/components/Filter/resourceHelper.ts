import type { HNDesignsystemFilter } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.Filter.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.Filter.nb-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemFilter => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
