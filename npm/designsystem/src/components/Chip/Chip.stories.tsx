import { useState } from 'react';

import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Chip from './Chip';
import { LanguageLocales } from '../../constants';
import LanguageProvider from '../../utils/language';
import Dropdown from '../Dropdown';
import Globe from '../Icons/Globe';
import Spacer from '../Spacer';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Chip',
  component: Chip,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  args: {
    children: 'Tekst',
    onChipClick: action('Chip clicked'),
    onCloseClick: action('Close clicked'),
    closeButtonProps: {},
    chipButtonProps: {},
  },
  argTypes: {
    children: {
      control: 'text',
    },
    withCloseButton: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Chip {...args} />,
};

export const WithAndWithoutCloseButton: Story = {
  render: args => (
    <>
      <Chip {...args} withCloseButton />
      <br />
      <br />
      <Chip {...args} withCloseButton={false} />
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
          <Dropdown.SingleSelectItem text={'Bokmål'} asChild>
            <button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)} />
          </Dropdown.SingleSelectItem>
        </Dropdown>
        <Spacer />
        <Chip {...args} />
      </LanguageProvider>
    );
  },
};

export const WithBreakingText: Story = {
  args: {
    children: 'Lang tekst her som fort går over flere linjer hvis man zoomer eller har veldig liten skjerm',
    withCloseButton: true,
  },
  render: args => (
    <>
      <Chip {...args} />
    </>
  ),
};
