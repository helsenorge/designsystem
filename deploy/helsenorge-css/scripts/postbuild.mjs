/**
 * Etterbehandler dist etter `vite build`:
 *  - skriver assets.json med nøkkelen `helsenorge.css` (samme kontrakt som Core-frontend/CMS bruker)
 *  - kopierer filen uten hash til static/css/helsenorge/helsenorge.css
 *  - lager .gz-kopier av css (hashet og uhashet)
 *  - fjerner Vites interne manifest og eventuelle tomme js-filer
 */
import { existsSync, readFileSync, readdirSync, rmSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'dist');
const viteManifestPath = join(outDir, 'vite-manifest.json');
const manifestFilename = process.env.HELSENORGE_CSS_MANIFEST ?? 'assets.json';

const viteManifest = JSON.parse(readFileSync(viteManifestPath, 'utf8'));
const entry = Object.values(viteManifest).find(item => item.isEntry);
const cssFile = entry?.file?.endsWith('.css') ? entry.file : entry?.css?.[0];

if (!cssFile) {
  throw new Error('Fant ikke helsenorge.css i Vite-manifestet');
}

const hashedPath = join(outDir, cssFile);
const unhashedDir = join(outDir, 'static/css/helsenorge');
const unhashedPath = join(unhashedDir, 'helsenorge.css');

mkdirSync(unhashedDir, { recursive: true });
copyFileSync(hashedPath, unhashedPath);

for (const file of [hashedPath, unhashedPath]) {
  writeFileSync(`${file}.gz`, gzipSync(readFileSync(file), { level: 9 }));
}

writeFileSync(join(outDir, manifestFilename), JSON.stringify({ 'helsenorge.css': { file: cssFile, js: [], css: [] } }, null, 2));

rmSync(viteManifestPath);
const jsDir = join(outDir, 'static/js');
if (existsSync(jsDir)) {
  readdirSync(jsDir).forEach(file => rmSync(join(jsDir, file)));
  rmSync(jsDir, { recursive: true });
}

console.log(`helsenorge.css: ${cssFile} (manifest: ${manifestFilename})`);
