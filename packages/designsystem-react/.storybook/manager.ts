import '@storybook/addon-actions/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-viewport/register';
import '@storybook/addon-backgrounds/register';
import {addons} from '@storybook/addons';
import {addParameters} from '@storybook/react';
import {create} from '@storybook/theming/create';

/* TODO: Make use of palette from DS. Got a weird error that I think stems from webpack which crashed the build */
const hndsTheme = create({
  base: 'light',
  colorSecondary: '#01656f',
  appBg: '#d8f2ef',
  brandUrl: 'https://helsenorge.design',
  brandImage: 'https://hndsstatic.blob.core.windows.net/images/hnd-logo.png',
});

addParameters({
  backgrounds: [
    {name: 'white', value: 'white', default: true},
    {name: 'black', value: 'black'},
    {name: 'light-grey', value: 'lightgrey'},
  ],
});

addons.setConfig({
  theme: hndsTheme,
});
