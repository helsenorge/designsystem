import { LanguageLocales } from '../../constants';
import nbNO from '../../resources/HN.Designsystem.FormFieldTag.nb-NO.json';
import { HNDesignsystemFormFieldTag } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemFormFieldTag => {
  switch (language) {
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
