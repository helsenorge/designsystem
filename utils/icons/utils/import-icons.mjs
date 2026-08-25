/**
 * Importerer ikoner fra en nedlastet mappe med SVG-er og lager React-komponenter i designsystemet.
 *
 * Slik bruker du scriptet (stå i utils/icons):
 *   npm run import:icons -- <sti-til-nedlastet-mappe>
 *
 * Vil du hoppe over Confluence-steget (f.eks. ved testing)?
 *   npm run import:icons -- <sti-til-nedlastet-mappe> --skip-confluence
 *
 * Mappen du laster ned må se slik ut (PNGs-mapper blir ignorert):
 *   <mappe>/20260818_icons_PersonCommunication/SVGs/Icon_PersonCommunication_S_Normal.svg
 *   <mappe>/20260818_icons_PersonCommunication/SVGs/Icon_PersonCommunication_S_Hover.svg
 *   <mappe>/20260818_icons_PersonCommunication/SVGs/Icon_PersonCommunication_XS_Normal.svg
 *   <mappe>/20260818_icons_PersonCommunication/SVGs/Icon_PersonCommunication_XS_Hover.svg
 *
 * Dette gjør scriptet, steg for steg:
 *   1. Leter gjennom mappen og finner alle SVG-filer (hopper over PNGs-mapper).
 *   2. Leser navnet på hver fil for å finne ikonnavn, størrelse (S/XS/XXS) og variant (Normal/Hover).
 *   3. Åpner SVG-filen, fjerner <svg>-taggen rundt innholdet og fjerner alle fill="#000".
 *      (fill-rule og clip-rule beholdes.)
 *   4. Lager en ny fil per ikon i npm/designsystem/src/components/Icons/<Navn>.tsx.
 *      S_Normal -> small, S_Hover -> smallHover, XS_Normal -> xSmall, XS_Hover -> xSmallHover.
 *   5. Kjører prettier på de nye filene, så de får riktig formatering.
 *   6. Kjører "generate:iconnames" i npm/designsystem. Den oppdaterer IconNames.ts,
 *      som er listen over alle ikoner. Uten dette finnes ikke ikonet i ikonveggen i Storybook.
 *   7. Kjører "confluence:icons" i utils/icons. Den henter ikontabellen fra Confluence
 *      og oppdaterer AdditionalIconInformation.ts (alternative navn og kategorier).
 *      Ikonveggen i Storybook bruker denne filen når du søker – ikoner som mangler her
 *      blir borte fra veggen så fort du tar i søkefeltet.
 *
 * NB om Confluence-steget:
 *   - Nye ikoner må først legges inn i ikontabellen i Confluence, ellers kommer de
 *     ikke med i AdditionalIconInformation.ts.
 *   - På Mac styrer scriptet Chrome, så du må være innlogget på confluence.nhn.no i Chrome
 *     og ha slått på: View > Developer > Allow JavaScript from Apple Events.
 */
import { execFileSync } from 'child_process';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { basename, dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..', '..', '..');
const iconsOutDir = join(repoRoot, 'npm', 'designsystem', 'src', 'components', 'Icons');
const designsystemDir = join(repoRoot, 'npm', 'designsystem');
const iconsPackageDir = resolve(__dirname, '..');

// Filnavn: Icon_<Navn>_<Størrelse>_<Variant>.svg
const FILENAME_PATTERN = /^Icon_(.+)_(XXS|XS|S)_(Normal|Hover)\.svg$/i;

// Mapping fra <Størrelse>_<Variant> til konstantnavn i komponenten
const VARIANTS = {
  S_Normal: 'small',
  S_Hover: 'smallHover',
  XS_Normal: 'xSmall',
  XS_Hover: 'xSmallHover',
  XXS_Normal: 'xxSmall',
  XXS_Hover: 'xxSmallHover',
};

const findSvgFiles = dir => {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.toLowerCase().includes('png')) continue;
      files.push(...findSvgFiles(fullPath));
    } else if (entry.name.toLowerCase().endsWith('.svg')) {
      files.push(fullPath);
    }
  }
  return files;
};

