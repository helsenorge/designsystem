import React, { useState, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useFocusToggle } from './useFocusToggle';
import Button from '../components/Button';
import HighlightPanel from '../components/HighlightPanel';
import Spacer from '../components/Spacer';

const UseFocusToggleExample: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [allowFocus, setAllowFocus] = useState(true);
  useFocusToggle(ref, allowFocus);

  const toggleAllowFocus = () => {
    setAllowFocus(!allowFocus);
  };

  return (
    <>
      <p>Fokus er {allowFocus ? 'lov' : 'ikke lov'}</p>
      <Button onClick={toggleAllowFocus}>Slå av/på fokus</Button>
      <Spacer />
      <HighlightPanel color="blueberry" size="fluid">
        <div ref={ref}>
          <div>
            <Button>Knapp 1</Button>
          </div>
          <Spacer />
          <div>
            <Button>Knapp 2</Button>
          </div>
          <Spacer />
          <div>
            <Button>Knapp 3</Button>
          </div>
        </div>
      </HighlightPanel>
    </>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useFocusToggle',
  component: UseFocusToggleExample,
  parameters: {
    docs: {
      description: {
        component:
          'Skru av og på fokus på fokuserbare elementer slik at de kan være en del av DOMen, men samtidig ikke kunne fokuseres/tabbes til med tastaturet.',
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseFocusToggleExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseFocusToggleExample /> };
