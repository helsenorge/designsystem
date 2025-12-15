import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.Input.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.Input.nb-NO.json';
import nnNO from '../../resources/HN.Designsystem.Input.nn-NO.json';
import { HNDesignsystemInput } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemInput => {
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
