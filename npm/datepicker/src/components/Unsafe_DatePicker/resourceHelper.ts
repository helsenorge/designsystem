import { LanguageLocales } from '@helsenorge/designsystem-react';

import nbNO from '../../resources/HN.Designsystem.Unsafe_DatePicker.nb-NO.json';
import { HNDesignsystemUnsafe_DatePicker } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemUnsafe_DatePicker => {
  switch (language) {
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
