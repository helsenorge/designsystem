import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormGroup from './FormGroup';
import { mapToBackgoundColor } from '../../../.storybook/StoryBackground';
import Spacer from '../../components/Spacer';
import { FormMode, FormSize } from '../../constants';
import Checkbox from '../Checkbox/Checkbox';
import GridExample from '../GridExample';
import Coronavirus from '../Icons/Coronavirus';
import Input from '../Input/Input';
import RadioButton from '../RadioButton/RadioButton';
import './formGroup.stories.scss';
import Label from '../Label';

export default {
  title: '@helsenorge∕designsystem-react/Components/FormGroup',
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
    size: {
      control: 'select',
      options: FormSize,
      defaultValue: FormSize.medium,
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
        <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
        <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
        <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
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
        <RadioButton inputId={'RadioButton1'} label={<Label labelTexts={[{ text: 'Radiobutton 1' }]} />} />
        <RadioButton inputId={'RadioButton2'} label={<Label labelTexts={[{ text: 'Radiobutton 2' }]} />} />
        <RadioButton inputId={'RadioButton3'} label={<Label labelTexts={[{ text: 'Radiobutton 3' }]} />} />
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
        <Input label={<Label labelTexts={[{ text: 'Input 1' }]} />} />
        <Input icon={Coronavirus} label={<Label labelTexts={[{ text: 'Input 2' }]} />} />
        <Input icon={Coronavirus} iconRight label={<Label labelTexts={[{ text: 'Input 3' }]} />} />
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
        <RadioButton inputId={'RadioButton1'} label={<Label labelTexts={[{ text: 'Radiobutton 1' }]} />} />
        <RadioButton inputId={'RadioButton2'} label={<Label labelTexts={[{ text: 'Radiobutton 2' }]} />} />
        <RadioButton inputId={'RadioButton3'} label={<Label labelTexts={[{ text: 'Radiobutton 3' }]} />} />
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
        errorWrapperClassName="error-wrapper-class--no-bottom-margin"
      >
        <RadioButton inputId={'RadioButton1'} label={<Label labelTexts={[{ text: 'Radiobutton 1' }]} />} />
        <RadioButton inputId={'RadioButton2'} label={<Label labelTexts={[{ text: 'Radiobutton 2' }]} />} />
        <RadioButton inputId={'RadioButton3'} label={<Label labelTexts={[{ text: 'Legg merke til avstand ned til border' }]} />} />
      </FormGroup>
      <Spacer size="2xs" />
      <FormGroup htmlMarkup="div" {...args} errorWrapperClassName="error-wrapper-class">
        <RadioButton inputId={'RadioButton4'} label={<Label labelTexts={[{ text: 'Radiobutton 4' }]} />} />
        <RadioButton inputId={'RadioButton5'} label={<Label labelTexts={[{ text: 'Radiobutton 5' }]} />} />
        <RadioButton inputId={'RadioButton6'} label={<Label labelTexts={[{ text: 'Med standard avstand ned til border' }]} />} />
      </FormGroup>
    </div>
  </GridExample>
);
