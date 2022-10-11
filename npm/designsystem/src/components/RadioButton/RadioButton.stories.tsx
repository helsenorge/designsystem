import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from './RadioButton';
import { FormMode, FormVariant } from '../../constants';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
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
      control: 'string',
      defaultValue: '',
    },
    value: {
      control: 'string',
      defaultValue: '',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof RadioButton>;

export const Default: ComponentStory<typeof RadioButton> = (args: any) => (
  <div
    style={{
      width: '40rem',
      padding: '1rem',
    }}
  >
    <RadioButton {...args} />
  </div>
);
