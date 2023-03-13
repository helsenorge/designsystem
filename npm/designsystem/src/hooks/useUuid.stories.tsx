import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

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

export default {
  title: 'Hooks/useUuid',
  component: UseUuidExample,
  parameters: {
    docs: {
      description: {
        component: 'Returner unik uuid som ikke endrer seg for hver render.',
      },
    },
  },
} as ComponentMeta<typeof UseUuidExample>;

export const Default: ComponentStory<typeof UseUuidExample> = () => <UseUuidExample />;
