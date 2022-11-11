import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useLayoutEvent } from './useLayoutEvent';
import GridExample from '../components/GridExample';

const UseLayoutEventExample: React.FC = () => {
  useLayoutEvent(() => console.log('Vinduet endret størrelse', ['resize']));

  return (
    <GridExample>
      <p>{'Sjekk console'}</p>
    </GridExample>
  );
};

export default {
  title: 'Hooks/useLayoutEvent',
  component: UseLayoutEventExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på ulike layout-events som har betydning for rendring og størrelse på elementer.',
      },
    },
  },
} as ComponentMeta<typeof UseLayoutEventExample>;

export const Default: ComponentStory<typeof UseLayoutEventExample> = () => <UseLayoutEventExample />;
