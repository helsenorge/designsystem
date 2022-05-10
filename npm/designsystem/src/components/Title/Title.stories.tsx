import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './Title';
import { allTitleTags, allTitleAppearances } from '../../../.storybook/knobs';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Title',
    },
    htmlMarkup: {
      control: 'select',
      options: allTitleTags,
      defaultValue: 'h1',
    },
    margin: {
      control: 'number',
      defaultValue: 0,
    },
    appearance: {
      control: 'select',
      options: allTitleAppearances,
      defaultValue: 'title1',
    },
  },
} as ComponentMeta<typeof Title>;

export const Default: ComponentStory<typeof Title> = (args: any) => (
  <div style={{ width: '20rem' }}>
    <Title {...args}>{args.children}</Title>
  </div>
);

export const AllAppearances: ComponentStory<typeof Title> = (args: any) => (
  <div>
    <Title {...args} appearance="titleFeature">
      {`${args.children} (feature)`}
    </Title>
    <Title {...args} appearance="title1">
      {`${args.children} (title1)`}
    </Title>
    <Title {...args} appearance="title2">
      {`${args.children} (title2)`}
    </Title>
    <Title {...args} appearance="title3">
      {`${args.children} (title3)`}
    </Title>
    <Title {...args} appearance="title4">
      {`${args.children} (title4)`}
    </Title>
    <Title {...args} appearance="title5">
      {`${args.children} (title5)`}
    </Title>
  </div>
);
