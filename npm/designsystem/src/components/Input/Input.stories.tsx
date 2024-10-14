import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Input, { InputProps, InputTypes } from './Input';
import { FormOnColor, FormSize } from '../../constants';
import Hospital from '../Icons/Hospital';
import Label from '../Label/Label';

type InputWithAndCustomArgs = React.ComponentProps<typeof Input> & {
  showIcon: boolean;
};

const meta = {
  title: '@helsenorge/designsystem-react/Components/Input',
  component: Input,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Input} />,
      description: {
        component:
          'Som innbygger vil jeg kunne skrive inn korte tekster slik at jeg kan gjøre mine oppgaver.<br><br>Bruksområde: For å la innbygger skrive inn en tekst (enkeltlinje, begrenset mengde)',
      },
    },
  },
  args: {
    width: undefined,
    size: FormSize.medium,
    transparent: false,
    type: InputTypes.text,
    disabled: false,
    onColor: FormOnColor.onwhite,
    showIcon: true,
    iconRight: false,
    readOnly: false,
    autoComplete: '',
    name: 'input',
    required: false,
    maxText: 'tegn',
  },
  argTypes: {
    defaultValue: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    width: {
      control: 'number',
    },
    size: {
      control: 'select',
      options: FormSize,
    },
    transparent: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: InputTypes,
    },
    disabled: {
      control: 'boolean',
    },
    onColor: {
      control: 'select',
      options: FormOnColor,
    },
    showIcon: {
      control: 'boolean',
    },
    iconRight: {
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
    maxCharacters: {
      control: 'number',
    },
    maxText: {
      control: 'text',
    },
  },
} satisfies Meta<InputWithAndCustomArgs>;

export default meta;

type Story = StoryObj<InputWithAndCustomArgs>;

export const Default: Story = {
  render: ({ showIcon, ...rest }) => {
    const inputId = 'input-testid';

    return (
      <Input
        {...rest}
        label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} htmlFor={inputId} />}
        inputId={inputId}
        icon={showIcon ? Hospital : undefined}
      />
    );
  },
};

export const MultipleExamples: Story = {
  render: ({ showIcon, ...rest }) => (
    <>
      <Input
        {...rest}
        label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
        icon={showIcon ? Hospital : undefined}
      />
      <Input
        {...rest}
        label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
        icon={showIcon ? Hospital : undefined}
      />
      <Input
        {...rest}
        label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
        icon={showIcon ? Hospital : undefined}
      />
    </>
  ),
};

export const MaxCharacters: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ showIcon, ...rest }: InputProps & { showIcon?: boolean }) => (
    <>
      <Input {...rest} label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />} maxCharacters={10} width={10} />
      <Input {...rest} label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />} maxCharacters={50} width={50} />
      <Input
        {...rest}
        label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
        maxCharacters={50}
        width={50}
        defaultValue="test"
      />
    </>
  ),
};

export const AfterInputChildren: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ showIcon, ...rest }: InputProps & { showIcon?: boolean }) => (
    <>
      <Input
        {...rest}
        label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
        afterInputChildren={<div style={{ marginTop: '1rem' }}>{'*Ikke oppgi personsensitiv informasjon'}</div>}
      />
      <Input
        {...rest}
        label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
        afterInputChildren={'Tekst uten innsendt div'}
      />
    </>
  ),
};

export const BaseIncrementValue: Story = {
  render: ({ showIcon, ...rest }: InputProps & { showIcon?: boolean }) => {
    const inputId = 'input-testid';

    return (
      <Input
        {...rest}
        type={'number'}
        baseIncrementValue={1990}
        label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} htmlFor={inputId} />}
        inputId={inputId}
        icon={showIcon ? Hospital : undefined}
      />
    );
  },
};
