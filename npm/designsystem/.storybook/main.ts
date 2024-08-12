import type { StorybookConfig } from '@storybook/react-vite';
import path, { dirname, join } from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const { base } = yargs(hideBin(process.argv).filter(x => x !== '--'))
  .options({
    base: {
      type: 'string',
      description: 'Public base path',
    },
  })
  .parseSync();

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(tsx)', '../../datepicker/src/**/*.stories.@(tsx)', '../../lightbox/src/**/*.stories.@(tsx)'],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      strictMode: true,
    },
  },

  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-backgrounds'),
    getAbsolutePath('@storybook/addon-controls'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-viewport'),
    getAbsolutePath('@storybook/addon-toolbars'),
    // getAbsolutePath('storybook-addon-html-validator'), @todo https://github.com/dimafirsov/storybook-html-validator/issues/15
  ],

  // Oppsett for å serve storybook fra subfolder hentet fra: https://github.com/storybookjs/storybook/issues/1291
  // This is to change configurations of building process of storybook's main frame
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
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@helsenorge/designsystem-react': path.resolve(__dirname, '../src'),
    };

    return config;
  },

  docs: {
    autodocs: true,
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
