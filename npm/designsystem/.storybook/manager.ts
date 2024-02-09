import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import { palette } from '../src/theme/palette';

import logo from './hnd-logo.svg';

const hndsTheme = create({
  base: 'light',
  colorSecondary: palette.blueberry500,
  appBg: palette.blueberry50,
  brandUrl: 'https://frankensteinstorybook.z1.web.core.windows.net/master/',
  brandImage: logo,
});

addons.setConfig({
  theme: hndsTheme,
});
