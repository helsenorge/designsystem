import glob from 'glob';
import fs from 'fs';
import { dirname, join, basename, extname } from 'path';
import docgen from 'react-docgen-typescript';

import { alwaysIgnore } from './entries.js';

const { parse } = docgen.withCustomConfig('./tsconfig.json', {
  propFilter: {
    skipPropsWithName: ['ref', 'key'],
  },
  savePropValueAsString: true,
  shouldRemoveUndefinedFromOptional: true,
  shouldExtractLiteralValuesFromEnum: true,
});

const filterComponent = file => {
  if (file.endsWith('/Icons/Icon.tsx')) {
    return true;
  }
  if (basename(dirname(file)) !== basename(file, extname(file))) {
    return false;
  }

  return true;
};

const components = glob.sync(`src/components/**/*.tsx`, { ignore: alwaysIgnore }).filter(filterComponent);

const writeComponentData = () =>
  components.forEach(file => {
    const [{ props = {} } = {}] = parse(file);
    const fileDirectory = dirname(file);
    const json = JSON.stringify({ props });
    const componentDataFilename = join(process.cwd(), fileDirectory, 'componentdata.json');
    fs.writeFileSync(componentDataFilename, json);
  });

writeComponentData();
