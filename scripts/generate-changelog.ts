/* eslint-disable no-console */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

import { ConventionalChangelog } from 'conventional-changelog';

const CHANGELOG_FILE = 'CHANGELOG.md';
const PACKAGE_FILE = 'package.json';
const TAG_PREFIX = 'v';

/** Matcher `vX.Y.Z` og `vX.Y.Z-beta.N`, men ikke produksjonstagger som `26.08.1`. */
const SEMVER_TAG_REGEX = new RegExp(`^${TAG_PREFIX}(\\d+\\.\\d+\\.\\d+(?:-[\\w.]+)?)$`);
const SEMVER_REGEX = /^\d+\.\d+\.\d+(?:-[\w.]+)?$/;

const git = (...args: string[]): string => execFileSync('git', args, { encoding: 'utf-8' }).trim();

/**
 * Nøkkelordet Azure DevOps bruker i commit-meldingen for å knytte en commit til et work item.
 *
 * conventional-commits-parser gir en referanse `action: null` hvis den ikke innledes med et kjent nøkkelord, og
 * conventionalcommits-preset skriver da ut «references» i stedet for «closes». Ved å registrere Azure-nøkkelordet som en
 * gyldig `referenceAction` får referansene en `action`, og de rendres som «closes» slik de gjorde før v39.5.0.
 *
 * Kolonet må være med: parseren krever whitespace rett etter nøkkelordet, og uten kolonet matcher ikke «Related work
 * items: #123».
 */
const AZURE_REFERENCE_ACTION = 'Related work items:';

/** Standardlisten til conventional-commits-parser, som må gjentas her fordi vi overstyrer `referenceActions`. */
const DEFAULT_REFERENCE_ACTIONS = ['close', 'closes', 'closed', 'fix', 'fixes', 'fixed', 'resolve', 'resolves', 'resolved'];

/**
 * Konteksten conventional-changelog-writer sender inn til lenkeformattererne under.
 * Vi typer kun feltene vi faktisk bruker.
 */
interface ChangelogContext {
  host?: string;
  owner?: string;
  repository?: string;
  repoUrl?: string;
  previousTag?: string;
  currentTag?: string;
}

/** Basis-URL til repoet, f.eks. `https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-CoreFrontend`. */
const repositoryUrl = ({ host, owner, repository, repoUrl }: ChangelogContext): string =>
  host && owner && repository ? `${host}/${owner}/${repository}` : (repoUrl ?? '');

/**
 * Basis-URL til Azure DevOps-prosjektet, f.eks. `https://dev.azure.com/nhnfelles/Helsenorge`.
 * Utledes ved å fjerne `/_git/<repo>`-suffikset fra repo-URLen.
 */
const projectUrl = (context: ChangelogContext): string => repositoryUrl(context).replace(/\/_git\/[^/]+$/, '');

/**
 * Azure DevOps sitt format for å sammenligne to tagger.
 *
 * Standardformatet i conventionalcommits-preset er GitHub-formatet `/compare/<forrige>...<gjeldende>`, som gir 404 på
 * Azure DevOps.
 */
const formatCompareUrl = (context: ChangelogContext): string =>
  `${repositoryUrl(context)}/branchCompare?baseVersion=GT${encodeURIComponent(context.previousTag ?? '')}` +
  `&targetVersion=GT${encodeURIComponent(context.currentTag ?? '')}`;

/**
 * Azure DevOps sitt format for en enkelt commit.
 *
 * conventional-changelog-writer setter `context.commit` til `'commits'` som standard, mens Azure DevOps bruker entall.
 */
const formatCommitUrl = (context: ChangelogContext, commit: { hash?: string | null }): string =>
  `${repositoryUrl(context)}/commit/${commit.hash ?? ''}`;

/**
 * Azure DevOps sitt format for et work item.
 *
 * Standardformatet i conventionalcommits-preset er GitHub-formatet `/issues/<id>` under repoet, som gir 404 på Azure
 * DevOps. Work items ligger på prosjektnivå, ikke under repoet.
 */
const formatIssueUrl = (context: ChangelogContext, reference: { issue?: string }): string =>
  `${projectUrl(context)}/_workitems/edit/${reference.issue ?? ''}`;

const compareSemverVersions = (a: string, b: string): number => {
  const [coreA, prereleaseA = ''] = a.split('-');
  const [coreB, prereleaseB = ''] = b.split('-');
  const pa = coreA.split('.').map(Number);
  const pb = coreB.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if (pa[i] !== pb[i]) return pa[i] - pb[i];
  }
  if (prereleaseA === prereleaseB) return 0;
  // En versjon uten prerelease er alltid nyere enn den samme versjonen med prerelease.
  if (!prereleaseA) return 1;
  if (!prereleaseB) return -1;

  return prereleaseA.localeCompare(prereleaseB, undefined, { numeric: true });
};

