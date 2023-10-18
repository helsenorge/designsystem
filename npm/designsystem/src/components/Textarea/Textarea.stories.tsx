import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Textarea from './Textarea';
import { FormMode } from '../../constants';
import GridExample from '../GridExample';
import Icon, { IconSize } from '../Icon';
import Hospital from '../Icons/Hospital';
import Label from '../Label/Label';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne skrive inn en lengre tekst og ha plass til å se flere linjer av teksten jeg skriver inn slik at jeg kan beholde oversikten og redigere teksten uten for stor ulempe.',
      },
    },
  },
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
      defaultValue: 'tegn',
    },
    width: {
      control: 'number',
      defaultValue: undefined,
    },
    mode: {
      control: 'select',
      options: FormMode,
      defaultValue: FormMode.onwhite,
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
    autoFocus: {
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
      defaultValue: 'textarea',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Textarea>;

export const Default: ComponentStory<typeof Textarea> = (args: any) => (
  <GridExample>
    <Textarea {...args} label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />} />
  </GridExample>
);

export const MaxCharacters: ComponentStory<typeof Textarea> = (args: any) => (
  <GridExample>
    <Textarea
      {...args}
      label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
      maxCharacters={50}
      marginBottom
      width={50}
    />
    <Textarea
      {...args}
      label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
      maxCharacters={100}
      width={100}
    />
    <Textarea
      {...args}
      label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
      maxCharacters={100}
      defaultValue="test"
      width={100}
    />
  </GridExample>
);