const extractSvgContent = svg => {
  const match = svg.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  if (!match) return null;
  return match[1]
    .replace(/\s*fill="#000(?:000)?"/gi, '') // fjern kun fill="#000" / fill="#000000"
    .trim();
};

const buildComponent = (name, variants) => {
  const constants = Object.entries(VARIANTS)
    .filter(([key]) => variants[key])
    .map(([key, constName]) => `  const ${constName} = (\n    <>${variants[key]}</>\n  );`)
    .join('\n\n');

  const getIconArgs = ['size', 'isHovered', 'normal: small', 'normalHover: smallHover'];
  if (variants.XS_Normal && variants.XS_Hover) getIconArgs.push('xSmall', 'xSmallHover');
  if (variants.XXS_Normal && variants.XXS_Hover) getIconArgs.push('xxSmall', 'xxSmallHover');

  return `import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const ${name}: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
${constants}

  return getIcon({ ${getIconArgs.join(', ')} });
};

export default ${name};
`;
};

const run = (command, args, cwd) => {
  console.log(`\n> ${command} ${args.join(' ')}`);
  execFileSync(command, args, { cwd, stdio: 'inherit' });
};

const main = () => {
  const args = process.argv.slice(2);
  const skipConfluence = args.includes('--skip-confluence');
  const inputDir = args.find(arg => !arg.startsWith('--'));

  if (!inputDir) {
    console.error('Bruk: npm run import:icons -- <sti-til-nedlastet-mappe> [--skip-confluence]');
    process.exit(1);
  }

  const resolvedInput = resolve(inputDir);
  if (!existsSync(resolvedInput)) {
    console.error(`Finner ikke mappen: ${resolvedInput}`);
    process.exit(1);
  }

  const svgFiles = findSvgFiles(resolvedInput);
  if (svgFiles.length === 0) {
    console.error(`Fant ingen SVG-filer i ${resolvedInput}`);
    process.exit(1);
  }

  // Grupper varianter per ikonnavn
  const icons = {};
  for (const file of svgFiles) {
    const filename = basename(file);
    const match = filename.match(FILENAME_PATTERN);
    if (!match) {
      console.warn(`⚠ Hopper over fil med ukjent navneformat: ${filename}`);
      continue;
    }
    const [, name, size, variant] = match;
    const key = `${size.toUpperCase()}_${variant[0].toUpperCase()}${variant.slice(1).toLowerCase()}`;

    const content = extractSvgContent(readFileSync(file, 'utf8'));
    if (!content) {
      console.warn(`⚠ Fant ingen <svg>-innhold i: ${file}`);
      continue;
    }

    icons[name] ??= {};
    icons[name][key] = content;
  }

  const generatedFiles = [];
  for (const [name, variants] of Object.entries(icons)) {
    if (!variants.S_Normal || !variants.S_Hover) {
      console.error(`✗ ${name}: mangler S_Normal og/eller S_Hover – hopper over`);
      continue;
    }
    if (!variants.XS_Normal !== !variants.XS_Hover) {
      console.warn(`⚠ ${name}: har bare én av XS_Normal/XS_Hover – XS-variantene utelates fra getIcon`);
    }

    const outPath = join(iconsOutDir, `${name}.tsx`);
    const existed = existsSync(outPath);
    writeFileSync(outPath, buildComponent(name, variants), 'utf8');
    generatedFiles.push(outPath);
    console.log(`${existed ? '↻ Oppdaterte' : '✓ Opprettet'} ${outPath}`);
  }

  if (generatedFiles.length === 0) {
    console.error('Ingen ikoner ble generert.');
    process.exit(1);
  }

  run('npx', ['prettier', '--write', ...generatedFiles], repoRoot);
  run('npm', ['run', 'generate:iconnames'], designsystemDir);

  if (skipConfluence) {
    console.log('\nHoppet over confluence:icons (--skip-confluence). Kjør den manuelt fra utils/icons når du er klar.');
  } else {
    run('npm', ['run', 'confluence:icons'], iconsPackageDir);
  }

  console.log(`\nFerdig! Genererte/oppdaterte ${generatedFiles.length} ikon(er).`);
};

main();
