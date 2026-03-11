import React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { ToastData } from './ToastList';
import type { Meta, StoryObj } from '@storybook/react-vite';

import ToastList from './ToastList';

const meta = {
  title: '@helsenorge/designsystem-react/Components/ToastList',
  component: ToastList,
  parameters: {
    docs: {
      description: {
        component:
          'Toast informerer innbygger om en handling som har blitt utført eller kommer til å bli utført. ToastList er en container for flere toasts, og håndterer visning og fjerning av disse. ',
      },
      page: (): React.JSX.Element => <Docs component={ToastList} />,
    },
  },
  args: {},
  argTypes: {
    toasts: {
      control: 'object',
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
