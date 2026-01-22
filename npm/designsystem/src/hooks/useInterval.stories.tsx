import type React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { useInterval } from './useInterval';

const UseIntervalExample: React.FC = () => {
  useInterval(() => console.log('Hei'), 1000);

  return <p>{'Sjekk console'}</p>;
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useInterval',
  component: UseIntervalExample,
  parameters: {
    docs: {
      description: {
        component: 'Kjør en funksjon ved intervaller basert på ønsket frequency.',
      },
      source: {
        language: 'tsx',
        code: `
import { useInterval } from '@helsenorge/designsystem-react/hooks/useInterval';
        
const UseIntervalExample: React.FC = () => {
  useInterval(() => console.log('Hei'), 1000);

  return <p>{'Sjekk console'}</p>;
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseIntervalExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseIntervalExample /> };
