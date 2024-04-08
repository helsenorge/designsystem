import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

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
});
