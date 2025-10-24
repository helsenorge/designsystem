#!/usr/bin/env node
/**
 * After building designsystem (which outputs SCSS to lib/scss), this script creates a cross-platform symlink at 
 * ./scss → ./lib/scss so local workspace builds resolve imports like "@helsenorge/designsystem-react/scss/..." 
 * exactly the same as consumers do after publish (where "lib" becomes the package root via publishConfig.directory). 
 * It removes any existing ./scss, errors if lib/scss is missing.
 */

import { promises as fs, existsSync, lstatSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(__dirname, '..');
const target = resolve(pkgRoot, 'lib/scss');
const link = resolve(pkgRoot, 'scss');

async function main() {
  if (!existsSync(target)) {
    console.error(`[link-root-scss] Missing ${target}. Did you run build?`);
    process.exit(1);
  }
  if (existsSync(link)) {
    try {
      const stat = lstatSync(link);
      if (stat.isSymbolicLink() || stat.isDirectory() || stat.isFile()) {
        await fs.rm(link, { recursive: true, force: true });
      }
    } catch {}
  }
  const type = process.platform === 'win32' ? 'junction' : 'dir';
  await fs.symlink(target, link, type);
  console.log(`[link-root-scss] Linked ${link} -> ${target}`);
}

main().catch((err) => {
  console.error('[link-root-scss] Failed:', err);
  process.exit(1);
});
