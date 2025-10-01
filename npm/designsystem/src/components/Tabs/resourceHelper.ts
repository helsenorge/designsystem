import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.Tabs.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.Tabs.nb-NO.json';
import { HNDesignsystemTabs } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemTabs => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
