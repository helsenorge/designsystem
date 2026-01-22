import type { HNDesignsystemLinkList } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.LinkList.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.LinkList.nb-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemLinkList => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
