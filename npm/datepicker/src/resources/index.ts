/*import { HNDesignsystemDatePicker } from '../types/Resources';

import LanguageLocales from '@helsenorge/core-utils/constants/languages';
import { getModifiedResourcesForTest } from '@helsenorge/framework-utils/resources';

import defaultResources from './HN.Designsystem.DatePicker.nb-NO.json';

type ResourceItem = { [key: string]: string } | Record<string, string>;

const defaultResourceName = 'HN.Designsystem.DatePicker.nb-NO';

export function getResources(projectName: string, language: LanguageLocales = LanguageLocales.NORWEGIAN): Promise<ResourceItem> {
  if (projectName === defaultResourceName && language === LanguageLocales.NORWEGIAN) {
    return Promise.resolve(defaultResources);
  }

  return import(`./${projectName}.${language}.json`);
}

export function getResourcesTestHelper(): HNDesignsystemDatePicker {
  return getModifiedResourcesForTest(defaultResources) as HNDesignsystemDatePicker;
}*/
