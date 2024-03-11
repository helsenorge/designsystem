import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import Tag, { TagAction, TagSize, TagVariant } from './Tag';
import GridExample from '../GridExample';
import LawBook from '../Icons/LawBook';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne se metadata for innhold i grensenittet på Helsenorge slik at jeg raskt kan scanne og differensiere flere typer innhold.',
      },
    },
  },
  args: {
    children: 'Tekst',
    size: TagSize.medium,
    color: 'blueberry',
    variant: TagVariant.normal,
    action: TagAction.remove,
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
    action: {
      control: 'select',
      options: TagAction,
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <GridExample>
      <Tag {...args} />
    </GridExample>
  ),
};

export const WithIcon: Story = {
  args: {
    svgIcon: LawBook,
  },
  render: args => (
    <GridExample>
      <Tag {...args} />
    </GridExample>
  ),
};

export const Action: Story = {
  args: {
    svgIcon: LawBook,
    onClick: action('Tag clicked'),
  },
  render: args => (
    <GridExample>
      <Tag {...args} />
    </GridExample>
  ),
};
