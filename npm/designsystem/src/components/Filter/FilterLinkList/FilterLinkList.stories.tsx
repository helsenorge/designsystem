import type React from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { Meta } from '@storybook/react-vite';

import FilterLinkList from './FilterLinkList';
import Tag from '../../Tag';
import TagList from '../../TagList';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterLinkList',
  component: FilterLinkList,
  tags: ['new'],
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterLinkList} />,
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
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

export const WithChildren = {
  render: (): React.JSX.Element => {
    return (
      <FilterLinkList>
        <FilterLinkList.Link onClick={() => action('dato')}>
          <span>{'Dato/periode'}</span>
          <TagList>
            <Tag>{'13.09.2023-13.09.2024'}</Tag>
          </TagList>
        </FilterLinkList.Link>
        <FilterLinkList.Link onClick={() => action('dokument')}>
          <span>{'Dokumenttype'}</span>
        </FilterLinkList.Link>
        <FilterLinkList.Link onClick={() => action('helseregion')}>
          <span>{'Helseregion'}</span>
        </FilterLinkList.Link>
      </FilterLinkList>
    );
  },
};
