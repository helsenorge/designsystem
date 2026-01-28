import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { useIdWithFallback } from './useIdWithFallback';
import Button from '../components/Button';

const UseIdWithFallbackExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const id = useIdWithFallback();

  return (
    <>
      <p>{`id: ${id}`}</p>
      <p>{`Teller: ${count}`}</p>
      <Button id={id} onClick={() => setCount(count + 1)}>
        {'Oppdater'}
      </Button>
    </>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useIdWithFallback',
  component: UseIdWithFallbackExample,
  parameters: {
    docs: {
      description: {
        component: 'Returner unik id som ikke endrer seg for hver render, med fallback.',
      },
      source: {
        language: 'tsx',
        code: `
import { useIdWithFallback } from '@helsenorge/designsystem-react/hooks/useIdWithFallback';
import Button from '@helsenorge/designsystem-react/components/Button';

const UseIdWithFallbackExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const id = useIdWithFallback();

  return (
    <>
      <p>{\`id: \${id}\`}</p>
      <p>{\`Teller: \${count}\`}</p>
      <Button id={id} onClick={() => setCount(count + 1)}>
        {'Oppdater'}
      </Button>
    </>
  );
};
`,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseIdWithFallbackExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseIdWithFallbackExample /> };
