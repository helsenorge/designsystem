import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.FormFieldTag.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.FormFieldTag.nb-NO.json';
import nnNO from '../../resources/HN.Designsystem.FormFieldTag.nn-NO.json';
import { HNDesignsystemFormFieldTag } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemFormFieldTag => {
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
