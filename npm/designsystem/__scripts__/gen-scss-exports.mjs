#!/usr/bin/env node
/**
 * Adds an explicit `exports` entry for each SCSS partial so consumers can `@use`
 * them by name (e.g. `scss/breakpoints` -> `./scss/_breakpoints.scss`).
 *
 * Vite 8 won't find the `_`-prefixed file via the `./scss/*`
 * wildcard, so each partial needs its own entry.
 */
import fs from 'node:fs';
import path from 'node:path';

const PKG_PATH = path.resolve('package.json');
const SRC_SCSS = path.resolve('src', 'scss');

if (!fs.existsSync(SRC_SCSS)) {
  console.error(`No ${SRC_SCSS} folder found.`);
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(PKG_PATH, 'utf8'));
pkg.exports ||= {};

const before = JSON.stringify(pkg.exports);

const partials = fs
  .readdirSync(SRC_SCSS, { withFileTypes: true })
  .filter(d => d.isFile() && /^_[^.]+\.scss$/.test(d.name))
  .map(d => d.name.replace(/^_(.+)\.scss$/, '$1'))
  .sort();

let added = 0;
for (const name of partials) {
  const exportKey = `./scss/${name}`;
  const target = `./scss/_${name}.scss`;
  if (pkg.exports[exportKey] === target) continue;
  pkg.exports[exportKey] = target;
  added++;
}

const after = JSON.stringify(pkg.exports);
if (before === after) {
  console.log(`No SCSS export changes (${partials.length} partials already present).`);
} else {
  fs.writeFileSync(PKG_PATH, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  console.log(`Added/updated ${added} SCSS partial export entries (of ${partials.length}).`);
}
