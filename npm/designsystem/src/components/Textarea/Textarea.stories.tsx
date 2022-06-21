import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Textarea from './Textarea';
import Hospital from '../Icons/Hospital';
import Icon, { IconSize } from '../Icons';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'Dette er en placeholder',
    },
    maxCharacters: {
      control: 'number',
      defaultValue: 150,
    },
    maxText: {
      control: 'text',
      defaultValue: 'chars',
    },
    width: {
      control: 'number',
      defaultValue: undefined,
    },
    defaultValue: {
      control: 'text',
      defaultValue:
        'Førstehjelp de første minuttene etter at en akutt sykdom eller skade har oppstått er livsviktig og minsker risikoen for langtidsskader.',
    },
    testId: {
      control: 'text',
      defaultValue: '123-test',
    },
    transparent: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    label: {
      control: 'text',
      defaultValue: 'Skriv inn din tekst',
    },
    minRows: {
      control: 'number',
      defaultValue: 3,
    },
    maxRows: {
      control: 'number',
      defaultValue: 15,
    },
    grow: {
      control: 'boolean',
      defaultValue: true,
    },
    errorText: {
      control: 'text',
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof Textarea>;

export const Default: ComponentStory<typeof Textarea> = (args: any) => (
  <div style={{ width: '20rem' }}>
    <Textarea {...args} />
  </div>
);

export const MaxCharacters: ComponentStory<typeof Textarea> = (args: any) => (
  <div style={{ paddingTop: 50 }}>
    <div style={{ display: 'flex', width: '50rem' }}>
      <Textarea {...args} maxCharacters={10} marginBottom />
    </div>

    <div style={{ display: 'flex', width: '40rem' }}>
      <Textarea {...args} maxCharacters={100} />
    </div>

    <div style={{ width: '20rem' }}>
      <Textarea {...args} maxCharacters={100} defaultValue="test" />
    </div>
  </div>
);

export const ChildrenAfterLabel: ComponentStory<typeof Textarea> = (args: any) => (
  <div style={{ width: '20rem' }}>
    <Textarea {...args} afterLabelChildren={<Icon size={IconSize.XSmall} svgIcon={Hospital}></Icon>} />
  </div>
);
