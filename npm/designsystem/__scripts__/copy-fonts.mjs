#!/usr/bin/env node
/**
 * Copies all font files from src/fonts to the package root ./fonts directory.
 * Ensures that static assets are available for consumers after publish.
 * Replaces existing ./fonts directory if present.
 */

import { promises as fs, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(__dirname, '..');
const srcFonts = resolve(pkgRoot, 'src/fonts');
const destFonts = resolve(pkgRoot, 'fonts');
const lockDir = resolve(pkgRoot, '.copy-fonts.lock');

async function withLock(fn) {
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

async function copyFonts() {
  if (!existsSync(srcFonts)) {
    console.error(`[copy-fonts] Missing ${srcFonts}.`);
    process.exit(1);
  }

  // Remove existing fonts directory
  if (existsSync(destFonts)) {
    await fs.rm(destFonts, { recursive: true, force: true });
  }

  // Recursively copy src/fonts to fonts
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

  await copyDir(srcFonts, destFonts);
  console.log(`[copy-fonts] Copied ${srcFonts} -> ${destFonts}`);
}

withLock(copyFonts).catch((err) => {
  console.error('[copy-fonts] Failed:', err);
  process.exit(1);
});
