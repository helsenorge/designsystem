import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useUuid } from './useUuid';
import Button from '../components/Button';
import GridExample from '../components/GridExample';

const UseUuidExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const id = useUuid();

  return (
    <GridExample>
      <p>uuid: {id}</p>
      <p>Teller: {count}</p>
      <Button id={id} onClick={() => setCount(count + 1)}>
        Oppdater
      </Button>
    </GridExample>
  );
};

const meta = {
  title: '@helsenorge∕designsystem-react/Hooks/useUuid',
  component: UseUuidExample,
  parameters: {
    docs: {
      description: {
        component: 'Returner unik uuid som ikke endrer seg for hver render.',
      },
    },
  },
} satisfies Meta<typeof UseUuidExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseUuidExample /> };
