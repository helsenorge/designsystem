import { globSync } from 'glob';

const getEntryName = name => {
  return name.replace(/^src\//, '').replace(/\.tsx?$/, '');
};

const createEntries = (entryList, entry) => {
  const name = getEntryName(entry);

  if (name in entryList) {
    throw new Error(`${name} finnes flere ganger i listen med entries`);
  }
  entryList[name] = entry;

  return entryList;
};

export const alwaysIgnore = [
  '**/__snapshots__/**/*',
  '**/*.stories.tsx',
  '**/*.test.tsx',
  '**/*.scss',
  '**/*.scss.d.ts',
  '**/*.d.ts',
  '**/utils/**/*',
];

const components = globSync(`src/components/**/index.{ts,tsx}`, { ignore: alwaysIgnore });
const icons = globSync(`src/components/Icons/*.{ts,tsx}`, { ignore: alwaysIgnore });
const hooksAndExtras = globSync(`src/**/*.{ts,tsx}`, { ignore: [...alwaysIgnore, 'src/components/**/*'] });
const utils = globSync(`src/utils/*.ts`);

export const entries = [...components, ...icons, ...hooksAndExtras, ...utils].sort((a, b) => a.localeCompare(b)).reduce(createEntries, {});
