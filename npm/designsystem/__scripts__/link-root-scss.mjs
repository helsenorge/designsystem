#!/usr/bin/env node
/**
 * After building designsystem (which outputs SCSS to lib/scss), this script creates a cross-platform symlink at
 * ./scss → ./lib/scss so local workspace builds resolve imports like "@helsenorge/designsystem-react/scss/..."
 * exactly the same as consumers do after publish (where "lib" becomes the package root via publishConfig.directory).
 * It is idempotent and CI-safe: if ./scss already points to lib/scss it does nothing; otherwise it replaces it.
 */

import { promises as fs, existsSync, lstatSync, realpathSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(__dirname, '..');
const target = resolve(pkgRoot, 'lib/scss');
const link = resolve(pkgRoot, 'scss');
const lockDir = resolve(pkgRoot, '.link-root-scss.lock');

async function withLock(fn) {
  // mkdir-as-lock: succeeds once, others see EEXIST and wait briefly
  const maxWait = 20;
  for (let i = 0; i < maxWait; i++) {
    try {
      await fs.mkdir(lockDir);
      try {
        return await fn();
      } finally {
        await fs.rm(lockDir, { recursive: true, force: true });
      }
    } catch (e) {
      if (e && e.code === 'EEXIST') {
        await new Promise(r => setTimeout(r, 50));
        continue;
      }
      throw e;
    }
  }
  throw new Error('lock timeout');
}

async function ensureLink() {
  if (!existsSync(target)) {
    console.error(`[link-root-scss] Missing ${target}. Did you run build?`);
    process.exit(1);
  }

  // If link exists and already points to target, we're done.
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
          // fall through to replace
        }
      }
    } catch {
      // fall through
    }
  }

  // Replace whatever is there (dir/file/wrong symlink)
  await fs.rm(link, { recursive: true, force: true });

  const type = process.platform === 'win32' ? 'junction' : 'dir';
  try {
    await fs.symlink(target, link, type);
    console.log(`[link-root-scss] Linked ${link} -> ${target}`);
  } catch (e) {
    if (e && e.code === 'EEXIST') {
      // Another concurrent job created it; verify it’s correct
      try {
        const dest = realpathSync(link);
        if (dest === target) {
          console.log(`[link-root-scss] OK (created elsewhere): ${link} -> ${dest}`);
          return;
        }
      } catch {}
    }
    console.error('[link-root-scss] Failed:', e);
    process.exit(1);
  }
}

withLock(ensureLink).catch((err) => {
  console.error('[link-root-scss] Failed:', err);
  process.exit(1);
});
