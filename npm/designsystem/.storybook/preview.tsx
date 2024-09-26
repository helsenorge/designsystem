import React from 'react';

import { theme } from '../src/theme';
import { breakpoints } from '../src/theme/grid';
import { Preview } from '@storybook/react';
import GridExample from '../src/docs/GridExample';
import '../src/scss/helsenorge.scss';

const placeholder = '#4A412A';

const createBackgroundColors = () =>
  Object.keys(theme.palette)
    .filter(palette => theme.palette[palette] !== placeholder)
    .map(palette => ({ name: palette, value: theme.palette[palette] }));

const createCustomViewPorts = () =>
  Object.keys(breakpoints).map(bp => {
    const breakpointPixels = breakpoints[bp];
    let type = 'mobile';
    if (breakpointPixels >= breakpoints['lg']) {
      type = 'desktop';
    } else if (breakpointPixels >= breakpoints['md']) {
      type = 'tablet';
    }

    return {
      name: bp,
      styles: {
        width: `${bp === 'xxs' ? 320 : breakpointPixels}px`,
        height: '100%',
        type,
      },
    };
  });

export const parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'white',
    values: createBackgroundColors(),
  },
  viewport: {
    viewports: createCustomViewPorts(),
  },
};

const preview: Preview = {
  globalTypes: {
    layout: {
      description: 'Grid layout',
      defaultValue: 'helsenorge',
      toolbar: {
        icon: 'component',
        items: [
          { value: 'helsenorge', title: 'Helsenorge grid' },
          { value: 'padding', title: 'Padding' },
          { value: 'none', title: 'None' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <GridExample gridLayout={context.globals.layout}>
        <Story />
      </GridExample>
    ),
  ],
};

export default preview;
