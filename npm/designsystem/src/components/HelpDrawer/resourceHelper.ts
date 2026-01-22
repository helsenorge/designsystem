import type { HNDesignsystemHelpDrawer } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import nbNO from '../../resources/HN.Designsystem.HelpDrawer.nb-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemHelpDrawer => {
  switch (language) {
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
