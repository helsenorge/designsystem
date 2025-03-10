import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Tooltip, { TooltipOpenProvider } from './Tooltip';
import TooltipExample from '../../docs/TooltipExample';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Tooltip',
  component: Tooltip,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Tooltip} />,
      description: {
        component:
          'Tooltip [Tooltip] hjelper innbygger å forstå et ord eller en setning bedre ved å vise en forklaring i en HelpBubble når teksten hovres eller klikkes på.<br><br>Ved bruk av flere tooltips på en side så skal de wrappes i TooltipOpenProvider som eksporteres fra Tooltip.',
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
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Tooltip {...args} />,
};

export const WithText: Story = {
  render: args => <TooltipExample {...args} />,
};

export const SingleExample: Story = {
  render: args => (
    <TooltipOpenProvider>
      <Tooltip {...args} />
    </TooltipOpenProvider>
  ),
};
