module.exports = {
  linters: {
    '*': ['prettier --write "src/**/*.+(js|jsx|json|yml|yaml|scss|ts|tsx)"', 'git add'],
    '**/*.+(tsx|ts)': ['tslint -p .', 'jest --findRelatedTests'],
  },
};
