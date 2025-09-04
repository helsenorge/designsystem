/* eslint-disable no-console */
import React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { useLayoutEvent } from './useLayoutEvent';

const UseLayoutEventExample: React.FC = () => {
  useLayoutEvent(() => console.log('Vinduet endret størrelse'), ['resize']);
  useLayoutEvent(() => console.log('Vinduet endret layout'), ['layoutchange']);
  useLayoutEvent(() => console.log('Vinduet endret orientering'), ['orientationchange']);

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
      source: {
        language: 'tsx',
        code: `
import { useLayoutEvent } from '@helsenorge/designsystem-react/hooks/useLayoutEvent';

const UseLayoutEventExample: React.FC = () => {
  useLayoutEvent(() => console.log('Vinduet endret størrelse'), ['resize']);
  useLayoutEvent(() => console.log('Vinduet endret layout'), ['layoutchange']);
  useLayoutEvent(() => console.log('Vinduet endret orientering'), ['orientationchange']);

  return <p>{'Sjekk console'}</p>;
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseLayoutEventExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseLayoutEventExample /> };
