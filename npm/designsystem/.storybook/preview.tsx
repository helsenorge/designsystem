import type { ReactElement } from 'react';

import type { Preview } from '@storybook/react';

import GridExample from '../src/docs/GridExample';
import { theme } from '../src/theme';
import { breakpoints } from '../src/theme/grid';
import '../src/scss/helsenorge.scss';

const placeholder = '#4A412A';

const createBackgroundColors = (): Record<string, { name: string; value: string }> =>
  (Object.keys(theme.palette) as Array<keyof typeof theme.palette>)
    .filter(key => theme.palette[key] !== placeholder)
    .reduce<Record<string, { name: string; value: string }>>((acc, key) => {
      const k = String(key);
      acc[k] = { name: k, value: theme.palette[key] };
      return acc;
    }, {});

const createCustomViewPorts = (): Record<
  string,
  { name: string; styles: { width: string; height: string }; type: 'mobile' | 'tablet' | 'desktop' | 'other' }
> =>
  (Object.keys(breakpoints) as Array<keyof typeof breakpoints>).reduce<
    Record<
      string,
      {
        name: string;
        styles: { width: string; height: string };
        type: 'mobile' | 'tablet' | 'desktop' | 'other';
      }
    >
  >((acc, bp: keyof typeof breakpoints) => {
    const px = breakpoints[bp];
    const type = px >= breakpoints.lg ? 'desktop' : px >= breakpoints.md ? 'tablet' : 'mobile';
    const k = String(bp);
    acc[k] = {
      name: k,
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
  docs: {
    source: { type: 'code' },
  },
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
    (Story, context): ReactElement => (
      <GridExample gridLayout={context.globals.layout}>
        <Story />
      </GridExample>
    ),
  ],

  tags: ['autodocs'],
};

export default preview;
