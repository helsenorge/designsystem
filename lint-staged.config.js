module.exports = {
  linters: {
    'src/**/*.+(js|jsx|json|yml|yaml|scss|ts|tsx)': [
      'prettier --write "src/**/*.+(js|jsx|json|yml|yaml|scss|ts|tsx)"',
      'jest --findRelatedTests',
      'git add'
    ]
  },
};
