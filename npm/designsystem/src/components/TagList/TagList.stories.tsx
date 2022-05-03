import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TagList from './TagList';
import Tag from '../Tag';

export default {
  title: 'TagList',
  component: TagList,
} as ComponentMeta<typeof TagList>;

export const Default: ComponentStory<typeof TagList> = (args: any) => (
  <div style={{ width: '20rem' }}>
    <TagList>
      <Tag>{'Læring'}</Tag>
      <Tag>{'Psykisk helse'}</Tag>
      <Tag>{'Fysisk helse'}</Tag>
      <Tag>{'Livsstil'}</Tag>
    </TagList>
  </div>
);
