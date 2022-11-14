import React, { useState, useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useFocusToggle } from './useFocusToggle';
import GridExample from '../components/GridExample';
import Button from '../components/Button';
import Spacer from '../components/Spacer';
import HighlightBox from '../components/HighlightBox';

const UseFocusToggleExample: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [allowFocus, setAllowFocus] = useState(true);
  useFocusToggle(ref, allowFocus);

  const toggleAllowFocus = () => {
    setAllowFocus(!allowFocus);
  };

  return (
    <GridExample>
      <p>Fokus er {allowFocus ? 'lov' : 'ikke lov'}</p>
      <Button onClick={toggleAllowFocus}>Slå av/på fokus</Button>
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
  title: 'Hooks/useFocusToggle',
  component: UseFocusToggleExample,
  parameters: {
    docs: {
      description: {
        component:
          'Skru av og på fokus på fokuserbare elementer slik at de kan være en del av DOMen, men samtidig ikke kunne fokuseres/tabbes til med tastaturet.',
      },
    },
  },
} as ComponentMeta<typeof UseFocusToggleExample>;

export const Default: ComponentStory<typeof UseFocusToggleExample> = () => <UseFocusToggleExample />;
