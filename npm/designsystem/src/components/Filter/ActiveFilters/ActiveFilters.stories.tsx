/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type React from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { FilterValues } from '../FiltreringsPOC';
import type { Meta } from '@storybook/react-vite';

import ActiveFilters, { type ActiveFiltersProps } from './ActiveFilters';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/ActiveFilters',
  component: ActiveFilters,
  tags: ['new'],
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={ActiveFilters} />,
    },
  },
  args: {
    filter: {
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
    },
    getLabel: () => 'Tekst',
  },
  argTypes: {},
} satisfies Meta<typeof ActiveFilters>;

export default meta;

export const Default = {
  render: (args: ActiveFiltersProps<FilterValues>): React.JSX.Element => {
    return <ActiveFilters {...args} />;
  },
};
