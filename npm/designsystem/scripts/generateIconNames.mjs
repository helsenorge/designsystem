import { writeFileSync } from 'fs';
import { parse } from 'path';

import { glob } from 'glob';
import * as prettier from 'prettier';

const OUTPUT_FILE = 'src/components/Icons/IconNames.ts';

const iconList = await glob('src/components/Icons/*.tsx');

const iconNameList = iconList
  .map(path => parse(path).name)
  .map(name => `'${name}'`)
  .sort((a, b) => a.localeCompare(b))
  .join('| ');

const contents = `export type IconName = ${iconNameList};`;

const options = await prettier.resolveConfig(OUTPUT_FILE);

const formatted = await prettier.format(contents, { ...options, filepath: OUTPUT_FILE });

writeFileSync(OUTPUT_FILE, formatted);
