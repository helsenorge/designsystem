import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Slider from './Slider';
import GridExample from '../GridExample';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component:
          'Slider inneholder en interaktiv slider som kan styres via mus/touch og tastatur interaksjon. Verdien kan returneres via onChange propen som blir gitt inn.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Hvor ofte sykler du til jobb?',
    },
    labelLeft: {
      control: 'text',
      defaultValue: 'Skjeldent',
    },
    labelRight: {
      control: 'text',
      defaultValue: 'Ofte',
    },
    step: {
      control: { type: 'range', min: 1, max: 100, defaultValue: 1 },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Slider>;

export const Default: ComponentStory<typeof Slider> = (args: any) => (
  <GridExample>
    <Slider onChange={action('Slider')} {...args} />
  </GridExample>
);
