import React, { useState, useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useHover } from './useHover';
import GridExample from '../components/GridExample';
import Button from '../components/Button';

const UseHoverExample: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const { isHovered } = useHover(ref);

  return (
    <GridExample>
      <Button ref={ref}>Knapp</Button>
      <p>Knappen har hover/fokus: {isHovered ? 'ja' : 'nei'}</p>
    </GridExample>
  );
};

export default {
  title: 'Hooks/useHover',
  component: UseHoverExample,
  parameters: {
    docs: {
      description: {
        component: 'Få vite når et element hovres over eller mottar fokus.',
      },
    },
  },
} as ComponentMeta<typeof UseHoverExample>;

export const Default: ComponentStory<typeof UseHoverExample> = () => <UseHoverExample />;
