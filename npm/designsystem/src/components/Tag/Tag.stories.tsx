import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import { TagSize, TagVariant } from './constants';
import Tag from './Tag';
import LawBook from '../Icons/LawBook';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={Tag} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/tag/bruk-KZSQu5iW" />
      ),
      description: {
        component: 'Tags brukes til å framheve og tydeliggjøre en kategori eller tjenestetype.',
      },
    },
  },
  args: {
    children: 'Tekst',
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
