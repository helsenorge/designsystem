#!/usr/bin/env node
/**
 * Copies all SCSS files from lib/scss to the package root ./scss directory.
 * Ensures that SCSS assets are available for consumers after publish.
 * Replaces existing ./scss directory if present.
 */

import { promises as fs, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(__dirname, '..');
const srcScss = resolve(pkgRoot, 'lib/scss');
const destScss = resolve(pkgRoot, 'scss');

async function copyScss() {
  if (!existsSync(srcScss)) {
    console.error(`[copy-scss] Missing ${srcScss}.`);
    process.exit(1);
  }

  // Remove existing scss directory
  if (existsSync(destScss)) {
    await fs.rm(destScss, { recursive: true, force: true });
  }

  // Recursively copy lib/scss to scss
  async function copyDir(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    for (const entry of await fs.readdir(src, { withFileTypes: true })) {
      const srcPath = resolve(src, entry.name);
      const destPath = resolve(dest, entry.name);
      if (entry.isDirectory()) {
        await copyDir(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
  }

  await copyDir(srcScss, destScss);
  console.log(`[copy-scss] Copied ${srcScss} -> ${destScss}`);
}

copyScss().catch(err => {
  console.error('[copy-scss] Failed:', err);
  process.exit(1);
});
