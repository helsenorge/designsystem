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
import Label from '../Label';
import Spacer from '../Spacer';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Dropdown',
  component: Dropdown,
  subcomponents: { SingleSelectItem: Dropdown.SingleSelectItem },
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
    children: '',
    triggerText: 'Hva skjer i kroppen?',
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
      <Dropdown.SingleSelectItem text={'Valg 1'} />
      <Dropdown.SingleSelectItem text={'Valg 2'} />
      <Dropdown.SingleSelectItem text={'Valg 3'} />
    </Dropdown>
  ),
};

export const SingleSelect: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <Dropdown {...args}>
      <Dropdown.SingleSelectItem text={'Valg 1'} />
      <Dropdown.SingleSelectItem text={'Valg 2'} />
      <Dropdown.SingleSelectItem text={'Valg 3'} />
      <Dropdown.SingleSelectItem text={'Valg 4'} />
      <Dropdown.SingleSelectItem text={'Valg 5'} />
      <Dropdown.SingleSelectItem text={'Valg 6'} />
      <Dropdown.SingleSelectItem text={'Valg 7'} />
      <Dropdown.SingleSelectItem text={'Valg 8'} />
      <Dropdown.SingleSelectItem text={'Valg 9'} />
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
        <Dropdown.SingleSelectItem text={'Valg 1'} />
        <Dropdown.SingleSelectItem text={'Valg 2'} />
        <Dropdown.SingleSelectItem text={'Valg 3'} />
      </Dropdown>
      <br />
      <Dropdown {...args} variant="transparent">
        <Dropdown.SingleSelectItem text={'Valg 1'} />
        <Dropdown.SingleSelectItem text={'Valg 2'} />
        <Dropdown.SingleSelectItem text={'Valg 3'} />
      </Dropdown>
      <br />
      <Dropdown {...args} variant="borderless">
        <Dropdown.SingleSelectItem text={'Valg 1'} />
        <Dropdown.SingleSelectItem text={'Valg 2'} />
        <Dropdown.SingleSelectItem text={'Valg 3'} />
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
      <Dropdown.SingleSelectItem text={'Valg 1'} />
      <Dropdown.SingleSelectItem text={'Valg 2'} />
      <Dropdown.SingleSelectItem text={'Valg 3'} />
      <Dropdown.SingleSelectItem text={'Valg 4'} />
      <Dropdown.SingleSelectItem text={'Valg 5'} />
      <Dropdown.SingleSelectItem text={'Valg 6'} />
      <Dropdown.SingleSelectItem text={'Valg 7'} />
      <Dropdown.SingleSelectItem text={'Valg 8'} />
      <Dropdown.SingleSelectItem text={'Valg 9'} />
    </Dropdown>
  ),
};

export const AsChild: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
        <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<CurrentPath />} />
          <Route path="/sprak/:lang" element={<CurrentPath />} />
        </Routes>
        <br />
        <Dropdown {...args} svgIcon={Globe}>
          <Dropdown.SingleSelectItem asChild text={'As Button 1'}>
            <button onClick={action('Button click: As Button 1')} />
          </Dropdown.SingleSelectItem>
  
          <Dropdown.SingleSelectItem asChild text={'As Button 2'}>
            <button onClick={action('Button click: As Button 2')} />
          </Dropdown.SingleSelectItem>
  
          <Dropdown.SingleSelectItem asChild text={'As AnchorLink 1'}>
            <a href="#" target="_blank">
              {'As AnchorLink 1'}
            </a>
          </Dropdown.SingleSelectItem>
  
          <Dropdown.SingleSelectItem asChild text={'As AnchorLink 2'}>
            <a href="#" target="_blank">
              {'As AnchorLink 2'}
            </a>
          </Dropdown.SingleSelectItem>
  
          <Dropdown.SingleSelectItem asChild text={'As React Router Link (en)'} value="en">
            <Link to="/sprak/en" />
          </Dropdown.SingleSelectItem>
  
          <Dropdown.SingleSelectItem asChild text={'As React Router Link (nb)'} value="nb">
            <Link to="/sprak/nb" />
          </Dropdown.SingleSelectItem>
        </Dropdown>
      </MemoryRouter>`,
      },
    },
  },
  render: args => (
    <Dropdown {...args} svgIcon={Globe}>
      <Dropdown.SingleSelectItem asChild text={'As Button 1'}>
        <button onClick={action('Button click: As Button 1')} />
      </Dropdown.SingleSelectItem>

      <Dropdown.SingleSelectItem asChild text={'As Button 2'}>
        <button onClick={action('Button click: As Button 2')} />
      </Dropdown.SingleSelectItem>

      <Dropdown.SingleSelectItem asChild text={'As AnchorLink 1'}>
        <a href="#" target="_blank">
          {'As AnchorLink 1'}
        </a>
      </Dropdown.SingleSelectItem>

      <Dropdown.SingleSelectItem asChild text={'As AnchorLink 2'}>
        <a href="#" target="_blank">
          {'As AnchorLink 2'}
        </a>
      </Dropdown.SingleSelectItem>
    </Dropdown>
  ),
};

export const DefaultSelected: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <>
      <Dropdown {...args}>
        <Dropdown.SingleSelectItem text={'Valg 1'} defaultSelected />
        <Dropdown.SingleSelectItem text={'Valg 2'} />
        <Dropdown.SingleSelectItem text={'Valg 3'} />
      </Dropdown>
      <br />
      <Dropdown {...args} onToggle={action('onToggle')}>
        <Checkbox label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="checkbox" checked />
        <Checkbox label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="checkbox" checked />
        <Checkbox label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="checkbox" />
      </Dropdown>
    </>
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
