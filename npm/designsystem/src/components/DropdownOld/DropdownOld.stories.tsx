import React, { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { useForm } from 'react-hook-form';
import { action } from 'storybook/actions';

import DropdownOld, { DropdownOldOnColor } from './DropdownOld';
import { LanguageLocales } from '../../constants';
import LanguageProvider from '../../utils/language';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Label from '../Label';
import RadioButton from '../RadioButton';
import Spacer from '../Spacer';

const meta = {
  title: '@helsenorge/designsystem-react/Components/DropdownOld',
  component: DropdownOld,
  tags: ['deprecated'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={DropdownOld} />,
      description: {
        component:
          'Som innbygger ønsker jeg å kunne gjøre ett eller flere valg i en liste der hvor det ikke er plass til å vise listen i grensesnittet',
      },
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
    },
  },
  args: {
    label: 'Ta et valg',
    children: '',
    placeholder: 'Hva skjer i kroppen?',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    closeText: {
      control: 'text',
    },
    open: {
      control: 'boolean',
    },
    onColor: {
      control: 'select',
      options: Object.values(DropdownOldOnColor),
    },
    transparent: {
      control: 'boolean',
    },
    fluid: {
      control: 'boolean',
    },
    noCloseButton: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    dropdownMinWidth: {
      control: 'number',
    },
  },
} satisfies Meta<typeof DropdownOld>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <DropdownOld {...args}>
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
    </DropdownOld>
  ),
};

export const RadioButtonChildren: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <DropdownOld {...args}>
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 4', type: 'subdued' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 5', type: 'subdued' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 6', type: 'subdued' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 7', type: 'subdued' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 8', type: 'subdued' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 9', type: 'subdued' }]} />} name="radiobutton" />
    </DropdownOld>
  ),
};

export const CheckboxChildren: Story = {
  render: args => (
    <DropdownOld {...args} onToggle={action('onToggle')}>
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 4', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 5', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 6', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 7', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 8', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 9', type: 'subdued' }]} />} name="checkbox" />
    </DropdownOld>
  ),
};

export const WideChildren: Story = {
  render: args => (
    <DropdownOld {...args} onToggle={action('onToggle')}>
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 2 VeldigLangtOrdSomErForBredt', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 4', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 5', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 6', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 7', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 8', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 9', type: 'subdued' }]} />} name="checkbox" />
    </DropdownOld>
  ),
};

export const EksternChildrenRefs: Story = {
  render: args => {
    const { register, watch } = useForm();
    const checkboxChanging = watch(['checkbox.1', 'checkbox.2', 'checkbox.3']);
    React.useEffect(() => {
      action('Checked')(checkboxChanging);
    }, [checkboxChanging]);
    return (
      <DropdownOld {...args} onToggle={action('onToggle')}>
        <form>
          <Checkbox {...register('checkbox.1')} label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} />
          <Spacer />
          <Checkbox {...register('checkbox.2')} label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} />
          <Spacer />
          <Checkbox {...register('checkbox.3')} label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} />
        </form>
      </DropdownOld>
    );
  },
};

export const WithLanguageProvider: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
import { LanguageLocales } from '@helsenorge/designsystem-react/constants' 
import LanguageProvider from '@helsenorge/designsystem-react/utils/language'
...

const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.ENGLISH);

return (
  <LanguageProvider<LanguageLocales> language={language}>
    <Button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)} variant="outline">
      {'Bytt til bokmål'}
    </Button>
    <Button onClick={() => setLanguage(LanguageLocales.ENGLISH)} variant="outline">
      {'Switch to English'}
    </Button>
    <Spacer />
    <span>{\`Valgt språk: \${language}\`}</span>
    <Spacer />
    <DropdownOld {...args}>
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
    </DropdownOld>
  </LanguageProvider>
);`,
      },
    },
  },
  render: args => {
    const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.ENGLISH);

    return (
      <LanguageProvider<LanguageLocales> language={language}>
        <Button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)} variant="outline">
          {'Bytt til bokmål'}
        </Button>
        <Button onClick={() => setLanguage(LanguageLocales.ENGLISH)} variant="outline">
          {'Switch to English'}
        </Button>
        <Spacer />
        <span>{`Valgt språk: ${language}`}</span>
        <Spacer />
        <DropdownOld {...args}>
          <RadioButton label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
          <RadioButton label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
          <RadioButton label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
        </DropdownOld>
      </LanguageProvider>
    );
  },
};
