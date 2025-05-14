import { LanguageLocales } from '../../constants';
import enGB from '../../resources/HN.Designsystem.InfoTeaser.en-GB.json';
import nbNO from '../../resources/HN.Designsystem.InfoTeaser.nb-NO.json';
import { HNDesignsystemInfoTeaser } from '../../resources/Resources';

export const getResources = (language: LanguageLocales): HNDesignsystemInfoTeaser => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return enGB;
    case LanguageLocales.NORWEGIAN:
    default:
      return nbNO;
  }
};
