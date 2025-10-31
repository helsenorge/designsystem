import React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action, HandlerFunction } from 'storybook/internal/actions';

import Toast from './Toast';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component:
          'Toast informerer innbygger om en handling som har blitt utført eller kommer til å bli utført. De vises midlertidig, nederst på skjermen og skal ikke kreve handling eller avbryte brukeropplevelsen. ',
      },
      page: (): React.JSX.Element => <Docs component={Toast} />,
    },
  },
  args: {
    title: 'Dette er en toast',
    onClose: (): HandlerFunction => action('Lukket toast'),
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
