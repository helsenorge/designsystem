import React, { useState, useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useFocusTrap } from './useFocusTrap';
import GridExample from '../components/GridExample';
import Button from '../components/Button';
import Spacer from '../components/Spacer';
import HighlightBox from '../components/HighlightBox';

const UseFocusTrapExample: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [trap, setTrap] = useState(false);
  const [autofocus, setAutoFocus] = useState(false);
  useFocusTrap(ref, trap, autofocus);

  const toggleTrap = () => {
    setTrap(!trap);
  };
  const toggleAutofocus = () => {
    setAutoFocus(!autofocus);
  };

  return (
    <GridExample>
      <Button onClick={toggleTrap}>Slå av/på fokusfelle</Button>
      <p>Fokusfelle er {trap ? 'på' : 'av'}</p>
      <Button onClick={toggleAutofocus}>Slå av/på autofokus</Button>
      <p>Autofokus er {autofocus ? 'på' : 'av'}</p>
      <Spacer />
      <HighlightBox color="blueberry">
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
    </GridExample>
  );
};

export default {
  title: 'Hooks/useFocusTrap',
  component: UseFocusTrapExample,
  parameters: {
    docs: {
      description: {
        component: 'Lås fokus til et bestemt element. Bruker vil bare kunne tabbe mellom fokuserbare elementer innenfor elementet.',
      },
    },
  },
} as ComponentMeta<typeof UseFocusTrapExample>;

export const Default: ComponentStory<typeof UseFocusTrapExample> = () => <UseFocusTrapExample />;
