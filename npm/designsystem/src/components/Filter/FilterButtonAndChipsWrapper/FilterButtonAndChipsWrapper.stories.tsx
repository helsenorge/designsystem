/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type React from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { Meta } from '@storybook/react-vite';

import FilterButtonAndChipsWrapper from './FilterButtonAndChipsWrapper';
import FilterButton from '../FilterButton/FilterButton';
import getFilterChips from '../getFilterChips/getFilterChips';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterButtonAndChipsWrapper',
  component: FilterButtonAndChipsWrapper,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterButtonAndChipsWrapper} />,
    },
  },
  args: {
    filterButtonComponent: <FilterButton onClick={() => action('Open filter')} />,
  },
  argTypes: {},
} satisfies Meta<typeof FilterButtonAndChipsWrapper>;

export default meta;

export const Default = {
  render: (args): React.JSX.Element => {
    const dummyFilter = {
      filters: {
        dummyParam1: ['1-1', '1-2', '1-3', '1-4'],
        dummyParam2: ['2-1', '2-2'],
        dummyParam3: '3',
      },
      setFilter: () => {},
      setFilters: () => {},
      removeFilter: (key: string) => action(`removeFilter: ${key}`)(),
      resetFilters: () => {},
      resetFiltersToEmpty: () => {},
    };
    const getDummyLabels = (): string => {
      return `Tekst`;
    };
    const chips = getFilterChips({
      filter: dummyFilter,
      getLabel: getDummyLabels,
      onChipClick: action('Chip clicked'),
      onOverflowChipClick: action('Overflow chip clicked'),
    });
    return <FilterButtonAndChipsWrapper {...args} filterChips={chips} />;
  },
};
