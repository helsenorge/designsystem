import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TagList from './TagList';
import Tag from '../Tag';
import GridExample from '../GridExample';

export default {
  title: 'Components/TagList',
  component: TagList,
} as ComponentMeta<typeof TagList>;

export const Default: ComponentStory<typeof TagList> = (args: any) => (
  <GridExample>
    <TagList>
      <Tag>{'Læring'}</Tag>
      <Tag>{'Psykisk helse'}</Tag>
      <Tag>{'Fysisk helse'}</Tag>
      <Tag>{'Livsstil'}</Tag>
    </TagList>
  </GridExample>
);
