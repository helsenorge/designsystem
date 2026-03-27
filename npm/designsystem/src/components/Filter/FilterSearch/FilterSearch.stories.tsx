import { useState } from 'react';
import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { Meta } from '@storybook/react-vite';

import FilterSearch from './FilterSearch';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterSearch',
  component: FilterSearch,
  tags: ['new'],
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterSearch} />,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof FilterSearch>;

export default meta;

export const Default = {
  render: (): React.JSX.Element => {
    const [searchValue, setSearchValue] = useState<string>('');

    return (
      <FilterSearch
        value={searchValue}
        onChange={e => setSearchValue((e.target as HTMLInputElement).value)}
        inputProps={{
          name: 'search',
        }}
        buttonProps={{
          onClick: () => alert(`Søker etter: ${searchValue}`),
        }}
        clearButtonProps={{
          onClick: () => setSearchValue(''),
        }}
      />
    );
  },
};
