import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Logo from './Logo';
import { allLogoPaletteNames } from '../../../.storybook/knobs';
import GridExample from '../GridExample';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: 'Et komponent som lar deg vise logoen til helsenorge i ulike varianter',
      },
    },
  },
  args: {
    color: 'black',
    size: 300,
    byline: false,
  },
  argTypes: {
    color: {
      control: 'select',
      options: allLogoPaletteNames,
    },
    size: {
      control: 'number',
    },
    byline: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <GridExample>
      <Logo {...args} />
    </GridExample>
  ),
};

export const Sizes: Story = {
  render: args => (
    <GridExample>
      <Logo {...args} size={100} />
      <Logo {...args} size={200} />
      <Logo {...args} size={300} />
    </GridExample>
  ),
};

export const Colors: Story = {
  parameters: {
    backgrounds: { default: 'neutral400' },
  },
  render: args => (
    <GridExample>
      <Logo {...args} color={'black'} />
      <Logo {...args} color={'white'} />
    </GridExample>
  ),
};

export const Byline: Story = {
  args: {
    byline: true,
  },
  render: args => (
    <GridExample>
      <Logo {...args} />
    </GridExample>
  ),
};
