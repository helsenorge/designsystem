import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from './RadioButton';
import { FormMode, FormVariant } from '../../constants';
import GridExample from '../GridExample';
import Label from '../Label';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component:
          'RadioButton lar brukeren velge et av flere valg i en liste. RadioButton kan brukes frittstående, som en del av en FormGroup eller direkte i et Validation komponent.',
      },
    },
  },
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
      control: 'text',
      defaultValue: '',
    },
    value: {
      control: 'text',
      defaultValue: '',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof RadioButton>;

export const Default: ComponentStory<typeof RadioButton> = args => (
  <GridExample>
    <RadioButton {...args} label={<Label labelTexts={[{ text: 'Radio onwhite' }]} />} mode={'onwhite'} />
    <RadioButton {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} mode={'ongrey'} />
    <RadioButton {...args} label={<Label labelTexts={[{ text: 'onblueberry' }]} />} mode={'onblueberry'} />
    <RadioButton {...args} label={<Label labelTexts={[{ text: 'oninvalid' }]} />} mode={'oninvalid'} />
    <RadioButton {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled' }]} />} mode={'onwhite'} disabled />
    <span style={{ backgroundColor: '#06596C', display: 'block', marginTop: '1rem', padding: '1rem' }}>
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'ondark' }]} />} mode={'ondark'} />
    </span>
  </GridExample>
);

export const BigForm: ComponentStory<typeof RadioButton> = args => (
  <GridExample>
    <RadioButton {...args} label={<Label labelTexts={[{ text: 'onwhite' }]} />} variant={'bigform'} mode={'onwhite'} />
    <RadioButton {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} variant={'bigform'} mode={'ongrey'} />
    <RadioButton {...args} label={<Label labelTexts={[{ text: 'onblueberry' }]} />} variant={'bigform'} mode={'onblueberry'} />
    <RadioButton {...args} label={<Label labelTexts={[{ text: 'oninvalid' }]} />} variant={'bigform'} mode={'oninvalid'} />
    <RadioButton {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled' }]} />} variant={'bigform'} mode={'onwhite'} disabled />
    <RadioButton {...args} label={<Label labelTexts={[{ text: 'ondark' }]} />} variant={'bigform'} mode={'ondark'} />
  </GridExample>
);
