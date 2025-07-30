import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import HelpTooltip, { HelpTooltipOpenProvider } from './HelpTooltip';
import HelpTooltipExample from '../../docs/HelpTooltipExample';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpTooltip',
  component: HelpTooltip,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={HelpTooltip} />,
      description: {
        component:
          'HelpTooltip [HelpTooltip] hjelper innbygger å forstå et ord eller en setning bedre ved å vise en forklaring i en HelpBubble når teksten hovres eller klikkes på.<br><br>Ved bruk av flere tooltips på en side så skal de wrappes i HelpTooltipOpenProvider som eksporteres fra HelpTooltip.',
      },
      story: {
        inline: false,
        iframeHeight: '10rem',
      },
    },
  },
  args: { children: 'Ord', description: 'Dette er tekst som skal fylle HelpBubble' },
  argTypes: {
    children: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} satisfies Meta<typeof HelpTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <HelpTooltip {...args} />,
};

export const WithText: Story = {
  render: args => <HelpTooltipExample {...args} />,
};

export const SingleExample: Story = {
  render: args => (
    <HelpTooltipOpenProvider>
      <HelpTooltip {...args} />
    </HelpTooltipOpenProvider>
  ),
};
