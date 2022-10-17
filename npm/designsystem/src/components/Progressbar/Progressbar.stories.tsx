import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Grid from '../GridExample';

import Progressbar from './Progressbar';

export default {
  title: 'Components/Progressbar',
  component: Progressbar,
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
