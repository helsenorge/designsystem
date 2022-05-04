import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormExample, { FormExampleVariants } from '../FormExample/FormExample';
import { FormVariant } from '../../constants';

export default {
  title: 'Components/Validation',
  component: FormExample,
  argTypes: {
    variant: {
      control: 'select',
      options: FormVariant,
      defaultValue: FormVariant.normal,
    },
  },
} as ComponentMeta<typeof FormExample>;

export const FormGroup: ComponentStory<typeof FormExample> = (args: any) => (
  <div
    style={{
      width: '50vw',
    }}
  >
    <FormExample {...args} exampleType={FormExampleVariants.formgroup} />
  </div>
);

export const Checkbox: ComponentStory<typeof FormExample> = (args: any) => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <FormExample {...args} exampleType={FormExampleVariants.checkbox} />
  </div>
);

export const Radiobutton: ComponentStory<typeof FormExample> = (args: any) => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <FormExample {...args} exampleType={FormExampleVariants.radiobutton} />
  </div>
);

export const Textarea: ComponentStory<typeof FormExample> = (args: any) => (
  <div
    style={{
      width: '90vw',
    }}
  >
    <FormExample {...args} exampleType={FormExampleVariants.textarea} />
  </div>
);

export const Input: ComponentStory<typeof FormExample> = (args: any) => (
  <div
    style={{
      width: '90vw',
    }}
  >
    <FormExample {...args} exampleType={FormExampleVariants.input} />
  </div>
);
