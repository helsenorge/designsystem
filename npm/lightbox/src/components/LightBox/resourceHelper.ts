import type { HNDesignsystemLightBox } from '../../resources/Resources';

import { LanguageLocales } from '@helsenorge/designsystem-react/constants';

import enGB from '../../resources/HN.Designsystem.LightBox.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.LightBox.nb-NO.json';
import nnNO from '../../resources/HN.Designsystem.LightBox.nn-NO.json';
import seNO from '../../resources/HN.Designsystem.LightBox.se-NO.json';

export const getResources = (language: LanguageLocales): HNDesignsystemLightBox => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN_NYNORSK:
      return nnNO;
    case LanguageLocales.SAMI_NORTHERN:
      return seNO;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
