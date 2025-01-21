import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

import { palette } from '../src/theme/palette';

import logo from './frankenstein-storybook.svg';
import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges';

const theme = create({
  base: 'light',
  colorSecondary: palette.blueberry500,
  appBg: palette.blueberry50,
  brandUrl: 'https://frankensteinstorybook.z1.web.core.windows.net/master/',
  brandImage: logo,
});

addons.setConfig({
  theme,
  tagBadges: [
    {
      tags: 'new',
      badge: {
        text: 'New',
        bgColor: palette.blueberry100,
        fgColor: palette.blueberry900,
      },
      display: {
        sidebar: ['component'],
        toolbar: true,
      },
    },
    {
      tags: /breaking(-change|-changes)?/,
      badge: {
        text: 'Breaking changes',
        bgColor: palette.banana100,
        fgColor: palette.banana900,
      },
      display: {
        sidebar: ['component'],
        toolbar: true,
      },
    },
    {
      tags: 'deprecated',
      badge: {
        text: 'Deprecated',
        bgColor: palette.cherry100,
        fgColor: palette.cherry900,
      },
      display: {
        sidebar: ['component'],
        toolbar: true,
      },
    },
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
});
