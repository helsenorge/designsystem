import type { HNDesignsystemUnsafe_DatePicker } from '../../resources/Resources';

import { LanguageLocales } from '@helsenorge/designsystem-react';

import nbNO from '../../resources/HN.Designsystem.Unsafe_DatePicker.nb-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemUnsafe_DatePicker => {
  switch (language) {
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
