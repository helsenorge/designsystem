import { LanguageLocales } from '../../constants';
import nbNO from '../../resources/HN.Designsystem.HelpBubble.nb-NO.json';
import { HNDesignsystemHelpBubble } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemHelpBubble => {
  switch (language) {
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
