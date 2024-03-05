import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { useDelayedState } from './useDelayedState';
import Button from '../components/Button';
import GridExample from '../components/GridExample';

interface UseDelayedStateExampleProps {
  delay: number;
}

const UseDelayedStateExample: React.FC<UseDelayedStateExampleProps> = props => {
  const [state, setDelayedState, setState] = useDelayedState('', props.delay);

  const handleClick = () => {
    setState('');
    setDelayedState(`Teksten ble vist etter ${props.delay} ms`);
  };

  return (
    <GridExample>
      <Button onClick={handleClick}>Vis tekst om {props.delay} ms</Button>
      <p>{state}</p>
    </GridExample>
  );
};

const meta = {
  title: '@helsenorge∕designsystem-react/Hooks/useDelayedState',
  component: UseDelayedStateExample,
  parameters: {
    docs: {
      description: {
        component: 'useState, men med mulighet for å oppdatere state etter X millisekunder.',
      },
    },
  },
  args: {
    delay: 1000,
  },
  argTypes: {
    delay: {
      control: 'number',
    },
  },
} satisfies Meta<typeof UseDelayedStateExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: args => <UseDelayedStateExample {...args} /> };
