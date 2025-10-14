import React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import ToastList, { ToastData } from './ToastList';

const meta = {
  title: '@helsenorge/designsystem-react/Components/ToastList',
  component: ToastList,
  parameters: {
    docs: {
      description: {
        component: 'ToastList handles all toast management including animations, durations, and removal.',
      },
      page: (): React.JSX.Element => <Docs component={ToastList} />,
    },
  },
  args: {},
  argTypes: {
    toasts: {
      control: 'object',
      description: 'Array of toast data to display',
    },
  },
} satisfies Meta<typeof ToastList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => {
    const [toasts, setToasts] = React.useState<ToastData[]>([]);
    const toastIdCounter = React.useRef(0);

    const addToast = (): void => {
      const id = `toast-${++toastIdCounter.current}`;
      const newToast: ToastData = { id: id, title: `This is message ${toastIdCounter.current}` };
      setToasts(prevToasts => [...prevToasts, newToast]);
    };

    const addToastWithDescription = (): void => {
      const id = `toast-${++toastIdCounter.current}`;
      const newToast: ToastData = {
        id: id,
        title: `This is message ${toastIdCounter.current}`,
        message: 'With description text, that is a bit long',
      };
      setToasts(prevToasts => [...prevToasts, newToast]);
    };

    return (
      <>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <button type="button" onClick={addToast}>
            {'Add Toast'}
          </button>
          <button type="button" onClick={addToastWithDescription}>
            {'Add Toast with description'}
          </button>
        </div>
        <ToastList {...args} toasts={toasts} />
      </>
    );
  },
};
