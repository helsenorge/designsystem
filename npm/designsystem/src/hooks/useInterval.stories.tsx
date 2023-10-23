import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

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

export default {
  title: '@helsenorge∕designsystem-react/Hooks/useInterval',
  component: UseIntervalExample,
  parameters: {
    docs: {
      description: {
        component: 'Kjør en funksjon ved intervaller basert på ønsket frequency.',
      },
    },
  },
} as ComponentMeta<typeof UseIntervalExample>;

export const Default: ComponentStory<typeof UseIntervalExample> = () => <UseIntervalExample />;
