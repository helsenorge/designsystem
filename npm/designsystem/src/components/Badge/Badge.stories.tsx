import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';
import { allPaletteNames } from '../../../.storybook/knobs';
import GridExample from '../GridExample';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'Badge [Markør] lar innbygger oppfatte at det er et antall nye elementer som har kommet til i et område siden sist gang innbygger besøkte området.',
      },
    },
  },
  args: {
    children: '1',
    color: 'blueberry',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: allPaletteNames,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <GridExample>
      <Badge {...args} />
    </GridExample>
  ),
};
