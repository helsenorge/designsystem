import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import FormGroup from './FormGroup';
import { mapToBackgoundColor } from '../../../.storybook/StoryBackground';
import Spacer from '../../components/Spacer';
import { FormMode, FormSize } from '../../constants';
import Checkbox from '../Checkbox/Checkbox';
import FormLayout from '../FormLayout';
import Coronavirus from '../Icons/Coronavirus';
import Input from '../Input/Input';
import Label from '../Label';
import RadioButton from '../RadioButton/RadioButton';
import './formGroup.stories.scss';

const meta = {
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
  args: {
    title: 'Gruppe tittel',
    legend: 'Første gruppe',
    mode: FormMode.onwhite,
    size: FormSize.medium,
    name: 'gruppe1',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    legend: {
      control: 'text',
    },
    mode: {
      control: 'select',
      options: FormMode,
    },
    size: {
      control: 'select',
      options: FormSize,
    },
    name: {
      control: 'text',
    },
  },
} satisfies Meta<typeof FormGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxChildren: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.mode as FormMode),
      }}
    >
      <FormGroup {...args}>
        <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
        <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
        <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
      </FormGroup>
    </div>
  ),
};

export const RadioButtonChildren: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.mode as FormMode),
      }}
    >
      <FormGroup {...args}>
        <RadioButton inputId={'RadioButton1'} label={<Label labelTexts={[{ text: 'Radiobutton 1' }]} />} />
        <RadioButton inputId={'RadioButton2'} label={<Label labelTexts={[{ text: 'Radiobutton 2' }]} />} />
        <RadioButton inputId={'RadioButton3'} label={<Label labelTexts={[{ text: 'Radiobutton 3' }]} />} />
      </FormGroup>
    </div>
  ),
};

export const InputChildren: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.mode as FormMode),
      }}
    >
      <FormGroup {...args}>
        <Input label={<Label labelTexts={[{ text: 'Input 1' }]} />} />
        <Input icon={Coronavirus} label={<Label labelTexts={[{ text: 'Input 2' }]} />} />
        <Input icon={Coronavirus} iconRight label={<Label labelTexts={[{ text: 'Input 3' }]} />} />
      </FormGroup>
    </div>
  ),
};

export const DivTagTrue: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.mode as FormMode),
      }}
    >
      <FormGroup htmlMarkup="div" {...args}>
        <RadioButton inputId={'RadioButton1'} label={<Label labelTexts={[{ text: 'Radiobutton 1' }]} />} />
        <RadioButton inputId={'RadioButton2'} label={<Label labelTexts={[{ text: 'Radiobutton 2' }]} />} />
        <RadioButton inputId={'RadioButton3'} label={<Label labelTexts={[{ text: 'Radiobutton 3' }]} />} />
      </FormGroup>
    </div>
  ),
};

export const CustomErrorWrapperClass: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.mode as FormMode),
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
  ),
};

export const FormLayoutChildren: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.mode as FormMode),
      }}
    >
      <FormGroup {...args}>
        <FormLayout maxColumns={'two'}>
          <RadioButton inputId={'RadioButton1'} label={<Label labelTexts={[{ text: 'Radiobutton 1' }]} />} />
          <RadioButton inputId={'RadioButton2'} label={<Label labelTexts={[{ text: 'Radiobutton 2' }]} />} />
          <RadioButton inputId={'RadioButton3'} label={<Label labelTexts={[{ text: 'Radiobutton 3' }]} />} />
        </FormLayout>
      </FormGroup>
    </div>
  ),
};
