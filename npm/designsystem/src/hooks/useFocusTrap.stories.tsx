import React, { useState, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useFocusTrap } from './useFocusTrap';
import Button from '../components/Button';
import HighlightPanel from '../components/HighlightPanel';
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
      <Button onClick={toggleTrap}>{'Slå av/på fokusfelle'}</Button>
      <p>{`Fokusfelle er ${trap ? 'på' : 'av'}`}</p>
      <Spacer />
      <HighlightPanel color="blueberry" size="fluid">
        <div ref={ref}>
          <div>
            <Button>{'Knapp 1'}</Button>
          </div>
          <Spacer />
          <div>
            <Button>{'Knapp 2'}</Button>
          </div>
          <Spacer />
          <div>
            <Button>{'Knapp 3'}</Button>
          </div>
        </div>
      </HighlightPanel>
    </>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useFocusTrap',
  component: UseFocusTrapExample,
  parameters: {
    docs: {
      description: {
        component: 'Lås fokus til et bestemt element. Bruker vil bare kunne tabbe mellom fokuserbare elementer innenfor elementet.',
      },
      source: {
        language: 'tsx',
        code: `
import { useFocusTrap } from '@helsenorge/designsystem-react/hooks/useFocusTrap';
import Button from '@helsenorge/designsystem-react/components/Button';
import HighlightPanel from '@helsenorge/designsystem-react/components/HighlightPanel';
import Spacer from '@helsenorge/designsystem-react/components/Spacer';

const UseFocusTrapExample: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [trap, setTrap] = useState(false);
  useFocusTrap(ref, trap);

  const toggleTrap = (): void => {
    setTrap(!trap);
  };

  return (
    <>
      <Button onClick={toggleTrap}>{'Slå av/på fokusfelle'}</Button>
      <p>{\`Fokusfelle er \${trap ? 'på' : 'av'}\`}</p>
      <Spacer />
      <HighlightPanel color="blueberry" size="fluid">
        <div ref={ref}>
          <div>
            <Button>{'Knapp 1'}</Button>
          </div>
          <Spacer />
          <div>
            <Button>{'Knapp 2'}</Button>
          </div>
          <Spacer />
          <div>
            <Button>{'Knapp 3'}</Button>
          </div>
        </div>
      </HighlightPanel>
    </>
  );
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseFocusTrapExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseFocusTrapExample /> };
