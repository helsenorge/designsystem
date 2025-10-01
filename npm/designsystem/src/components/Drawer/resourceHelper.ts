import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.Drawer.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.Drawer.nb-NO.json';
import { HNDesignsystemDrawer } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemDrawer => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
