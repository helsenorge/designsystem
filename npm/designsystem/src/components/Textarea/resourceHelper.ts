import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.TextArea.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.TextArea.nb-NO.json';
import nnNO from '../../resources/HN.Designsystem.TextArea.nn-NO.json';
import { HNDesignsystemTextArea } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemTextArea => {
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
