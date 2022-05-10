import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tag, { TagAction, TagSize, TagVariant } from './Tag';
import LawBook from '../Icons/LawBook';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Tekst',
    },
    size: {
      control: 'select',
      options: TagSize,
      defaultValue: TagSize.medium,
    },
    color: {
      control: 'select',
      options: ['blueberry', 'neutral', 'cherry', 'banana', 'kiwi', 'plum'],
      defaultValue: 'blueberry',
    },
    variant: {
      control: 'select',
      options: TagVariant,
      defaultValue: TagVariant.normal,
    },
    action: {
      control: 'select',
      options: TagAction,
      defaultValue: TagAction.remove,
    },
  },
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = (args: any) => (
  <div style={{ width: '40rem' }}>
    <Tag {...args}>{args.children}</Tag>
  </div>
);

export const WithIcon: ComponentStory<typeof Tag> = (args: any) => (
  <div style={{ width: '40rem' }}>
    <Tag {...args} svgIcon={LawBook}>
      {args.children}
    </Tag>
  </div>
);

export const Action: ComponentStory<typeof Tag> = (args: any) => (
  <div style={{ width: '40rem' }}>
    <Tag {...args} svgIcon={LawBook} onClick={action('Tag clicked')}>
      {args.children}
    </Tag>
  </div>
);
