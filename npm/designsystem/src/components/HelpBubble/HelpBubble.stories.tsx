import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import HelpBubble from './HelpBubble';

export default {
  title: 'Components/HelpBubble',
  component: HelpBubble,
  argTypes: {
    children: {
      control: 'text',
      defaultValue:
        'Dette er en HelpBubble. Aliquip aute consectetur eiusmod nisi ullamco aliquip adipisicing cupidatat reprehenderit nulla in Lorem sint.',
    },
    linkUrl: {
      control: 'text',
      defaultValue: '/',
    },
  },
} as ComponentMeta<typeof HelpBubble>;

export const Default: ComponentStory<typeof HelpBubble> = (args: any) => (
  <div style={{ minWidth: '40rem', minHeight: '20rem' }}>
    <HelpBubble {...args}>{args.children}</HelpBubble>
  </div>
);
