import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input, { InputProps, InputTypes } from './Input';
import { FormMode, FormVariant } from '../../constants';
import GridExample from '../GridExample';
import Hospital from '../Icons/Hospital';
import Label from '../Label/Label';

export default {
  title: '@helsenorge∕designsystem-react/Components/Input',
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
      defaultValue: 'input',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
    maxCharacters: {
      control: 'number',
    },
    maxText: {
      control: 'text',
      defaultValue: 'tegn',
    },
  },
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = ({ showicon, ...rest }: InputProps & { showicon?: boolean }) => {
  const inputId = 'input-testid';

  return (
    <GridExample>
      <Input
        {...rest}
        label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} htmlFor={inputId} />}
        inputId={inputId}
        icon={showicon ? Hospital : undefined}
      />
    </GridExample>
  );
};

export const MultipleExamples: ComponentStory<typeof Input> = ({ showicon, ...rest }: InputProps & { showicon?: boolean }) => (
  <GridExample>
    <Input
      {...rest}
      label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
      icon={showicon ? Hospital : undefined}
    />
    <Input
      {...rest}
      label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
      icon={showicon ? Hospital : undefined}
    />
    <Input
      {...rest}
      label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
      icon={showicon ? Hospital : undefined}
    />
  </GridExample>
);

export const MaxCharacters: ComponentStory<typeof Input> = ({ showicon, ...rest }: InputProps & { showicon?: boolean }) => (
  <GridExample>
    <Input {...rest} label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />} maxCharacters={10} width={10} />
    <Input {...rest} label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />} maxCharacters={50} width={50} />
    <Input
      {...rest}
      label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} />}
      maxCharacters={50}
      width={50}
      defaultValue="test"
    />
  </GridExample>
);

export const AfterInputChildren: ComponentStory<typeof Input> = ({ showicon, ...rest }: InputProps & { showicon?: boolean }) => (
  <GridExample>
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
  </GridExample>
);

export const BaseIncrementValue: ComponentStory<typeof Input> = ({ showicon, ...rest }: InputProps & { showicon?: boolean }) => {
  const inputId = 'input-testid';

  return (
    <GridExample>
      <Input
        {...rest}
        type={'number'}
        baseIncrementValue={1990}
        label={<Label labelTexts={[{ text: 'Skriv inn din tekst', type: 'semibold' }]} htmlFor={inputId} />}
        inputId={inputId}
        icon={showicon ? Hospital : undefined}
      />
    </GridExample>
  );
};
