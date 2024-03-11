import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Avatar, { AvatarSize } from './Avatar';
import GridExample from '../GridExample';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'Avatar lar innbygger oppfatte en representasjon, f.eks. hvem man er logget inn som, hvem man handler på vegne av eller hvem som er avsender eller mottaker av en melding',
      },
    },
  },
  args: {
    children: 'Line Danser',
    selected: false,
    size: AvatarSize.small,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    selected: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: AvatarSize,
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <GridExample>
      <Avatar {...args} />
    </GridExample>
  ),
};

export const Inverted: Story = {
  args: {
    variant: 'black',
  },
  render: args => (
    <GridExample>
      <Avatar {...args} />
    </GridExample>
  ),
};
