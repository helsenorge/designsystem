import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './Title';
import { allTitleTags, allTitleAppearances } from '../../../.storybook/knobs';
import GridExample from '../GridExample';

export default {
  title: '@helsenorge∕designsystem-react/Components/Title',
  component: Title,
  parameters: {
    docs: {
      description: {
        component: 'Som innbygger vil jeg kunne vise titler i ulike størrelser og html markup.',
      },
    },
  },
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
  <GridExample>
    <Title {...args}>{args.children}</Title>
  </GridExample>
);

export const AllAppearances: ComponentStory<typeof Title> = (args: any) => (
  <GridExample>
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
  </GridExample>
);
