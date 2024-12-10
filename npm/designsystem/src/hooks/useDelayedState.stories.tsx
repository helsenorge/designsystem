import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { useDelayedState } from './useDelayedState';
import Button from '../components/Button';

interface UseDelayedStateExampleProps {
  delay: number;
}

const UseDelayedStateExample: React.FC<UseDelayedStateExampleProps> = props => {
  const [state, setDelayedState, setState] = useDelayedState('', props.delay);

  const handleClick = (): void => {
    setState('');
    setDelayedState(`Teksten ble vist etter ${props.delay} ms`);
  };

  return (
    <>
      <Button onClick={handleClick}>{`Vis tekst om ${props.delay} ms`}</Button>
      <p>{state}</p>
    </>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useDelayedState',
  component: UseDelayedStateExample,
  parameters: {
    docs: {
      description: {
        component: 'useState, men med mulighet for å oppdatere state etter X millisekunder.',
      },
      source: {
        language: 'tsx',
        code: `
import { useDelayedState } from '@helsenorge/designsystem-react/hooks/useDelayedState';
import Button from '@helsenorge/designsystem-react/components/Button';

const UseDelayedStateExample = () => {
  const delay = 1000;
  const [state, setDelayedState, setState] = useDelayedState('', delay);

  const handleClick = () => {
    setState('');
    setDelayedState(\`Teksten ble vist etter \${delay} ms\`);
  };

  return (
    <>
      <Button onClick={handleClick}>{\`Vis tekst om \${delay} ms\`}</Button>
      <p>{state}</p>
    </>
  );
}
`,
      },
    },
    chromatic: { disableSnapshot: true },
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
