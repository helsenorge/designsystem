import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';
import Title from '../Title';

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
    children: 'Tekst',
    color: 'blueberry',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['blueberry', 'cherry', 'neutral'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Badge {...args} />,
};

export const Variants: Story = {
  render: args => (
    <>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Variants'}
      </Title>
      <br />
      <Badge color="blueberry">{args.children}</Badge>
      <br />
      <Badge color="cherry">{args.children}</Badge>
      <br />
      <Badge color="neutral">{args.children}</Badge>
    </>
  ),
};
