import type { HNDesignsystemDrawer } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.Drawer.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.Drawer.nb-NO.json';
import nnNO from '../../resources/HN.Designsystem.Drawer.nn-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemDrawer => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN_NYNORSK:
      return nnNO;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
