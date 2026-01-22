import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

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
    variant: {
      control: 'select',
      options: ['normal', 'compact'],
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

export const Compact: Story = {
  args: {
    variant: 'compact',
  },
  render: args => <HelpPanel {...args} />,
};
