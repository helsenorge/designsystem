import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useIsVisible } from './useIsVisible';
import Button from '../components/Button';
import GridExample from '../components/GridExample';
import { longLoremText } from '../utils/loremtext';

const UseIsVisibleExample: React.FC = (args: any) => {
  const ref = useRef<HTMLButtonElement>(null);
  const isVisible = useIsVisible(ref, args.threshold);

  return (
    <GridExample>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
      <Button ref={ref} disabled={!isVisible}>
        Knappen er {isVisible ? 'synlig' : 'ikke synlig'}
      </Button>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
    </GridExample>
  );
};

export default {
  title: '@helsenorge∕designsystem-react/Hooks/useIsVisible',
  component: UseIsVisibleExample,
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
} as ComponentMeta<typeof UseIsVisibleExample>;

export const Default: ComponentStory<typeof UseIsVisibleExample> = (args: any) => <UseIsVisibleExample {...args} />;
