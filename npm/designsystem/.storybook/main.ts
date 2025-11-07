import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path, { dirname, join } from 'path';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import type { StorybookConfig } from '@storybook/react-vite';

// This part has been automatically migrated to valid ESM format by Storybook.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

const { base } = yargs(hideBin(process.argv).filter(x => x !== '--'))
  .options({
    base: {
      type: 'string',
      description: 'Public base path',
    },
  })
  .parseSync();

// Use built version if USE_BUILT env var is set
const useBuiltVersion = process.env.USE_BUILT === 'true';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.@(mdx)',
    '../src/**/*.stories.@(tsx)',
    '../../datepicker/src/**/*.stories.@(tsx)',
    '../../lightbox/src/**/*.stories.@(tsx)',
    '../../../docs/guide/src/**/*.stories.@(tsx)',
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      strictMode: true,
    },
  },

  addons: [getAbsolutePath('@storybook/addon-a11y'), getAbsolutePath('@storybook/addon-docs'), getAbsolutePath('@chromatic-com/storybook')],

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
      // Use built lib or source based on USE_BUILT env var
      '@helsenorge/designsystem-react': useBuiltVersion ? path.resolve(__dirname, '../lib') : path.resolve(__dirname, '../src'),
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

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')));
}
