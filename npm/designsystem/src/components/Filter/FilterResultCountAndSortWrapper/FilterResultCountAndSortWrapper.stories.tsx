import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { Meta } from '@storybook/react-vite';

import FilterResultCountAndSortWrapper from './FilterResultCountAndSortWrapper';
import FilterSort from '../FilterSort/FilterSort';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterResultCountAndSortWrapper',
  component: FilterResultCountAndSortWrapper,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterResultCountAndSortWrapper} />,
    },
  },
  args: {
    resultCount: <span>{'3 treff'}</span>,
    sortComponent: (
      <FilterSort>
        <option value={'Option 1'}>{'Nyest-Eldst'}</option>
        <option value={'Option 2'}>{'Eldst-Nyest'}</option>
        <option value={'Option 3'}>{'Alfabetisk A-Å'}</option>
        <option value={'Option 4'}>{'Alfabetisk Å-A'}</option>
      </FilterSort>
    ),
  },
  argTypes: {},
} satisfies Meta<typeof FilterResultCountAndSortWrapper>;

export default meta;

export const Default = {
  render: (args): React.JSX.Element => <FilterResultCountAndSortWrapper {...args} />,
};
