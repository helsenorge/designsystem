import type { HNDesignsystemChip } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.Chip.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.Chip.nb-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemChip => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
