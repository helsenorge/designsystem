/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { Meta } from '@storybook/react-vite';

import FilterSort from './FilterSort';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterSort',
  component: FilterSort,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterSort} />,
    },
  },
  args: {
    children: (
      <>
        <option value={'Option 1'}>{'Nyest-Eldst'}</option>
        <option value={'Option 2'}>{'Eldst-Nyest'}</option>
        <option value={'Option 3'}>{'Alfabetisk A-Å'}</option>
        <option value={'Option 4'}>{'Alfabetisk Å-A'}</option>
      </>
    ),
  },
  argTypes: {},
} satisfies Meta<typeof FilterSort>;

export default meta;

export const Default = {
  render: (args: any): React.JSX.Element => <FilterSort {...args} />,
};
