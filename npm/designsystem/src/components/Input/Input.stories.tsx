import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { mapToBackgoundColor } from '../../../.storybook/StoryBackground';

import Input, { InputTypes } from './Input';
import { FormMode, FormVariant } from '../../constants';
import Hospital from '../Icons/Hospital';
import Icon, { IconSize } from '../Icons';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    defaultValue: {
      control: 'text',
      defaultValue: '',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Skriv inn tekst her',
    },
    variant: {
      control: 'select',
      options: FormVariant,
      defaultValue: FormVariant.normal,
    },
    transparent: {
      control: 'boolean',
      defaultValue: false,
    },
    type: {
      control: 'select',
      options: InputTypes,
      defaultValue: InputTypes.text,
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
    label: {
      control: 'text',
      defaultValue: 'Skriv inn din tekst',
    },
    showicon: {
      control: 'boolean',
      defaultValue: true,
    },
    iconRight: {
      control: 'boolean',
      defaultValue: false,
    },
    readOnly: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args: any) => (
  <div style={{ width: '80vw' }}>
    <Input {...args} icon={args.showicon ? Hospital : undefined} />
  </div>
);

export const MultipleExamples: ComponentStory<typeof Input> = (args: any) => (
  <div style={{ width: '80vw' }}>
    <Input {...args} icon={args.showicon ? Hospital : undefined} />
    <Input {...args} icon={args.showicon ? Hospital : undefined} />
    <Input {...args} icon={args.showicon ? Hospital : undefined} />
  </div>
);

export const ChildrenAfterLabel: ComponentStory<typeof Input> = (args: any) => (
  <div style={{ width: '80vw' }}>
    <Input {...args} afterLabelChildren={<Icon size={IconSize.XSmall} svgIcon={Hospital}></Icon>} />
  </div>
);
