import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { Meta, StoryObj } from '@storybook/react-vite';

import FilterStateWrapper from './FilterStateWrapper';
import FilterButton from '../FilterButton/FilterButton';
import FilterButtonAndChipsWrapper from '../FilterButtonAndChipsWrapper/FilterButtonAndChipsWrapper';
import FilterResultCountAndSortWrapper from '../FilterResultCountAndSortWrapper/FilterResultCountAndSortWrapper';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterStateWrapper',
  component: FilterStateWrapper,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterStateWrapper} />,
    },
  },
  args: {
    children: (
      <>
        <FilterButtonAndChipsWrapper filterButtonComponent={<FilterButton />} filterChips={[]} />
        <FilterResultCountAndSortWrapper resultCount={<span>{'3 treff'}</span>} />
      </>
    ),
  },
  argTypes: {},
} satisfies Meta<typeof FilterStateWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args): React.JSX.Element => <FilterStateWrapper {...args} />,
};
