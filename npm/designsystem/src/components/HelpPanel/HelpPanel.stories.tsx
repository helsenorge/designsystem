import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import HelpPanel from './HelpPanel';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/HelpPanel',
  component: HelpPanel,
  parameters: {
    docs: {
      description: {
        component: 'HelpPanel er et komponent som skal innholde hjelpetekst til brukeren.',
      },
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis neque sed accumsan pellentesque. Pellentesque eu ex finibus lectus congue hendrerit quis vel justo.',
    size: 'medium',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['fluid', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof HelpPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Test tittel',
  },
  render: args => <HelpPanel {...args} />,
};

export const WithoutTitle: Story = {
  render: args => <HelpPanel {...args} />,
};
