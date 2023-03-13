import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useOutsideEvent } from './useOutsideEvent';
import Button from '../components/Button';
import GridExample from '../components/GridExample';

const UseOutsideEventExample: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  useOutsideEvent(ref, event =>
    console.log(`Du klikket på ${(event.target as HTMLElement).tagName} ${(event.target as HTMLElement).tagName}`)
  );

  return (
    <GridExample>
      <Button ref={ref}>{'Knapp'}</Button>
      <p>{'Klikk her og sjekk console'}</p>
    </GridExample>
  );
};

export default {
  title: 'Hooks/useOutsideEvent',
  component: UseOutsideEventExample,
  parameters: {
    docs: {
      description: {
        component: 'Custom hook for klikk eller fokus utenfor et gitt element.',
      },
    },
  },
} as ComponentMeta<typeof UseOutsideEventExample>;

export const Default: ComponentStory<typeof UseOutsideEventExample> = () => <UseOutsideEventExample />;
