import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input, { InputTypes } from './Input';
import { FormMode, FormVariant } from '../../constants';
import Hospital from '../Icons/Hospital';
import Icon, { IconSize } from '../Icons';
import GridExample from '../GridExample';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne skrive inn korte tekster slik at jeg kan gjøre mine oppgaver.<br><br>Bruksområde: For å la innbygger skrive inn en tekst (enkeltlinje, begrenset mengde)',
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      defaultValue: '',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Skriv inn tekst her',
    },
    width: {
      control: 'number',
      defaultValue: undefined,
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
    autoComplete: {
      control: 'text',
      defaultValue: '',
    },
    name: {
      control: 'text',
      defaultValue: '',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args: any) => (
  <GridExample>
    <Input {...args} icon={args.showicon ? Hospital : undefined} />
  </GridExample>
);

export const MultipleExamples: ComponentStory<typeof Input> = (args: any) => (
  <GridExample>
    <Input {...args} icon={args.showicon ? Hospital : undefined} />
    <Input {...args} icon={args.showicon ? Hospital : undefined} />
    <Input {...args} icon={args.showicon ? Hospital : undefined} />
  </GridExample>
);

export const ChildrenAfterLabel: ComponentStory<typeof Input> = (args: any) => (
  <GridExample>
    <Input {...args} afterLabelChildren={<Icon size={IconSize.XSmall} svgIcon={Hospital}></Icon>} />
  </GridExample>
);
