import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { mapToBackgoundColor } from '../../../.storybook/StoryBackground';
import { FormMode, FormVariant } from '../../constants';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Jeg er frisk!',
    },
    checked: {
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
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args: any) => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <Checkbox {...args} />
  </div>
);
