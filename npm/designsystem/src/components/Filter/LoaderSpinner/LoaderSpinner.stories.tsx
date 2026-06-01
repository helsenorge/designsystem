import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import LoaderSpinner from './LoaderSpinner';
import { LanguageLocales } from '../../../constants';
import LanguageProvider from '../../../utils/language';
import Dropdown from '../../Dropdown';
import Globe from '../../Icons/Globe';
import Spacer from '../../Spacer';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/LoaderSpinner',
  component: LoaderSpinner,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={LoaderSpinner} />,
      description: {
        component: 'LoaderSpinner brukes til å indikere at filtertreff lastes.',
      },
    },
  },
} satisfies Meta<typeof LoaderSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <LoaderSpinner {...args} />,
};

export const CustomResources: Story = {
  args: {
    resources: { loadingText: 'Egen tekst' },
  },
  render: args => <LoaderSpinner {...args} />,
};

export const WithLanguageProvider: Story = {
  render: args => {
    const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.NORWEGIAN);

    return (
      <LanguageProvider<LanguageLocales> language={language}>
        <Dropdown svgIcon={Globe} triggerText="Velg språk">
          <Dropdown.SingleSelectItem text={'English'} asChild>
            <button onClick={() => setLanguage(LanguageLocales.ENGLISH)} />
          </Dropdown.SingleSelectItem>
          <Dropdown.SingleSelectItem text={'Bokmål'} asChild defaultSelected>
            <button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)} />
          </Dropdown.SingleSelectItem>
        </Dropdown>
        <Spacer size="2xl" />
        <LoaderSpinner {...args} />
      </LanguageProvider>
    );
  },
};
