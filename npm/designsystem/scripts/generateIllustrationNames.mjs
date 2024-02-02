import { writeFileSync, existsSync } from 'fs';
import { parse } from 'path';

import { glob } from 'glob';
import prettier from 'prettier';

const FOLDER = 'src/components/Illustrations';

const OUTPUT_FILE = `${FOLDER}/IllustrationNames.ts`;

const SIZE_LIST = ['Small', 'Medium', 'Large'];

const illustrationList = await glob(`${FOLDER}/*.tsx`, { ignore: SIZE_LIST.map(size => `**/*${size}.tsx`) });

const illustrationNameList = illustrationList
  .map(path => parse(path).name)
  .map(name => `'${name}'`)
  .sort((a, b) => a.localeCompare(b))
  .join(',');

const illustrationSizes = illustrationList
  .map(path => parse(path).name)
  .sort((a, b) => a.localeCompare(b))
  .reduce((sizeList, iconName) => {
    sizeList[iconName] = {};

    SIZE_LIST.forEach(size => {
      const path = `${FOLDER}/${iconName}${size}.tsx`;

      if (existsSync(path)) {
        sizeList[iconName][size.toLowerCase()] = `${iconName}${size}`;
      }
    });

    return sizeList;
  }, {});

const contents = `/** AUTO-GENERATED - DO NOT CHANGE MANUALLY **/

export const IllustrationList = [${illustrationNameList}] as const;

export interface IllustrationSize {
  small?: string;
  medium?: string;
  large?: string;
}

export const IllustrationSizeList: Record<IllustrationName, IllustrationSize> = ${JSON.stringify(illustrationSizes)}

export type IllustrationName = (typeof IllustrationList)[number];`;

const options = await prettier.resolveConfig(OUTPUT_FILE);

const formatted = await prettier.format(contents, { ...options, filepath: OUTPUT_FILE });

writeFileSync(OUTPUT_FILE, formatted);
