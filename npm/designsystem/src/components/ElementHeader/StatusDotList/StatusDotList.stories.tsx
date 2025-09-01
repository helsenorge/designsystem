import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import ElementHeader from '../ElementHeader';
import StatusDotList from './StatusDotList';
import StatusDot, { StatusDotVariant } from '../../StatusDot';

const meta = {
  title: '@helsenorge/designsystem-react/_Internal/ElementHeader/StatusDotList',
  component: StatusDotList,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={StatusDotList} />,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof StatusDotList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <ElementHeader>
      <ElementHeader.StatusDotList {...args}>
        <StatusDot variant={StatusDotVariant.success} text="Label" />
        <StatusDot variant={StatusDotVariant.recurring} text="Label" />
        <StatusDot variant={StatusDotVariant.group} text="Label" />
      </ElementHeader.StatusDotList>
    </ElementHeader>
  ),
};
