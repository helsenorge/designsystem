import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges';

import { palette } from '../src/theme/palette';

import logo from './frankenstein-storybook.svg';

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
      tags: 'breaking',
      badge: {
        text: 'Breaking',
        bgColor: '#fcf2bf',
        fgColor: '#764f00',
        tooltip: 'Breaking changes added to this component',
      },
    },
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
});
