// .storybook/main.js
const path = require('path');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const { base } = yargs(hideBin(process.argv).filter(x => x !== '--'))
  .options({
    base: {
      type: 'string',
      description: 'Public base path',
    },
  })
  .parseSync();

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
  // Oppsett for å serve storybook fra subfolder hentet fra: https://github.com/storybookjs/storybook/issues/1291
  // This is to change configurations of building process of storybook's main frame
  managerWebpack: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.output.publicPath = base;
    }
    return config;
  },
  managerHead: (head, { configType }) => {
    const injections = [
      `<link rel="shortcut icon" type="image/x-icon" href="${base}favicon.ico">`, // This set icon for your site.
      `<script>window.PREVIEW_URL = '${base}iframe.html'</script>`, // This decide how storybook's main frame visit stories
    ];
    return configType === 'PRODUCTION' ? `${head}${injections.join('')}` : head;
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = base;
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@helsenorge/designsystem-react': path.resolve(__dirname, '../src'),
    };

    return config;
  },
};
