import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Title from './Title';
import { allTitleTags, allTitleAppearances } from '../../../.storybook/knobs';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Title',
  component: Title,
  tags: ['new'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs
          component={Title}
          supernovaLink="https://frankenstein.helsenorge.design/latest/fundament/typografi/font-og-stiler-jym9t8zW#section-stil-oversikt-17"
        />
      ),
      description: {
        component: 'Som innbygger vil jeg kunne vise titler i ulike størrelser og html markup.',
      },
    },
  },
  args: {
    children: 'Title',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    htmlMarkup: {
      control: 'select',
      options: allTitleTags,
    },
    margin: {
      control: 'number',
    },
    appearance: {
      control: 'select',
      options: allTitleAppearances,
    },
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Title {...args} />,
};

export const AllAppearances: Story = {
  render: args => (
    <>
      <Title {...args} appearance="titleFeature">
        {args.children} {'(feature)'}
      </Title>
      <Title {...args} appearance="title1">
        {args.children} {'(title1)'}
      </Title>
      <Title {...args} appearance="title2">
        {args.children} {'(title2)'}
      </Title>
      <Title {...args} appearance="title3">
        {args.children} {'(title3)'}
      </Title>
      <Title {...args} appearance="title4">
        {args.children} {'(title4)'}
      </Title>
      <Title {...args} appearance="title5">
        {args.children} {'(title5)'}
      </Title>
      <Title {...args} appearance="title6">
        {args.children} {'(title6)'}
      </Title>
    </>
  ),
};
