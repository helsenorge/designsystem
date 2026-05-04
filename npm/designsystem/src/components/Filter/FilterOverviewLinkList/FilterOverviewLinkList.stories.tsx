/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type React from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { Meta } from '@storybook/react-vite';

import FilterOverviewLinkList from './FilterOverviewLinkList';
import { DrawerNavigationContext } from '../DrawerNavigation';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterOverviewLinkList',
  component: FilterOverviewLinkList,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterOverviewLinkList} />,
    },
  },
  decorators: [
    (Story): React.JSX.Element => (
      <DrawerNavigationContext.Provider
        value={{
          goToView: (id: string) => action(`goToView: ${id}`)(),
          goBack: () => action('goBack')(),
          goToViewAndClearStack: (id: string) => action(`goToViewAndClearStack: ${id}`)(),
        }}
      >
        <Story />
      </DrawerNavigationContext.Provider>
    ),
  ],
} satisfies Meta<typeof FilterOverviewLinkList>;

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
    const getDummyLabels = (_: string, value: unknown): string => {
      return value as string;
    };
    const dummyLinks = [
      {
        filterKey: 'dummyParam1',
        title: 'First',
      },
      {
        filterKey: 'dummyParam2',
        title: 'Second',
      },
      {
        filterKey: 'dummyParam3',
        title: 'Third',
      },
    ];
    return <FilterOverviewLinkList filter={dummyFilter} getLabel={getDummyLabels} links={dummyLinks} />;
  },
};
