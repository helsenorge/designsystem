import type { HNDesignsystemDropdown } from '../../resources/Resources';

import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.Dropdown.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.Dropdown.nb-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemDropdown => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
