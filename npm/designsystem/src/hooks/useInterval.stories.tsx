import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useInterval } from './useInterval';
import GridExample from '../components/GridExample';

const UseIntervalExample: React.FC = () => {
  useInterval(() => console.log('Hei'), 1000);

  return (
    <GridExample>
      <p>{'Sjekk console'}</p>
    </GridExample>
  );
};

const meta = {
  title: '@helsenorge∕designsystem-react/Hooks/useInterval',
  component: UseIntervalExample,
  parameters: {
    docs: {
      description: {
        component: 'Kjør en funksjon ved intervaller basert på ønsket frequency.',
      },
    },
  },
} satisfies Meta<typeof UseIntervalExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseIntervalExample /> };
