/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type React from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { Meta } from '@storybook/react-vite';

import FilterButtonAndActiveFiltersWrapper from './FilterButtonAndActiveFiltersWrapper';
import ActiveFilters from '../ActiveFilters/ActiveFilters';
import FilterButton from '../FilterButton/FilterButton';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterButtonAndActiveFiltersWrapper',
  component: FilterButtonAndActiveFiltersWrapper,
  tags: ['new'],
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterButtonAndActiveFiltersWrapper} />,
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof FilterButtonAndActiveFiltersWrapper>;

export default meta;

export const Default = {
  render: (): React.JSX.Element => {
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
    return (
      <FilterButtonAndActiveFiltersWrapper>
        <FilterButton onClick={() => action('Open filter')} />
        <ActiveFilters filter={dummyFilter} getLabel={getDummyLabels} onChipClick={() => action('chip clicked')} />
      </FilterButtonAndActiveFiltersWrapper>
    );
  },
};
