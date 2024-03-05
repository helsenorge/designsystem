import React, { useRef } from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { useIsVisible } from './useIsVisible';
import Button from '../components/Button';
import GridExample from '../components/GridExample';
import { longLoremText } from '../utils/loremtext';

interface UseIsVisibleExampleProps {
  threshold?: number;
}

const UseIsVisibleExample: React.FC<UseIsVisibleExampleProps> = props => {
  const ref = useRef<HTMLButtonElement>(null);
  const isVisible = useIsVisible(ref, props.threshold);

  return (
    <GridExample>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
      <Button ref={ref} disabled={!isVisible}>
        {'Knappen er'} {isVisible ? 'synlig' : 'ikke synlig'}
      </Button>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
    </GridExample>
  );
};

const meta = {
  title: '@helsenorge∕designsystem-react/Hooks/useIsVisible',
  component: UseIsVisibleExample,
  parameters: {
    docs: {
      description: {
        component: 'Sjekk om et HTML-element er synlig i vinduet, eller ikke.',
      },
    },
  },
  args: {
    threshold: 0.5,
  },
  argTypes: {
    threshold: {
      control: 'number',
    },
  },
} satisfies Meta<typeof UseIsVisibleExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: args => <UseIsVisibleExample {...args} /> };
