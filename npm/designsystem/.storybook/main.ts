import path, { dirname, join } from 'path';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.@(mdx)',
    '../src/**/*.stories.@(tsx)',
    '../../datepicker/src/**/*.stories.@(tsx)',
    '../../lightbox/src/**/*.stories.@(tsx)',
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      strictMode: true,
    },
  },

  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('storybook-addon-tag-badges'),
  ],

  async viteFinal(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@helsenorge/designsystem-react': path.resolve(__dirname, '../src'),
    };

    return config;
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  build: {
    test: {
      disableBlocks: false,
      disableAutoDocs: false,
      disableMDXEntries: false,
      disableDocgen: false,
    },
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
