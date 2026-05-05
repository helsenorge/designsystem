import type React from 'react';

import { Docs } from 'frankenstein-build-tools';
import { useArgs } from 'storybook/preview-api';

import type { Meta, StoryObj } from '@storybook/react-vite';

import FilterOverviewSearch from './FilterOverviewSearch';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterOverviewSearch',
  component: FilterOverviewSearch,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterOverviewSearch} />,
    },
  },
  args: { value: '' },
  argTypes: {
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof FilterOverviewSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args): React.JSX.Element => {
    const [{ value }, setSearchValue] = useArgs();

    return (
      <FilterOverviewSearch
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
