import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import RadioButton from './RadioButton';
import { FormMode, FormSize } from '../../constants';
import { getColor } from '../../theme/currys';
import FormGroup from '../FormGroup';
import Label from '../Label';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/RadioButton',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component:
          'RadioButton lar brukeren velge et av flere valg i en liste. RadioButton kan brukes frittstående, som en del av en FormGroup eller direkte i et Validation komponent.',
      },
    },
  },
  args: {
    label: 'RadioButton label',
    defaultChecked: false,
    disabled: false,
    mode: FormMode.onwhite,
    size: FormSize.medium,
    name: 'radio',
    value: '',
    required: false,
  },
  argTypes: {
    label: {
      control: 'text',
    },
    defaultChecked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
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
    value: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <>
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'Radio onwhite' }]} />} mode={'onwhite'} />
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} mode={'ongrey'} />
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'onblueberry' }]} />} mode={'onblueberry'} />
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'oninvalid' }]} />} mode={'oninvalid'} />
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled' }]} />} mode={'onwhite'} disabled />
      <div style={{ backgroundColor: '#06596C', display: 'block', marginTop: '1rem', padding: '1rem' }}>
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'ondark' }]} />} mode={'ondark'} />
      </div>
    </>
  ),
};

export const Large: Story = {
  render: args => (
    <>
      <FormGroup legend={'onwhite'} name="radio1" mode={'onwhite'} size={'large'}>
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'onwhite' }]} />} />
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'onwhite' }]} />} />
      </FormGroup>
      <FormGroup legend={'ongrey'} name="radio2" mode={'ongrey'} size={'large'}>
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} />
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} />
      </FormGroup>
      <FormGroup legend={'onblueberry'} name="radio3" mode={'onblueberry'} size={'large'}>
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'onblueberry' }]} />} />
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'onblueberry' }]} />} />
      </FormGroup>
      <div style={{ background: getColor('blueberry', 500), padding: '2rem' }}>
        <FormGroup legend={'ondark'} name="radio4" mode={'ondark'} size={'large'}>
          <RadioButton {...args} label={<Label labelTexts={[{ text: 'ondark' }]} />} />
          <RadioButton {...args} label={<Label labelTexts={[{ text: 'ondark' }]} />} />
        </FormGroup>
      </div>
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'oninvalid' }]} />} size={'large'} mode={'oninvalid'} />
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled' }]} />} size={'large'} mode={'onwhite'} disabled />
    </>
  ),
};
