import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Avatar, { AvatarSize } from './Avatar';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Avatar} />,
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
      options: Object.values(AvatarSize),
    },
    color: {
      control: 'select',
      options: ['blueberry', 'black'],
    },
    variant: {
      control: 'select',
      options: ['normal', 'circle'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Avatar {...args} />,
};

export const Inverted: Story = {
  args: {
    color: 'black',
  },
  render: args => <Avatar {...args} />,
};

export const RepresentingSomeoneElse: Story = {
  args: {
    variant: 'circle',
  },
  render: args => <Avatar {...args} />,
};
