import React, { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { MemoryRouter, Link, Routes, Route, useLocation } from 'react-router-dom';
import { action } from 'storybook/actions';

import Dropdown, { DropdownBase } from './Dropdown';
import { LanguageLocales } from '../../constants';
import LanguageProvider from '../../utils/language';
import AnchorLink from '../AnchorLink';
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
      <Dropdown.Radio label={'Valg 1'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 2'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 3'} name="radiobutton" />
    </Dropdown>
  ),
};

export const SingleSelect: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <Dropdown {...args}>
      <Dropdown.Radio label={'Valg 1'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 2'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 3'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 4'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 5'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 6'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 7'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 8'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 9'} name="radiobutton" />
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
        <Dropdown.Radio label={'Valg 1'} name="radiobutton" />
        <Dropdown.Radio label={'Valg 2'} name="radiobutton" />
        <Dropdown.Radio label={'Valg 3'} name="radiobutton" />
      </Dropdown>
      <br />
      <Dropdown {...args} variant="transparent">
        <Dropdown.Radio label={'Valg 1'} name="radiobutton" />
        <Dropdown.Radio label={'Valg 2'} name="radiobutton" />
        <Dropdown.Radio label={'Valg 3'} name="radiobutton" />
      </Dropdown>
      <br />
      <Dropdown {...args} variant="borderless">
        <Dropdown.Radio label={'Valg 1'} name="radiobutton" />
        <Dropdown.Radio label={'Valg 2'} name="radiobutton" />
        <Dropdown.Radio label={'Valg 3'} name="radiobutton" />
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
      <Dropdown.Radio label={'Valg 1'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 2'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 3'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 4'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 5'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 6'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 7'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 8'} name="radiobutton" />
      <Dropdown.Radio label={'Valg 9'} name="radiobutton" />
    </Dropdown>
  ),
};

const CurrentPath: React.FC = () => {
  const location = useLocation();
  React.useEffect(() => {
    action('navigated')(location.pathname);
  }, [location.pathname]);
  return (
    <div style={{ marginTop: '1rem', fontFamily: 'monospace' }}>
      {'Current path:'}
      <strong>{location.pathname}</strong>
    </div>
  );
};

export const AsChild: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<CurrentPath />} />
        <Route path="/sprak/:lang" element={<CurrentPath />} />
      </Routes>
      <br />
      <Dropdown {...args} svgIcon={Globe}>
        <Dropdown.Radio asChild label={'As Button 1'} name="radiobutton">
          <button onClick={action('Button click: As Button 1')} />
        </Dropdown.Radio>

        <Dropdown.Radio asChild label={'As Button 2'} name="radiobutton">
          <button onClick={action('Button click: As Button 2')} />
        </Dropdown.Radio>

        <Dropdown.Radio asChild label={'As AnchorLink 1'} name="radiobutton">
          <a href="#" target="_blank"></a>
        </Dropdown.Radio>

        <Dropdown.Radio asChild label={'As AnchorLink 2'} name="radiobutton">
          <a href="#" target="_blank"></a>
        </Dropdown.Radio>

        <Dropdown.Radio asChild label={'As React Router Link (en)'} name="radiobutton" value="en">
          <Link to="/sprak/en" />
        </Dropdown.Radio>

        <Dropdown.Radio asChild label={'As React Router Link (nb)'} name="radiobutton" value="nb">
          <Link to="/sprak/nb" />
        </Dropdown.Radio>
      </Dropdown>
    </MemoryRouter>
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
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="checkbox" />
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
          <Checkbox label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="checkbox" />
          <Checkbox label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="checkbox" />
          <Checkbox label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="checkbox" />
        </Dropdown>
      </LanguageProvider>
    );
  },
};
