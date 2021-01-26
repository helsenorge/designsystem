import '@storybook/addon-knobs/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-viewport/register';
import '@storybook/addon-backgrounds/register';
import '@storybook/addon-a11y/register';
import {addons} from '@storybook/addons';
import {create} from '@storybook/theming/create';

/* TODO: Make use of palette from DS. Got a weird error that I think stems from the custom webpack config which crashed the build */
const hndsTheme = create({
  base: 'light',
  colorSecondary: '#188097',
  appBg: '#E4F7F9',
  brandUrl: 'https://helsenorge.design',
  brandImage: 'https://hndsstatic.blob.core.windows.net/images/hnd-logo.png',
});

addons.setConfig({
  theme: hndsTheme,
});
