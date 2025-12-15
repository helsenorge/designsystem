import React, { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import Textarea from './Textarea';
import { FormOnColor, LanguageLocales } from '../../constants';
import LanguageProvider from '../../utils/language';
import Dropdown from '../Dropdown';
import Globe from '../Icons/Globe';
import Label from '../Label/Label';
import Spacer from '../Spacer';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={Textarea} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/textarea/bruk-Ki0OGtRM" />
      ),
      description: {
        component:
          'Som innbygger vil jeg kunne skrive inn en lengre tekst og ha plass til å se flere linjer av teksten jeg skriver inn slik at jeg kan beholde oversikten og redigere teksten uten for stor ulempe.',
      },
    },
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
    onColor: {
      control: 'select',
      options: FormOnColor,
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
    value: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Textarea {...args} label={<Label labelTexts={[{ text: 'Skriv inn din tekst' }]} />} />,
};

export const MaxCharacters: Story = {
  render: args => (
    <>
      <Textarea {...args} label={<Label labelTexts={[{ text: 'Skriv inn din tekst' }]} />} maxCharacters={50} marginBottom width={50} />
      <Textarea {...args} label={<Label labelTexts={[{ text: 'Skriv inn din tekst' }]} />} maxCharacters={100} width={100} />
      <Textarea
        {...args}
        label={<Label labelTexts={[{ text: 'Skriv inn din tekst' }]} />}
        maxCharacters={100}
        defaultValue="test"
        width={100}
      />
    </>
  ),
};

export const WithLanguageProvider: Story = {
  render: args => {
    const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.ENGLISH);

    return (
      <LanguageProvider<LanguageLocales> language={language}>
        <Dropdown svgIcon={Globe} triggerText="Velg språk">
          <Dropdown.SingleSelectItem text={'English'} asChild defaultSelected>
            <button onClick={() => setLanguage(LanguageLocales.ENGLISH)} />
          </Dropdown.SingleSelectItem>
          <Dropdown.SingleSelectItem text={'Nynorsk'} asChild>
            <button onClick={() => setLanguage(LanguageLocales.NORWEGIAN_NYNORSK)} />
          </Dropdown.SingleSelectItem>
          <Dropdown.SingleSelectItem text={'Bokmål'} asChild>
            <button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)} />
          </Dropdown.SingleSelectItem>
        </Dropdown>
        <Spacer />
        <Textarea {...args} label={<Label labelTexts={[{ text: 'Skriv inn din tekst' }]} />} maxCharacters={50} marginBottom width={50} />
      </LanguageProvider>
    );
  },
};
