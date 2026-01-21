import type { HNDesignsystemPanel } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.Panel.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.Panel.nb-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemPanel => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
