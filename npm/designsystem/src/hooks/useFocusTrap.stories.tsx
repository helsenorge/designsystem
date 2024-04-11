import React, { useState, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useFocusTrap } from './useFocusTrap';
import Button from '../components/Button';
import HighlightBox from '../components/HighlightBox';
import Spacer from '../components/Spacer';

const UseFocusTrapExample: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [trap, setTrap] = useState(false);
  useFocusTrap(ref, trap);

  const toggleTrap = (): void => {
    setTrap(!trap);
  };

  return (
    <>
      <Button onClick={toggleTrap}>Slå av/på fokusfelle</Button>
      <p>Fokusfelle er {trap ? 'på' : 'av'}</p>
      <Spacer />
      <HighlightBox color="blueberry" size="fluid">
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
      </HighlightBox>
    </>
  );
};

const meta = {
  title: '@helsenorge∕designsystem-react/Hooks/useFocusTrap',
  component: UseFocusTrapExample,
  parameters: {
    docs: {
      description: {
        component: 'Lås fokus til et bestemt element. Bruker vil bare kunne tabbe mellom fokuserbare elementer innenfor elementet.',
      },
    },
  },
} satisfies Meta<typeof UseFocusTrapExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseFocusTrapExample /> };
