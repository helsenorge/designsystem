import type { HNDesignsystemTable } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.Table.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.Table.nb-NO.json';
import nnNO from '../../resources/HN.Designsystem.Table.nn-NO.json';
import seNO from '../../resources/HN.Designsystem.Table.se-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemTable => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.SAMI_NORTHERN:
      return seNO;
    case LanguageLocales.NORWEGIAN_NYNORSK:
      return nnNO;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
