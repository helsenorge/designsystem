import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Stepper from './Stepper';
import Grid from '../GridExample';

export default {
  title: '@helsenorge∕designsystem-react/Components/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne se hvor jeg befinner meg i en stegvisning eller prosess slik at jeg ikke mister motivasjonen og slik at jeg får en følelse av at det jeg gjør bringer med nærmere målet.',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      defaultValue: 'Steg for steg',
    },
    ariaLabelledById: {
      control: 'text',
    },
    value: {
      control: 'number',
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
  },
} as ComponentMeta<typeof Stepper>;

export const Dots: ComponentStory<typeof Stepper> = (args: any) => (
  <Grid>
    <Stepper {...args} />
  </Grid>
);

export const Smooth: ComponentStory<typeof Stepper> = (args: any) => (
  <Grid>
    <Stepper min={1} max={100} {...args} />
  </Grid>
);
