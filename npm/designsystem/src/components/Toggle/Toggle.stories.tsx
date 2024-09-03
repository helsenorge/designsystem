import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import Toggle, { TogglePosition } from './Toggle';
import Docs from '../../docs';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av Toggle',
      },
      page: (): React.JSX.Element => <Docs component={Toggle} />,
    },
  },
  args: {
    label: 'Toggle',
    checked: false,
    position: TogglePosition.left,
  },
  argTypes: {
    label: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
    position: {
      control: 'select',
      options: TogglePosition,
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => <Toggle {...args} onChange={action('Toggle switched')} />,
};