/** Henter ferske tagger fra origin. Feiler ikke hvis vi er offline – da brukes taggene som finnes lokalt. */
const fetchTags = (): void => {
  try {
    git('fetch', '--tags', '--force');
  } catch {
    console.warn('Advarsel: klarte ikke hente tagger fra origin. Bruker taggene som finnes lokalt.');
  }
};

/**
 * Finner forrige release-tag uavhengig av om taggen er reachable fra HEAD.
 *
 * conventional-changelog finner tagger via `git log --decorate HEAD`, altså kun tagger som er reachable fra HEAD.
 * Release-tagger i dette repoet lages på en release-branch som squash-merges til master, og da blir taggen liggende
 * igjen på en commit som ikke er en del av master. Resultatet er at conventional-changelog stille faller tilbake til
 * en eldre tag, slik at både compare-lenken og commit-intervallet i CHANGELOG.md blir feil.
 *
 * Derfor leser vi alle tagger med `git tag --list` og velger den høyeste `vX.Y.Z`-taggen som er lavere enn versjonen
 * som slippes nå. Produksjonstagger (f.eks. `26.08.1`) filtreres bort fordi de mangler `v`-prefikset.
 */
const getPreviousTag = (version: string): string => {
  const [previous] = git('tag', '--list', `${TAG_PREFIX}*`)
    .split('\n')
    .map(tag => SEMVER_TAG_REGEX.exec(tag.trim()))
    .filter(match => match !== null)
    .map(match => ({ tag: match[0], version: match[1] }))
    .filter(candidate => compareSemverVersions(candidate.version, version) < 0)
    .sort((a, b) => compareSemverVersions(b.version, a.version));

  if (!previous) {
    throw new Error(
      `Fant ingen tidligere ${TAG_PREFIX}X.Y.Z-tag som er lavere enn versjonen som slippes. ` +
        'Kan ikke generere et korrekt CHANGELOG-innslag. Kjør `git fetch --tags --force` og prøv igjen.'
    );
  }

  return previous.tag;
};

/** Advarer hvis forrige release-tag ligger utenfor historikken til HEAD. */
const warnIfUnreachable = (previousTag: string): void => {
  try {
    git('merge-base', '--is-ancestor', previousTag, 'HEAD');
  } catch {
    console.warn(
      `Advarsel: taggen ${previousTag} er ikke reachable fra HEAD (den ligger sannsynligvis på en release-branch som ` +
        'ble squash-merget). Den brukes likevel, siden den er den reelle forrige releasen.'
    );
  }
};

const { version } = JSON.parse(fs.readFileSync(PACKAGE_FILE, 'utf-8'));

if (!SEMVER_REGEX.test(version)) {
  throw new Error(`Versjonen «${version}» i ${PACKAGE_FILE} er ikke en gyldig semver-versjon.`);
}

fetchTags();

const previousTag = getPreviousTag(version);
const currentTag = `${TAG_PREFIX}${version}`;

warnIfUnreachable(previousTag);

console.log(`Genererer CHANGELOG-innslag for ${currentTag} med ${previousTag} som utgangspunkt.`);

const generator = new ConventionalChangelog();

generator
  .readPackage()
  .loadPreset({
    name: 'conventionalcommits',
    // conventional-changelog v8 bruker ikke lenger Handlebars-maler. Formater som `compareUrlFormat` og `commitUrlFormat`
    // ble erstattet av formatterer-funksjoner, og strengvariantene blir stille ignorert.
    formatCompareUrl,
    formatCommitUrl,
    formatIssueUrl,
  })
  .commits(
    { from: previousTag, to: 'HEAD' },
    {
      headerPattern: /(?:\(Merged PR \d+: \))?([a-zA-Z]+)(?:\(([\w$.\-*\s]*)\))?!?:(.*)/,
      headerCorrespondence: ['type', 'scope', 'subject'],
      referenceActions: [...DEFAULT_REFERENCE_ACTIONS, AZURE_REFERENCE_ACTION],
    }
  )
  .context({ previousTag, currentTag })
  .options({ releaseCount: 1, outputUnreleased: true })
  .tags({ prefix: TAG_PREFIX });

const chunks: string[] = [];

for await (const chunk of generator.write()) {
  chunks.push(chunk);
}

const newEntry = chunks.join('');
const existing = fs.existsSync(CHANGELOG_FILE) ? fs.readFileSync(CHANGELOG_FILE, 'utf-8') : '';
const separator = existing.startsWith('\n') ? '' : '\n';

fs.writeFileSync(CHANGELOG_FILE, newEntry + separator + existing);

console.log('CHANGELOG.md updated.');
