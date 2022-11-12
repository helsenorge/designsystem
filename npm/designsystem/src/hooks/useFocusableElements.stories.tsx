import React, { useState, useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useFocusableElements } from './useFocusableElements';
import GridExample from '../components/GridExample';
import Button from '../components/Button';
import Spacer from '../components/Spacer';

const UseFocusableElementsExample: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [allowFocus, setAllowFocus] = useState(true);
  const elements = useFocusableElements(ref);

  const toggleAllowFocus = () => {
    setAllowFocus(!allowFocus);
  };

  return (
    <GridExample>
      <p>Fokuserbare elementer:</p>
      <ul>
        {elements &&
          [...elements].map((element, index) => (
            <li key={index}>
              {element.tagName} {element.textContent}
            </li>
          ))}
      </ul>
      <Button onClick={toggleAllowFocus}>Slå av/på fokus på knapp nr 1</Button>
      <Spacer />

      <div ref={ref}>
        <div>
          <Button disabled={!allowFocus}>Knapp 1</Button>
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
    </GridExample>
  );
};

export default {
  title: 'Hooks/useFocusableElements',
  component: UseFocusableElementsExample,
  parameters: {
    docs: {
      description: {
        component:
          'Overvåk et element og finn alle fokuserbare elementer inne i elementet. Bruker MutationObserver slik at eventuelle nye elementer som legges til også vil inkluderes i listen.',
      },
    },
  },
} as ComponentMeta<typeof UseFocusableElementsExample>;

export const Default: ComponentStory<typeof UseFocusableElementsExample> = () => <UseFocusableElementsExample />;
