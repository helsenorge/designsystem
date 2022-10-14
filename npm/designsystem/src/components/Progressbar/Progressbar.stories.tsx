import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

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
      defaultValue: '',
    },
    value: {
      control: 'number',
      defaultValue: 1,
    },
    min: {
      control: 'number',
      defaultValue: 1,
    },
    max: {
      control: 'number',
      defaultValue: 20,
    },
  },
} as ComponentMeta<typeof Progressbar>;

export const Default: ComponentStory<typeof Progressbar> = (args: any) => (
  <div style={{ width: '20rem' }}>
    <Progressbar {...args} />
  </div>
);
export const Dots: ComponentStory<typeof Progressbar> = (args: any) => (
  <div style={{ width: '20rem' }}>
    <Progressbar {...args} min={1} max={5} />
  </div>
);
