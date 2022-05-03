import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Line Danser',
    },
    selected: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args: any) => <Avatar {...args}>{args.children}</Avatar>;

export const Inverted: ComponentStory<typeof Avatar> = (args: any) => (
  <Avatar {...args} variant={'black'}>
    {args.children}
  </Avatar>
);
