module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss}': ['stylelint --fix', 'prettier --write'],
  '*.{md,json}': ['prettier --write'],
};
