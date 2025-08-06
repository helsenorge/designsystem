import React from 'react';

import { theme } from '../src/theme';
import { breakpoints } from '../src/theme/grid';
import { Preview } from '@storybook/react-vite';
import GridExample from '../src/docs/GridExample';
import '../src/scss/helsenorge.scss';
import { background } from 'storybook/internal/theming';

const placeholder = '#4A412A';

const createBackgroundColors = () =>
  Object.keys(theme.palette)
    .filter(key => theme.palette[key] !== placeholder)
    .reduce<Record<string, { name: string; value: string }>>((acc, key) => {
      acc[key] = { name: key, value: theme.palette[key] };
      return acc;
    }, {});

const createCustomViewPorts = () =>
  Object.keys(breakpoints).reduce<
    Record<
      string,
      {
        name: string;
        styles: { width: string; height: string };
        type: 'mobile' | 'tablet' | 'desktop' | 'other';
      }
    >
  >((acc, bp) => {
    const px = breakpoints[bp];
    const type = px >= breakpoints.lg ? 'desktop' : px >= breakpoints.md ? 'tablet' : 'mobile';
    acc[bp] = {
      name: bp,
      styles: {
        width: `${bp === 'xxs' ? 320 : px}px`,
        height: '100%',
      },
      type,
    };
    return acc;
  }, {});

export const parameters = {
  layout: 'fullscreen',
  backgrounds: {
    options: createBackgroundColors(),
  },
  viewport: {
    options: createCustomViewPorts(),
  },
};

const preview: Preview = {
  parameters: parameters,
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
    options: {
      storySort: {
        order: ['Dokumentasjon/Introduksjon', '*'],
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'white' },
  },

  decorators: [
    (Story, context) => (
      <GridExample gridLayout={context.globals.layout}>
        <Story />
      </GridExample>
    ),
  ],

  tags: ['autodocs'],
};

export default preview;
