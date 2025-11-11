#!/usr/bin/env node
/**
 * Before publishing/packing, replace the ./scss symlink with a real copy of lib/scss
 * so npm includes it in the tarball. This runs on prepack.
 */

import { promises as fs, existsSync, lstatSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(__dirname, '..');
const source = resolve(pkgRoot, 'lib/scss');
const target = resolve(pkgRoot, 'scss');

async function copyScss() {
  if (!existsSync(source)) {
    console.error(`[copy-scss-for-publish] Missing ${source}. Did you run build?`);
    process.exit(1);
  }

  // If target exists and is a symlink, remove it
  if (existsSync(target)) {
    const stat = lstatSync(target);
    if (stat.isSymbolicLink()) {
      console.log(`[copy-scss-for-publish] Removing symlink: ${target}`);
      await fs.rm(target, { recursive: true, force: true });
    } else if (stat.isDirectory()) {
      // Already a real directory, we're good
      console.log(`[copy-scss-for-publish] OK (already a directory): ${target}`);
      return;
    } else {
      // Something else is there, remove it
      await fs.rm(target, { recursive: true, force: true });
    }
  }

  // Copy lib/scss to scss
  console.log(`[copy-scss-for-publish] Copying ${source} -> ${target}`);
  await fs.cp(source, target, { recursive: true });
  console.log(`[copy-scss-for-publish] Done`);
}

copyScss().catch((err) => {
  console.error('[copy-scss-for-publish] Failed:', err);
  process.exit(1);
});
