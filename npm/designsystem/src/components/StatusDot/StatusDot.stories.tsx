import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import StatusDot, { StatusDotVariant } from './StatusDot';
import Docs from '../../docs';

const meta = {
  title: '@helsenorge/designsystem-react/Components/StatusDot',
  component: StatusDot,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={StatusDot} />,
      description: {
        component: 'Viser en status i en kompakt og på en scanbar måte. Støtter en farget prikk og ikon.',
      },
    },
  },
  args: {
    variant: StatusDotVariant.info,
    text: 'StatusDot label',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: StatusDotVariant,
    },
    text: {
      control: 'text',
    },
  },
} satisfies Meta<typeof StatusDot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <StatusDot {...args} />,
};

export const AllTypes: Story = {
  render: args => (
    <div style={{ display: 'flex', flexFlow: 'column' }}>
      <StatusDot {...args} variant="active" />
      <StatusDot {...args} variant="alert" />
      <StatusDot {...args} variant="attachment" />
      <StatusDot {...args} variant="cancelled" />
      <StatusDot {...args} variant="group" />
      <StatusDot {...args} variant="info" />
      <StatusDot {...args} variant="noaccess" />
      <StatusDot {...args} variant="recurring" />
      <StatusDot {...args} variant="transparent" />
      <StatusDot {...args} variant="warning" />
    </div>
  ),
};
