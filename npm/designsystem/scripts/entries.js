import glob from 'glob';

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

const components = glob.sync(`src/components/**/index.{ts,tsx}`, { ignore: alwaysIgnore });
const icons = glob.sync(`src/components/Icons/*.tsx`, { ignore: alwaysIgnore });
const hooksAndExtras = glob.sync(`src/**/*.{ts,tsx}`, { ignore: [...alwaysIgnore, 'src/components/**/*'] });
const utils = glob.sync(`src/utils/*.ts`);

export const entries = [...components, ...icons, ...hooksAndExtras, ...utils].sort((a, b) => a.localeCompare(b)).reduce(createEntries, {});
