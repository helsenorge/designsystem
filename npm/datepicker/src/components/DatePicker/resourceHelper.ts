import { LanguageLocales } from '@helsenorge/designsystem-react';

import enGB from '../../resources/HN.Designsystem.DatePicker.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.DatePicker.nb-NO.json';
import { HNDesignsystemDatePicker } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemDatePicker => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
