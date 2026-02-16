/*import { HNDesignsystemLightBox } from '../types/Resources';

import LanguageLocales from '@helsenorge/core-utils/constants/languages';
import { getModifiedResourcesForTest } from '@helsenorge/framework-utils/resources';

import defaultResources from './HN.Designsystem.LightBox.nb-NO.json';

type ResourceItem = { [key: string]: string } | Record<string, string>;

const defaultResourceName = 'HN.Designsystem.LightBox.nb-NO';

export function getResources(projectName: string, language: LanguageLocales = LanguageLocales.NORWEGIAN): Promise<ResourceItem> {
  if (projectName === defaultResourceName && language === LanguageLocales.NORWEGIAN) {
    return Promise.resolve(defaultResources);
  }

  return import(`./${projectName}.${language}.json`);
}

export function getResourcesTestHelper(): HNDesignsystemLightBox {
  return getModifiedResourcesForTest(defaultResources) as HNDesignsystemLightBox;
}*/
