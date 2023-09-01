// .storybook/main.js
const path = require('path');

module.exports = {
  core: { builder: '@storybook/builder-vite' },
  stories: ['../src/**/*.stories.@(tsx)', '../../datepicker/src/**/*.stories.@(tsx)'],
  framework: '@storybook/react',
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    'storybook-addon-html-validator',
  ],
  features: {
    storyStoreV7: true,
    buildStoriesJson: true,
    modernInlineRender: true,
  },
};
