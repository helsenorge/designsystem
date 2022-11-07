import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormExample, { FormExampleVariants } from '../FormExample/FormExample';
import { FormVariant } from '../../constants';
import GridExample from '../GridExample';

export default {
  title: 'Components/Validation',
  component: FormExample,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger skal jeg informeres om feil eller mangler i informasjon jeg har lagt inn slik at jeg forstår hvor jeg kan rette feilene og hva som er galt eller mangler.<br>Wrapper enten FormGroup eller et individuelt form input komponent.',
        markdown: 'test',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: FormVariant,
      defaultValue: FormVariant.normal,
    },
  },
} as ComponentMeta<typeof FormExample>;

export const FormGroup: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.formgroup} />
  </GridExample>
);

export const Checkbox: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.checkbox} />
  </GridExample>
);

export const Radiobutton: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.radiobutton} />
  </GridExample>
);

export const Textarea: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.textarea} />
  </GridExample>
);

export const Input: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.input} />
  </GridExample>
);

export const Select: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.select} />
  </GridExample>
);
