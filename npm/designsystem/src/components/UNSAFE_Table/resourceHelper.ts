import type { HNDesignsystemTable } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import nbNO from '../../resources/HN.Designsystem.Table.nb-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemTable => {
  switch (language) {
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
