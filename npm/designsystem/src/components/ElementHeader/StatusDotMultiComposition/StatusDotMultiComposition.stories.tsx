import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import ElementHeader from '../ElementHeader';
import StatusDotMultiComposition from './StatusDotMultiComposition';
import StatusDot, { StatusDotVariant } from '../../StatusDot';

const meta = {
  title: '@helsenorge/designsystem-react/_Internal/ElementHeader/StatusDotMultiComposition',
  component: StatusDotMultiComposition,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={StatusDotMultiComposition} />,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof StatusDotMultiComposition>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <ElementHeader>
      <ElementHeader.StatusDotMultiComposition {...args}>
        <StatusDot variant={StatusDotVariant.success} text="Label" />
        <StatusDot variant={StatusDotVariant.recurring} text="Label" />
        <StatusDot variant={StatusDotVariant.group} text="Label" />
      </ElementHeader.StatusDotMultiComposition>
    </ElementHeader>
  ),
};
