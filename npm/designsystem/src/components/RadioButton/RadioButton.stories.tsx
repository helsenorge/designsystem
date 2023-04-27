import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from './RadioButton';
import { FormMode, FormVariant } from '../../constants';
import GridExample from '../GridExample';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component:
          'RadioButton lar brukeren velge et av flere valg i en liste. RadioButton kan brukes frittstående, som en del av en FormGroup eller direkte i et Validation komponent.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'RadioButton label',
    },
    defaultChecked: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    mode: {
      control: 'select',
      options: FormMode,
      defaultValue: FormMode.onwhite,
    },
    variant: {
      control: 'select',
      options: FormVariant,
      defaultValue: FormVariant.normal,
    },
    name: {
      control: 'text',
      defaultValue: '',
    },
    value: {
      control: 'text',
      defaultValue: '',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof RadioButton>;

export const Default: ComponentStory<typeof RadioButton> = args => (
  <GridExample>
    <RadioButton {...args} />
  </GridExample>
);
