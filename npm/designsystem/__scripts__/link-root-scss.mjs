#!/usr/bin/env node
/**
 * After building designsystem (which outputs SCSS to lib/scss), this script creates a cross-platform symlink at
 * ./scss → ./lib/scss so local workspace builds resolve imports like "@helsenorge/designsystem-react/scss/..."
 * exactly the same as consumers do after publish (where "lib" becomes the package root via publishConfig.directory).
 * It is idempotent: if ./scss already exists and points to lib/scss it does nothing; otherwise it replaces it.
 */

import { promises as fs, existsSync, lstatSync, realpathSync } from 'node:fs';
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

      if (stat.isSymbolicLink()) {
        try {
          const dest = realpathSync(link);
          if (dest === target) {
            console.log(`[link-root-scss] OK (already linked): ${link} -> ${dest}`);
            return;
          }
        } catch {
        }
      }

      await fs.rm(link, { recursive: true, force: true });
    } catch {
    }
  }

  const type = process.platform === 'win32' ? 'junction' : 'dir';

  try {
    await fs.symlink(target, link, type);
    console.log(`[link-root-scss] Linked ${link} -> ${target}`);
  } catch (e) {
    if ((e && e.code === 'EEXIST') || (e && e.code === 'EPERM')) {
      try {
        const dest = realpathSync(link);
        if (dest === target) {
          console.log(`[link-root-scss] OK (created elsewhere): ${link} -> ${dest}`);
          return;
        }
      } catch {
      }
    }
    console.error('[link-root-scss] Failed:', e);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('[link-root-scss] Failed:', err);
  process.exit(1);
});
