import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './Avatar';
import GridExample from '../GridExample';

export default {
  title: 'Components/Avatar',
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

export const Default: ComponentStory<typeof Avatar> = (args: any) => (
  <GridExample>
    <Avatar {...args}>{args.children}</Avatar>
  </GridExample>
);

export const Inverted: ComponentStory<typeof Avatar> = (args: any) => (
  <GridExample>
    <Avatar {...args} variant={'black'}>
      {args.children}
    </Avatar>
  </GridExample>
);
