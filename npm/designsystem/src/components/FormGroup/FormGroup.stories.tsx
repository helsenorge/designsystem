import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from '../Checkbox/Checkbox';
import RadioButton from '../RadioButton/RadioButton';
import Input from '../Input/Input';
import FormGroup from './FormGroup';
import { FormMode, FormVariant } from '../../constants';
import Coronavirus from '../Icons/Coronavirus';
import { mapToBackgoundColor } from '../../../.storybook/StoryBackground';
import GridExample from '../GridExample';
import Spacer from '../../components/Spacer';
import './formGroup.stories.scss';

export default {
  title: 'Components/FormGroup',
  component: FormGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Et fieldset komponent ment for bruk i forms. Det kan være frittstående eller ligge i et Validation komponent. Dette komponentet wrapper input komponenter som f.eks. Checkbox og RadioButton.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Gruppe tittel',
    },
    legend: {
      control: 'text',
      defaultValue: 'Første gruppe',
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
      defaultValue: 'gruppe1',
    },
  },
} as ComponentMeta<typeof FormGroup>;

export const CheckboxChildren: ComponentStory<typeof FormGroup> = (args: any) => (
  <GridExample>
    <div
      style={{
        background: mapToBackgoundColor(args.mode),
      }}
    >
      <FormGroup {...args}>
        <Checkbox inputId={'Checkbox1'} label={'Checkbox 1'} />
        <Checkbox inputId={'Checkbox2'} label={'Checkbox 2'} />
        <Checkbox inputId={'Checkbox3'} label={'Checkbox 3'} />
      </FormGroup>
    </div>
  </GridExample>
);

export const RadioButtonChildren: ComponentStory<typeof FormGroup> = (args: any) => (
  <GridExample>
    <div
      style={{
        background: mapToBackgoundColor(args.mode),
      }}
    >
      <FormGroup {...args}>
        <RadioButton inputId={'RadioButton1'} label={'RadioButton 1'} />
        <RadioButton inputId={'RadioButton2'} label={'RadioButton 2'} />
        <RadioButton inputId={'RadioButton3'} label={'RadioButton 3'} />
      </FormGroup>
    </div>
  </GridExample>
);

export const InputChildren: ComponentStory<typeof FormGroup> = (args: any) => (
  <GridExample>
    <div
      style={{
        background: mapToBackgoundColor(args.mode),
      }}
    >
      <FormGroup {...args}>
        <Input label={'Input 1'} />
        <Input icon={Coronavirus} label={'Input 2'} />
        <Input icon={Coronavirus} iconRight label={'Input 3'} />
      </FormGroup>
    </div>
  </GridExample>
);

export const DivTagTrue: ComponentStory<typeof FormGroup> = (args: any) => (
  <GridExample>
    <div
      style={{
        background: mapToBackgoundColor(args.mode),
      }}
    >
      <FormGroup htmlMarkup="div" {...args}>
        <RadioButton inputId={'RadioButton1'} label={'RadioButton 1'} />
        <RadioButton inputId={'RadioButton2'} label={'RadioButton 2'} />
        <RadioButton inputId={'RadioButton3'} label={'RadioButton 3'} />
      </FormGroup>
    </div>
  </GridExample>
);
export const CustomErrorWrapperClass: ComponentStory<typeof FormGroup> = (args: any) => (
  <GridExample>
    <div
      style={{
        background: mapToBackgoundColor(args.mode),
      }}
    >
      <FormGroup
        htmlMarkup="div"
        {...args}
        legend={'ErrorWrapperClass gir mulighet til å style ErrorWrapper som ligger rundt form'}
        errorWrapperclassName="error-wrapper-class--no-bottom-margin"
      >
        <RadioButton inputId={'RadioButton1'} label={'RadioButton 1'} />
        <RadioButton inputId={'RadioButton2'} label={'RadioButton 2'} />
        <RadioButton inputId={'RadioButton3'} label={'Legg merke til avstand ned til border'} />
      </FormGroup>
      <Spacer size="2xs" />
      <FormGroup htmlMarkup="div" {...args} errorWrapperclassName="error-wrapper-class">
        <RadioButton inputId={'RadioButton1'} label={'RadioButton 1'} />
        <RadioButton inputId={'RadioButton2'} label={'RadioButton 2'} />
        <RadioButton inputId={'RadioButton3'} label={'Med standard avstand ned til border'} />
      </FormGroup>
    </div>
  </GridExample>
);
