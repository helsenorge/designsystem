import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button';
import Drawer from '../components/Drawer/Drawer';

const UseReturnFocusOnUnmount: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{'Åpne komponent med hooken'}</Button>

      {open && (
        <Drawer
          title="Lukk meg"
          onClose={() => {
            setOpen(false);
          }}
        >
          {'Trigger knappen får fokus når jeg lukkes'}
        </Drawer>
      )}
    </>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useReturnFocusOnUnmount',
  component: UseReturnFocusOnUnmount,
  parameters: {
    docs: {
      description: {
        component:
          'Custom hook for å returnere fokus til elementet som hadde fokus før hooken ble mountet. Returnering skjer ved unmount av hooken.',
      },
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
      source: {
        language: 'tsx',
        code: `
import { useEffect, useRef } from 'react';

/**
 * A hook that stores the currently focused element when the component mounts,
 * and restores focus to it when the component unmounts.
 */
export const usePreviousFocus = (): void => {
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Captures which element was focused on mount
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement) {
      previouslyFocusedElementRef.current = activeElement;
    }

    // Restores focus to the stored element on unmount
    return (): void => {
      if (previouslyFocusedElementRef.current instanceof HTMLElement && document.contains(previouslyFocusedElementRef.current)) {
        previouslyFocusedElementRef.current.focus();
      }
    };
  }, []);
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseReturnFocusOnUnmount>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseReturnFocusOnUnmount /> };
