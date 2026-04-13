const conventionalCommitsConfig = require('conventional-changelog-conventionalcommits').default;

async function customConfig() {
  const config = await conventionalCommitsConfig({
    // Støtte for URL-formatet som github bruker for å sammenlikne tager
    compareUrlFormat: '{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}',
  });

  return {
    ...config,
    parserOpts: {
      ...config.parserOpts,
      // Støtte for formatet som Azure Devops bruker som default når pull requests completes
      headerPattern: '(?:\\(Merged PR \\d+: \\))?([a-zA-Z]+)(?:\\(([\\w$\\.\\-*\\s]*)\\))?\\!?:(.*)',
    },
  };
}

module.exports = customConfig();
