import React, { useState, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useFocusableElements } from './useFocusableElements';
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
    <>
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
    </>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useFocusableElements',
  component: UseFocusableElementsExample,
  parameters: {
    docs: {
      description: {
        component:
          'Overvåk et element og finn alle fokuserbare elementer inne i elementet. Bruker MutationObserver slik at eventuelle nye elementer som legges til også vil inkluderes i listen.',
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseFocusableElementsExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseFocusableElementsExample /> };
