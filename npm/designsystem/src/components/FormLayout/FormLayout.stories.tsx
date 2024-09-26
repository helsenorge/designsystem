import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import FormLayout, { FormLayoutColumns } from './FormLayout';
import Checkbox from '../Checkbox/Checkbox';
import FormGroup from '../FormGroup';
import Label from '../Label';
import RadioButton from '../RadioButton/RadioButton';

const meta = {
  title: '@helsenorge/designsystem-react/Components/FormLayout',
  component: FormLayout,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={FormLayout} />,
      description: {
        component:
          'Et kolonne komponent som kan legges inne i en FormGroup. Det wrapper flere Checkboxer eller Radiobuttons, og lar deg styre kolonne layout',
      },
    },
  },
  args: {
    maxColumns: FormLayoutColumns.three,
    colMinWidth: 300,
  },
  argTypes: {
    maxColumns: {
      control: 'select',
      options: FormLayoutColumns,
    },
    colMinWidth: {
      control: 'number',
    },
  },
} satisfies Meta<typeof FormLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxChildren: Story = {
  render: args => (
    <FormGroup title={'Her kan du styre maks antall kolonner'} legend={'Antallet er basert på hvor mange som har plass'}>
      <FormLayout {...args}>
        <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox hei' }]} />} />
        <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox lalalala' }]} />} />
        <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox asdadasd afasasfaa' }]} />} />
        <Checkbox inputId={'Checkbox4'} label={<Label labelTexts={[{ text: 'Checkbox hmm' }]} />} />
        <Checkbox inputId={'Checkbox5'} label={<Label labelTexts={[{ text: 'Checkbox' }]} />} />
        <Checkbox inputId={'Checkbox6'} label={<Label labelTexts={[{ text: 'Checkbox jadada' }]} />} />
      </FormLayout>
    </FormGroup>
  ),
};

export const RadioButtonChildren: Story = {
  render: args => (
    <>
      <FormGroup
        title={'Her kan du styre maks antall kolonner'}
        legend={'Antallet er basert på hvor mange som har plass'}
        name={'radiogroup1'}
      >
        <FormLayout {...args}>
          <RadioButton inputId={'RadioButton1'} label={<Label labelTexts={[{ text: 'Radiobutton 1' }]} />} />
          <RadioButton inputId={'RadioButton2'} label={<Label labelTexts={[{ text: 'Radiobutton 2' }]} />} />
          <RadioButton inputId={'RadioButton3'} label={<Label labelTexts={[{ text: 'Radiobutton 3' }]} />} />
        </FormLayout>
      </FormGroup>
      <FormGroup legend={'Radio radio hello!'} name={'radiogroup2'}>
        <FormLayout {...args}>
          <RadioButton inputId={'RadioButton4'} label={<Label labelTexts={[{ text: 'Radiobutton 4' }]} />} />
          <RadioButton inputId={'RadioButton5'} label={<Label labelTexts={[{ text: 'Radiobutton 5' }]} />} />
          <RadioButton inputId={'RadioButton6'} label={<Label labelTexts={[{ text: 'Radiobutton 6' }]} />} />
        </FormLayout>
      </FormGroup>
    </>
  ),
};
