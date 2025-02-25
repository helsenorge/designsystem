import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import StatusDot, { StatusDotVariant } from './StatusDot';
import { FormOnColor } from '../../constants';
import { getColor } from '../../theme/currys';

const meta = {
  title: '@helsenorge/designsystem-react/Components/StatusDot',
  component: StatusDot,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={StatusDot} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/status-dot/bruk-K0Jmx5JR" />
      ),
      description: {
        component: 'Viser en status i en kompakt og på en scanbar måte. Støtter en farget prikk og ikon.',
      },
    },
  },
  args: {
    text: 'StatusDot label',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(StatusDotVariant),
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

export const OnDark: Story = {
  render: args => (
    <div style={{ padding: '3rem', backgroundColor: getColor('blueberry', 500) }}>
      <StatusDot {...args} onColor={FormOnColor.ondark} />
    </div>
  ),
};

export const Variants: Story = {
  render: args => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
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
    );
  },
};
