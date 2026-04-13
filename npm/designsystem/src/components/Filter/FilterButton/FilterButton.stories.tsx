/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { Meta } from '@storybook/react-vite';

import FilterButton from './FilterButton';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterButton',
  component: FilterButton,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterButton} />,
    },
  },
  args: {
    onClick: action('Clicked'),
    resources: {
      filterbutton_text: 'Finn...',
    },
  },
  argTypes: {},
} satisfies Meta<typeof FilterButton>;

export default meta;

export const Default = {
  render: (args: any): React.JSX.Element => {
    return <FilterButton {...args} />;
  },
};
