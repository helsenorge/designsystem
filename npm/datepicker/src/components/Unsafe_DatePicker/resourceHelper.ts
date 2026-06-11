import type { HNDesignsystemUnsafe_DatePicker } from '../../resources/Resources';

import { LanguageLocales } from '@helsenorge/designsystem-react';

import enGB from '../../resources/HN.Designsystem.Unsafe_DatePicker.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.Unsafe_DatePicker.nb-NO.json';
import nnNO from '../../resources/HN.Designsystem.Unsafe_DatePicker.nn-NO.json';
import seNO from '../../resources/HN.Designsystem.Unsafe_DatePicker.se-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemUnsafe_DatePicker => {
  switch (language) {
    case LanguageLocales.NORWEGIAN_NYNORSK:
      return nnNO;
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.SAMI_NORTHERN:
      return seNO;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
