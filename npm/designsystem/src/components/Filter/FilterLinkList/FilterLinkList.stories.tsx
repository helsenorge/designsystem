import type React from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { Meta } from '@storybook/react-vite';

import FilterLinkList from './FilterLinkList';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterLinkList',
  component: FilterLinkList,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterLinkList} />,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof FilterLinkList>;

export default meta;

export const Default = {
  render: (): React.JSX.Element => {
    return (
      <FilterLinkList>
        <FilterLinkList.Link title={'Dato/periode'} chips={['13.09.2023-13.09.2024']} onClick={() => action('dato')} />
        <FilterLinkList.Link title={'Dokumenttype'} onClick={() => action('dokument')} />
        <FilterLinkList.Link title={'Helseregion'} onClick={() => action('helseregion')} />
      </FilterLinkList>
    );
  },
};
