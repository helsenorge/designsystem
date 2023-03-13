import React, { useState, useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useElementList } from './useElementList';
import Button from '../components/Button';
import GridExample from '../components/GridExample';
import Spacer from '../components/Spacer';

const UseElementListExample: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasClass, setHasClass] = useState(true);
  const elements = useElementList(ref, '.custom-button');

  const toggleClass = () => {
    setHasClass(!hasClass);
  };

  return (
    <GridExample>
      <p>Knapper med klassen "custom-button":</p>
      <ul>
        {elements &&
          [...elements].map((element, index) => (
            <li key={index}>
              {element.tagName} {element.textContent}
            </li>
          ))}
      </ul>
      <Button onClick={toggleClass}>Slå av/på klassen "custom-button" på knapp nr 1</Button>
      <Spacer />

      <div ref={ref}>
        <div>
          <Button className={hasClass ? 'custom-button' : ''}>Knapp 1</Button>
        </div>
        <Spacer />
        <div>
          <Button className="custom-button">Knapp 2</Button>
        </div>
        <Spacer />
        <div>
          <Button className="custom-button">Knapp 3</Button>
        </div>
      </div>
    </GridExample>
  );
};

export default {
  title: 'Hooks/useElementList',
  component: UseElementListExample,
  parameters: {
    docs: {
      description: {
        component: 'Hent ut en liste med HTML-elementer. Bruker MutationObserver-APIet.',
      },
    },
  },
} as ComponentMeta<typeof UseElementListExample>;

export const Default: ComponentStory<typeof UseElementListExample> = () => <UseElementListExample />;
