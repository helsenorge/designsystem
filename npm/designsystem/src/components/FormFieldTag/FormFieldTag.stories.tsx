import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import FormFieldTag from './FormFieldTag';
import { LanguageLocales } from '../../constants';
import { HNDesignsystemFormFieldTag } from '../../resources/Resources';
import LanguageProvider from '../../utils/language';
import Button from '../Button';

const meta = {
  title: '@helsenorge/designsystem-react/Components/FormFieldTag',
  component: FormFieldTag,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av FormFieldTag',
      },
      page: (): React.JSX.Element => <Docs component={FormFieldTag} />,
    },
  },
  args: {
    level: 'all-required',
  },
  argTypes: {
    level: {
      control: 'select',
      options: [
        'all-required',
        'required-field',
        'optional',
        'all-optional',
        'required-radiobutton-list',
        'required-checkbox-list',
        'required-single-checkbox',
      ],
    },
  },
} satisfies Meta<typeof FormFieldTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <FormFieldTag {...args} />,
};

export const AllTypes: Story = {
  render: () => (
    <>
      <FormFieldTag level="all-required" />
      <br />
      <FormFieldTag level="required-field" />
      <br />
      <FormFieldTag level="optional" />
      <br />
      <FormFieldTag level="all-optional" />
      <br />
      <FormFieldTag level="required-radiobutton-list" />
      <br />
      <FormFieldTag level="required-checkbox-list" />
      <br />
      <FormFieldTag level="required-single-checkbox" />
    </>
  ),
};

export const OverrideResources: Story = {
  render: () => {
    const englishResources: HNDesignsystemFormFieldTag = {
      allRequired: 'All fields are required',
      requiredField: 'Required field',
      optional: 'Optional',
      allOptional: 'All fields are optional',
      requiredRadiobuttonList: 'Choose one option',
      requiredCheckboxList: 'Choose one or more options',
      requiredSingleCheckbox: 'Required to check',
    };

    return (
      <>
        <FormFieldTag level="all-required" resources={englishResources} />
        <br />
        <FormFieldTag level="required-field" resources={englishResources} />
        <br />
        <FormFieldTag level="optional" resources={englishResources} />
        <br />
        <FormFieldTag level="all-optional" resources={englishResources} />
        <br />
        <FormFieldTag level="required-radiobutton-list" resources={englishResources} />
        <br />
        <FormFieldTag level="required-checkbox-list" resources={englishResources} />
        <br />
        <FormFieldTag level="required-single-checkbox" resources={englishResources} />
      </>
    );
  },
};

export const WithLanguageProvider: Story = {
  render: () => {
    const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.ENGLISH);

    return (
      <LanguageProvider<LanguageLocales> language={language}>
        <Button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)}>{'Bokmål'}</Button>
        <Button onClick={() => setLanguage(LanguageLocales.NORWEGIAN_NYNORSK)}>{'Nynorsk'}</Button>
        <Button onClick={() => setLanguage(LanguageLocales.ENGLISH)}>{'English'}</Button>
        <span>{`Valgt språk: ${language}`}</span>
        <br />
        <FormFieldTag level="all-required" />
        <br />
        <FormFieldTag level="required-field" />
        <br />
        <FormFieldTag level="optional" />
        <br />
        <FormFieldTag level="all-optional" />
        <br />
        <FormFieldTag level="required-radiobutton-list" />
        <br />
        <FormFieldTag level="required-checkbox-list" />
        <br />
        <FormFieldTag level="required-single-checkbox" />
      </LanguageProvider>
    );
  },
};
