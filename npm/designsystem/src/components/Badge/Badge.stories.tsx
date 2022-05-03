import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { allPaletteNames } from '../../../.storybook/knobs';
import Badge from './Badge';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: '1',
    },
    color: {
      control: 'select',
      options: allPaletteNames,
      defaultValue: 'blueberry',
    },
  },
} as ComponentMeta<typeof Badge>;

export const Default: ComponentStory<typeof Badge> = (args: any) => <Badge {...args}>{args.children}</Badge>;
