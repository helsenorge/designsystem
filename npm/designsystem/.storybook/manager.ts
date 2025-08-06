import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
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
        style: {
          backgroundColor: '#fcf2bf',
          color: '#764f00',
        },
        tooltip: 'Breaking changes added to this component',
      },
    },
    {
      tags: 'not-supernova',
      badge: {
        text: 'Not in documentation',
        style: {
          backgroundColor: '#eec0a5',
          color: '#912112',
        },
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
        style: {
          backgroundColor: '#afdae3',
          color: '#06596c',
        },
        tooltip: 'New component',
      },
    },
    {
      tags: 'beta',
      badge: {
        text: 'Beta',
        style: {
          backgroundColor: '#bf98f3',
          color: '#4c1b8c',
        },
        tooltip: 'New component',
      },
    },
    {
      tags: 'deprecated',
      badge: {
        text: 'Deprecated',
        style: {
          backgroundColor: '#eec0a5',
          color: '#912112',
        },
        tooltip: 'Deprecated component that will be removed in a future release',
      },
    },
    {
      tags: 'outdated',
      badge: {
        text: 'Outdated',
        style: {
          backgroundColor: '#d6d4d3',
          color: '#474745',
        },
        tooltip: 'This component has new features in Figma that is not yet implemented',
      },
    },
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
});
