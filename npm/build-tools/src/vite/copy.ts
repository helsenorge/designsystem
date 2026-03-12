#!/usr/bin/env node
import * as fs from 'node:fs/promises';
import { glob } from 'node:fs/promises';
import * as path from 'node:path';
import { parseArgs } from 'node:util';

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    outDir: { type: 'string', default: 'lib' },
    root: { type: 'string', multiple: true, default: [] },
    include: { type: 'string', multiple: true, default: [] },
    utils: { type: 'string', multiple: true, default: [] },
    rm: { type: 'string', multiple: true, default: [] },
  },
});

const { outDir, root, utils, rm } = values as {
  outDir: string;
  root: string[];
  include: string[];
  utils: string[];
  rm: string[];
};
// Combine --include values with positional arguments
const include = [...(values.include ?? []), ...positionals];

const outputPath = path.resolve(process.cwd(), outDir);

async function globFiles(patterns: string[]): Promise<string[]> {
  const results: string[] = [];
  for (const pattern of patterns) {
    for await (const entry of glob(pattern)) {
      // Check if it's a file (not directory/symlink)
      const stat = await fs.stat(entry).catch(() => null);
      if (stat?.isFile()) {
        results.push(entry);
      }
    }
  }
  return results;
}

async function copyFile(src: string, dest: string): Promise<void> {
  const destDir = path.dirname(dest);
  await fs.mkdir(destDir, { recursive: true });
  await fs.copyFile(src, dest);
}

async function copyFlat(patterns: string[], destDir: string): Promise<void> {
  if (patterns.length === 0) return;
  const files = await globFiles(patterns);
  await Promise.all(files.map(file => copyFile(file, path.join(destDir, path.basename(file)))));
}

async function copyWithStructure(patterns: string[], destDir: string, stripDirs: number): Promise<void> {
  if (patterns.length === 0) return;
  const files = await globFiles(patterns);
  await Promise.all(
    files.map(file => {
      const parts = file.split(path.sep);
      const relativePath = parts.slice(stripDirs).join(path.sep);
      return copyFile(file, path.join(destDir, relativePath));
    })
  );
}

async function removeFiles(patterns: string[]): Promise<void> {
  if (patterns.length === 0) return;
  const files = await globFiles(patterns);
  await Promise.all(files.map(file => fs.rm(file, { recursive: true, force: true })));
}

async function main(): Promise<void> {
  await Promise.all([
    copyFlat(root, outputPath),
    copyWithStructure(include, outputPath, 1),
    copyFlat(utils, path.join(outputPath, 'utils')),
  ]);

  await removeFiles(rm);
}

main().catch(err => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
