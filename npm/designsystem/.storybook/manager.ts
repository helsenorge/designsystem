import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import logo from './hnd-logo.svg';

/* TODO: Make use of palette from DS. Got a weird error that I think stems from the custom webpack config which crashed the build */
const hndsTheme = create({
  base: 'light',
  colorSecondary: '#188097',
  appBg: '#E4F7F9',
  brandUrl: 'https://helsenorge.design',
  brandImage: logo,
});

addons.setConfig({
  theme: hndsTheme,
  sidebar: {
    showRoots: false,
  },
});
