import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Tag, { TagSize, TagVariant } from './Tag';
import Docs from '../../docs';
import LawBook from '../Icons/LawBook';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Tag} />,
      description: {
        component: 'Tags brukes til å framheve og tydeliggjøre en kategori eller tjenestetype.',
      },
    },
  },
  args: {
    children: 'Tekst',
    size: TagSize.medium,
    color: 'blueberry',
    variant: TagVariant.normal,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: TagSize,
    },
    color: {
      control: 'select',
      options: ['blueberry', 'neutral', 'cherry', 'banana', 'kiwi', 'plum'],
    },
    variant: {
      control: 'select',
      options: TagVariant,
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Tag {...args} />,
};

export const WithIcon: Story = {
  args: {
    svgIcon: LawBook,
  },
  render: args => <Tag {...args} />,
};
