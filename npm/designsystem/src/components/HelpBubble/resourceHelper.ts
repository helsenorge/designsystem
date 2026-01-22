import type { HNDesignsystemHelpBubble } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import nbNO from '../../resources/HN.Designsystem.HelpBubble.nb-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemHelpBubble => {
  switch (language) {
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
