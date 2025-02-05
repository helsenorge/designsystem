import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges';

import { palette } from '../src/theme/palette';

const theme = create({
  base: 'light',
  colorSecondary: palette.blueberry500,
  appBg: palette.blueberry50,
  brandTitle: 'Komponenter',
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
    {
      tags: 'not-supernova',
      badge: {
        text: 'Not in documentation',
        bgColor: '#eec0a5',
        fgColor: '#912112',
        tooltip: 'This component is not documented in Supernova',
      },
      display: {
        sidebar: [],
        toolbar: ['docs'],
      },
    },
    {
      tags: 'new',
      badge: {
        text: 'New',
        bgColor: '#afdae3',
        fgColor: '#06596c',
        tooltip: 'New component',
      },
    },
    {
      tags: 'beta',
      badge: {
        text: 'Beta',
        bgColor: '#bf98f3',
        fgColor: '#4c1b8c',
        tooltip: 'New component',
      },
    },
    {
      tags: 'deprecated',
      badge: {
        text: 'Deprecated',
        bgColor: '#eec0a5',
        fgColor: '#912112',
        tooltip: 'Deprecated component that will be removed in a future release',
      },
    },
    {
      tags: 'outdated',
      badge: {
        text: 'Outdated',
        bgColor: '#d6d4d3',
        fgColor: '#474745',
        tooltip: 'This component has new features in Figma that is not yet implemented',
      },
    },
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
});
