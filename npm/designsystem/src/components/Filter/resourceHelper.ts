import type { HNDesignsystemFilter } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.Filter.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.Filter.nb-NO.json';
import nnNO from '../../resources/HN.Designsystem.Filter.nn-NO.json';
import seNO from '../../resources/HN.Designsystem.Filter.se-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemFilter => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN_NYNORSK:
      return nnNO;
    case LanguageLocales.SAMI_NORTHERN:
      return seNO;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
