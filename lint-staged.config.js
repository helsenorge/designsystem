// eslint-disable-next-line no-undef
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{css,scss}': ['stylelint --fix'],
  '*.{js,jsx,ts,tsx,json,css,scss,md}': ['prettier --write'],
};
