import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';
import { useArgs } from 'storybook/preview-api';

import type { Meta, StoryObj } from '@storybook/react-vite';

import FilterSearch from './FilterSearch';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterSearch',
  component: FilterSearch,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterSearch} />,
    },
  },
  args: { value: '' },
  argTypes: {
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof FilterSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args): React.JSX.Element => {
    const [searchValue, setSearchValue] = useState<string>('');

    return (
      <FilterSearch
        {...args}
        value={searchValue}
        onChange={e => setSearchValue((e.target as HTMLInputElement).value)}
        name="search"
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args): React.JSX.Element => {
    const [{ value }, setSearchValue] = useArgs();

    return (
      <FilterSearch
        {...args}
        value={value}
        onChange={e => setSearchValue({ value: (e.target as HTMLInputElement).value })}
        name="search"
        buttonProps={{
          onClick: () => alert(`Søker etter: ${value}`),
        }}
        clearButtonProps={{
          onClick: () => setSearchValue({ value: '' }),
        }}
      />
    );
  },
};
