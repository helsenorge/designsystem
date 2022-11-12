import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useDelayedState } from './useDelayedState';
import GridExample from '../components/GridExample';
import Button from '../components/Button';

const UseDelayedStateExample: React.FC = (args: any) => {
  const [state, setDelayedState, setState] = useDelayedState('', args.delay);

  const handleClick = () => {
    setState('');
    setDelayedState(`Teksten ble vist etter ${args.delay} ms`);
  };

  return (
    <GridExample>
      <Button onClick={handleClick}>Vis tekst om {args.delay} ms</Button>
      <p>{state}</p>
    </GridExample>
  );
};

export default {
  title: 'Hooks/useDelayedState',
  component: UseDelayedStateExample,
  parameters: {
    docs: {
      description: {
        component: 'useState, men med mulighet for å oppdatere state etter X millisekunder.',
      },
    },
  },
  argTypes: {
    delay: {
      control: 'number',
      defaultValue: 1000,
    },
  },
} as ComponentMeta<typeof UseDelayedStateExample>;

export const Default: ComponentStory<typeof UseDelayedStateExample> = (args: any) => <UseDelayedStateExample {...args} />;
