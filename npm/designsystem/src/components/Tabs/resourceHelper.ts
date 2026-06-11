import type { HNDesignsystemTabs } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.Tabs.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.Tabs.nb-NO.json';
import seNO from '../../resources/HN.Designsystem.Tabs.se-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemTabs => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.SAMI_NORTHERN:
      return seNO;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
