import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Progressbar from './Progressbar';
import Grid from '../GridExample';


export default {
  title: 'Components/Progressbar',
  component: Progressbar,
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
} as ComponentMeta<typeof Progressbar>;

export const Dots: ComponentStory<typeof Progressbar> = (args: any) => (
  <Grid>
    <Progressbar {...args} />
  </Grid>
);

export const Smooth: ComponentStory<typeof Progressbar> = (args: any) => (
  <Grid>
    <Progressbar min={1} max={100} {...args} />
  </Grid>
);
