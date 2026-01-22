import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { Meta, StoryObj } from '@storybook/react-vite';

import Avatar from './Avatar';
import { AvatarSize } from './constants';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Avatar',
  component: Avatar,
  tags: ['breaking'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={Avatar} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/avatar/bruk-tsrq6evL" />
      ),
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
      options: ['square', 'circle'],
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
