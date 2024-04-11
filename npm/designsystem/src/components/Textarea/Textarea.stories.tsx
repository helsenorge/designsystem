import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Textarea from './Textarea';
import { FormMode } from '../../constants';
import Label from '../Label/Label';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne skrive inn en lengre tekst og ha plass til å se flere linjer av teksten jeg skriver inn slik at jeg kan beholde oversikten og redigere teksten uten for stor ulempe.',
      },
    },
  },
  args: {
    maxCharacters: 150,
    maxText: 'tegn',
    width: undefined,
    mode: FormMode.onwhite,
    testId: '123-test',
    transparent: false,
    disabled: false,
    minRows: 3,
    maxRows: 15,
    grow: true,
    errorText: '',
    autoFocus: false,
    readOnly: false,
    autoComplete: '',
    name: 'textarea',
    required: false,
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    maxCharacters: {
      control: 'number',
    },
    maxText: {
      control: 'text',
    },
    width: {
      control: 'number',
    },
    mode: {
      control: 'select',
      options: FormMode,
    },
    defaultValue: {
      control: 'text',
    },
    testId: {
      control: 'text',
    },
    transparent: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    minRows: {
      control: 'number',
    },
    maxRows: {
      control: 'number',
    },
    grow: {
      control: 'boolean',
    },
    errorText: {
      control: 'text',
    },
    autoFocus: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    autoComplete: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Textarea {...args} label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />} />,
};

export const MaxCharacters: Story = {
  render: args => (
    <>
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
    </>
  ),
};
