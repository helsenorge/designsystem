import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from '../Checkbox/Checkbox';
import RadioButton from '../RadioButton/RadioButton';
import FormGroup from '../FormGroup';
import FormLayout, { FormLayoutColumns } from './FormLayout';
import GridExample from '../GridExample';

export default {
  title: 'Components/FormLayout',
  component: FormLayout,
  argTypes: {
    maxColumns: {
      control: 'select',
      options: FormLayoutColumns,
      defaultValue: FormLayoutColumns.three,
    },
    colMinWidth: {
      control: 'number',
      defaultValue: 300,
    },
  },
} as ComponentMeta<typeof FormLayout>;

export const CheckboxChildren: ComponentStory<typeof FormLayout> = (args: any) => (
  <GridExample>
    <FormGroup title={'Her kan du styre maks antall kolonner'} legend={'Antallet er basert på hvor mange som har plass'}>
      <FormLayout {...args}>
        <Checkbox inputId={'Checkbox1'} label={'Checkbox hei'} />
        <Checkbox inputId={'Checkbox2'} label={'Checkbox lalalala'} />
        <Checkbox inputId={'Checkbox3'} label={'Checkbox asdadasd afasasfaa'} />
        <Checkbox inputId={'Checkbox4'} label={'Checkbox hmm'} />
        <Checkbox inputId={'Checkbox5'} label={'Checkbox'} />
        <Checkbox inputId={'Checkbox6'} label={'Checkbox jadada'} />
      </FormLayout>
    </FormGroup>
  </GridExample>
);

export const RadioButtonChildren: ComponentStory<typeof FormGroup> = (args: any) => (
  <GridExample>
    <FormGroup
      title={'Her kan du styre maks antall kolonner'}
      legend={'Antallet er basert på hvor mange som har plass'}
      name={'radiogroup1'}
    >
      <FormLayout {...args}>
        <RadioButton inputId={'RadioButton1'} label={'RadioButton 1'} />
        <RadioButton inputId={'RadioButton2'} label={'RadioButton 2'} />
        <RadioButton inputId={'RadioButton3'} label={'RadioButton 3'} />
      </FormLayout>
    </FormGroup>
    <FormGroup legend={'Radio radio hello!'} name={'radiogroup2'}>
      <FormLayout {...args}>
        <RadioButton inputId={'RadioButton4'} label={'RadioButton 4'} />
        <RadioButton inputId={'RadioButton5'} label={'RadioButton 5'} />
        <RadioButton inputId={'RadioButton6'} label={'RadioButton 6'} />
      </FormLayout>
    </FormGroup>
  </GridExample>
);
