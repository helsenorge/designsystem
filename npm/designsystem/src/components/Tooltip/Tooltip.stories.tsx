import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from './Tooltip';
import TooltipExample from '../TooltipExample';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'ordet',
    },
    description: {
      control: 'text',
      defaultValue: 'Dette er tekst som skal fylle HelpBubble',
    },
  },
} as ComponentMeta<typeof Tooltip>;

export const Default: ComponentStory<typeof Tooltip> = (args: any) => (
  <div>
    <TooltipExample {...args} />
  </div>
);
