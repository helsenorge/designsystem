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

export const OnDark: Story = {
  render: args => (
    <div style={{ padding: '3rem', backgroundColor: getColor('blueberry', 500) }}>
      <StatusDot {...args} onColor={FormOnColor.ondark} />
    </div>
  ),
};
