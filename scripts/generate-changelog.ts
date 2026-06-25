/* eslint-disable no-console */
import fs from 'node:fs';

import { ConventionalChangelog } from 'conventional-changelog';

const CHANGELOG_FILE = 'CHANGELOG.md';

// Versjonen ligger i npm/designsystem/package.json (ikke i root sin package.json).
const PACKAGE_FILE = 'npm/designsystem/package.json';

const generator = new ConventionalChangelog();

generator
  .readPackage(PACKAGE_FILE)
  .loadPreset({
    name: 'conventionalcommits',
    // GitHub-formatet for å sammenlikne tagger (publisert CHANGELOG peker mot github.com/helsenorge/designsystem)
    compareUrlFormat: '{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}',
  })
  .commits(
    {},
    {
      // Støtte for formatet Azure DevOps bruker som default når pull requests fullføres
      headerPattern: /(?:\(Merged PR \d+: \))?([a-zA-Z]+)(?:\(([\w$.\-*\s]*)\))?!?:(.*)/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    }
  )
  // Generer kun den nyeste seksjonen og legg den øverst i filen – eksisterende historikk røres aldri.
  .options({ releaseCount: 1, outputUnreleased: true })
  .tags({ prefix: 'v' });

const chunks: string[] = [];

for await (const chunk of generator.write()) {
  chunks.push(chunk);
}

const newEntry = chunks.join('');
const existing = fs.existsSync(CHANGELOG_FILE) ? fs.readFileSync(CHANGELOG_FILE, 'utf-8') : '';
const separator = existing.startsWith('\n') ? '' : '\n';

fs.writeFileSync(CHANGELOG_FILE, newEntry + separator + existing);

console.log('CHANGELOG.md updated.');
