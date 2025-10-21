import React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/internal/actions';

import Toast from './Toast';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av Toast',
      },
      page: (): React.JSX.Element => <Docs component={Toast} />,
    },
  },
  args: {
    title: 'Dette er en toast',
    message: 'With message',
    onClose: () => action('Lukket toast'),
  },
  argTypes: {
    message: { control: 'text' },
    testId: { control: 'text' },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Toast {...args} />,
};
