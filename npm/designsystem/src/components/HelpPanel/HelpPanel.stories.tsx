import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import HelpPanel from './HelpPanel';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpPanel',
  component: HelpPanel,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={HelpPanel} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/help-panel/bruk-gFaElbtJ" />
      ),
      description: {
        component: 'HelpPanel er et komponent som skal innholde hjelpetekst til brukeren.',
      },
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis neque sed accumsan pellentesque. Pellentesque eu ex finibus lectus congue hendrerit quis vel justo.',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof HelpPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <HelpPanel {...args} />,
};

export const WithTitle: Story = {
  render: args => <HelpPanel {...args} title="Tittel" />,
};
