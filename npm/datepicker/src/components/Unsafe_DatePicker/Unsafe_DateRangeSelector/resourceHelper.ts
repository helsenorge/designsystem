import type { HNDesignsystemUnsafe_DateRangeSelector } from '@helsenorge/datepicker/resources/Resources';
import { LanguageLocales } from '@helsenorge/designsystem-react';

import enGB from '../../../resources/HN.Designsystem.Unsafe_DateRangeSelector.en-GB.json';
import nbNO from '../../../resources/HN.Designsystem.Unsafe_DateRangeSelector.nb-NO.json';
import nnNO from '../../../resources/HN.Designsystem.Unsafe_DateRangeSelector.nn-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemUnsafe_DateRangeSelector => {
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
