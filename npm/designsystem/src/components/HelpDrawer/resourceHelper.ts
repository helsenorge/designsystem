import { LanguageLocales } from '../../constants';
import nbNO from '../../resources/HN.Designsystem.HelpDrawer.nb-NO.json';
import { HNDesignsystemHelpDrawer } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemHelpDrawer => {
  switch (language) {
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
