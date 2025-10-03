import React, { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import Dropdown, { DropdownBase } from './Dropdown';
import { LanguageLocales } from '../../constants';
import LanguageProvider from '../../utils/language';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Globe from '../Icons/Globe';
import Label, { Sublabel } from '../Label';
import Spacer from '../Spacer';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Dropdown',
  component: Dropdown,
  subcomponents: { Radio: Dropdown.Radio },
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={DropdownBase} />,
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
  argTypes: {},
} satisfies Meta<typeof DropdownBase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <Dropdown {...args}>
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
    </Dropdown>
  ),
};

export const SingleSelect: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <Dropdown {...args}>
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 4', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 5', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 6', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 7', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 8', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 9', type: 'subdued' }]} />} name="radiobutton" />
    </Dropdown>
  ),
};

export const MultiSelect: Story = {
  render: args => (
    <Dropdown {...args} onToggle={action('onToggle')}>
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 4', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 5', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 6', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 7', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 8', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 9', type: 'subdued' }]} />} name="checkbox" />
    </Dropdown>
  ),
};

export const Variants: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <>
      <Dropdown {...args} variant={'fill'}>
        <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
        <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
        <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
      </Dropdown>
      <br />
      <Dropdown {...args} variant="transparent">
        <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
        <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
        <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
      </Dropdown>
      <br />
      <Dropdown {...args} variant="borderless">
        <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
        <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
        <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
      </Dropdown>
    </>
  ),
};

export const WithIcon: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <Dropdown {...args} svgIcon={Globe}>
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 4', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 5', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 6', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 7', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 8', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 9', type: 'subdued' }]} />} name="radiobutton" />
    </Dropdown>
  ),
};

export const AsChild: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <Dropdown {...args} svgIcon={Globe}>
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 4', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 5', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 6', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 7', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 8', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 9', type: 'subdued' }]} />} name="radiobutton" />
    </Dropdown>
  ),
};

export const WithSublabels: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <Dropdown {...args}>
      <Dropdown.Radio
        label={
          <Label
            labelTexts={[{ text: 'Valg 1', type: 'subdued' }]}
            sublabel={<Sublabel id="sublabel-testid2" sublabelTexts={[{ text: 'Ekstra info', type: 'subdued' }]} />}
          />
        }
        name="radiobutton"
      />
      <Dropdown.Radio
        label={
          <Label
            labelTexts={[{ text: 'Valg 2', type: 'subdued' }]}
            sublabel={<Sublabel id="sublabel-testid2" sublabelTexts={[{ text: 'Ekstra info', type: 'subdued' }]} />}
          />
        }
        name="radiobutton"
      />
      <Dropdown.Radio
        label={
          <Label
            labelTexts={[{ text: 'Valg 3', type: 'subdued' }]}
            sublabel={<Sublabel id="sublabel-testid2" sublabelTexts={[{ text: 'Ekstra info', type: 'subdued' }]} />}
          />
        }
        name="radiobutton"
      />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 4', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 5', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 6', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 7', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 8', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 9', type: 'subdued' }]} />} name="radiobutton" />
    </Dropdown>
  ),
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
    <Dropdown {...args}>
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
    </Dropdown>
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
        <Dropdown {...args}>
          <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
          <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
          <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
        </Dropdown>
      </LanguageProvider>
    );
  },
};
