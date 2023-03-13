import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useIntersectionObserver } from './useIntersectionObserver';
import Button from '../components/Button';
import GridExample from '../components/GridExample';
import { longLoremText } from '../utils/loremtext';

const UseIntersectionObserverExample: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  useIntersectionObserver(ref, entries => console.log(entries));

  return (
    <GridExample>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
      <Button ref={ref}>Sjekk console</Button>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
    </GridExample>
  );
};

export default {
  title: 'Hooks/useIntersectionObserver',
  component: UseIntersectionObserverExample,
  parameters: {
    docs: {
      description: {
        component: 'Sjekk om et HTML-element er synlig i vinduet, eller ikke.',
      },
    },
  },
  argTypes: {
    threshold: {
      control: 'number',
      defaultValue: 0.5,
    },
  },
} as ComponentMeta<typeof UseIntersectionObserverExample>;

export const Default: ComponentStory<typeof UseIntersectionObserverExample> = (args: any) => <UseIntersectionObserverExample {...args} />;
