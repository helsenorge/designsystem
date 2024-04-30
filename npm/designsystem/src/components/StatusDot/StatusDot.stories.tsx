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
