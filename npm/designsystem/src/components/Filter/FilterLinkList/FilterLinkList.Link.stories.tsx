/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { Meta } from '@storybook/react-vite';

import FilterLinkList, { Link } from './FilterLinkList';
import Icon from '../../Icon';
import HandWaving from '../../Icons/HandWaving';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterLinkList/Link',
  component: Link,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={Link} />,
    },
  },
  args: {
    title: 'Dato/Periode',
    chips: ['13.09.2023-13.09.2024'],
    onClick: action('Clicked'),
  },
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;

export const Default = {
  render: (args: any): React.JSX.Element => {
    return (
      <FilterLinkList>
        <FilterLinkList.Link {...args} />
      </FilterLinkList>
    );
  },
};

export const WithCustomChildren = {
  args: {
    children: (
      <>
        <Icon svgIcon={HandWaving} />
        <span>{'Her er litt custom innhold'}</span>
      </>
    ),
    title: undefined,
  },
  render: (args: any): React.JSX.Element => {
    return (
      <FilterLinkList>
        <FilterLinkList.Link {...args} />
      </FilterLinkList>
    );
  },
};
