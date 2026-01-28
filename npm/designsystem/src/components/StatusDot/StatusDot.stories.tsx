import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import { StatusDotVariant } from './constants';
import StatusDot from './StatusDot';
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
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <StatusDot {...args} variant="success" text="success" />
      <StatusDot {...args} variant="active" text="active" />
      <StatusDot {...args} variant="inprocess" text="inprocess" />
      <StatusDot {...args} variant="exception" text="exception" />
      <StatusDot {...args} variant="unknown" text="unknown" />
      <StatusDot {...args} variant="inspected" text="inspected" />
      <StatusDot {...args} variant="pending" text="pending" />
      <StatusDot {...args} variant="cancelled" text="cancelled" />
      <StatusDot {...args} variant="alert" text="alert" />
      <StatusDot {...args} variant="inactive" text="inactive" />
      <StatusDot {...args} variant="transparent" text="transparent" />
      <StatusDot {...args} variant="info" text="info" />
      <StatusDot {...args} variant="group" text="group" />
      <StatusDot {...args} variant="recurring" text="recurring" />
      <StatusDot {...args} variant="noaccess" text="noaccess" />
      <StatusDot {...args} variant="draft" text="draft" />
      <StatusDot {...args} variant="hidden" text="hidden" />
      <StatusDot {...args} variant="login" text="login" />
      <StatusDot {...args} variant="attachment" text="attachment" />
    </div>
  ),
};
