import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useLayoutEvent } from './useLayoutEvent';

const UseLayoutEventExample: React.FC = () => {
  useLayoutEvent(() => console.log('Vinduet endret størrelse', ['resize']));

  return <p>{'Sjekk console'}</p>;
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useLayoutEvent',
  component: UseLayoutEventExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på ulike layout-events som har betydning for rendring og størrelse på elementer.',
      },
    },
  },
} satisfies Meta<typeof UseLayoutEventExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseLayoutEventExample /> };
