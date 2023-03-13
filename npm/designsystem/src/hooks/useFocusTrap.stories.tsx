import React, { useState, useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useFocusTrap } from './useFocusTrap';
import Button from '../components/Button';
import GridExample from '../components/GridExample';
import HighlightBox from '../components/HighlightBox';
import Spacer from '../components/Spacer';

const UseFocusTrapExample: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [trap, setTrap] = useState(false);
  useFocusTrap(ref, trap);

  const toggleTrap = () => {
    setTrap(!trap);
  };

  return (
    <GridExample>
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
