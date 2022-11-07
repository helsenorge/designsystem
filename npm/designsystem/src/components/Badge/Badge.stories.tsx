import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { allPaletteNames } from '../../../.storybook/knobs';
import Badge from './Badge';
import GridExample from '../GridExample';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'Badge [Markør] lar innbygger oppfatte at det er et antall nye elementer som har kommet til i et område siden sist gang innbygger besøkte området.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue: '1',
    },
    color: {
      control: 'select',
      options: allPaletteNames,
      defaultValue: 'blueberry',
    },
  },
} as ComponentMeta<typeof Badge>;

export const Default: ComponentStory<typeof Badge> = (args: any) => (
  <GridExample>
    <Badge {...args}>{args.children}</Badge>
  </GridExample>
);
