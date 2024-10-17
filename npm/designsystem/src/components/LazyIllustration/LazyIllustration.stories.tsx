import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import LazyIllustration from './';

const meta = {
  title: '@helsenorge/designsystem-react/Components/LazyIllustration',
  component: LazyIllustration,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={LazyIllustration} />,
      description: {
        component: 'LazyIllustration lar deg vise en av flere illustrasjoner i ulike størrelser og farger',
      },
    },
  },
  args: {
    illustrationName: 'Doctor',
  },
  argTypes: {
    illustrationName: {
      control: 'text',
    },
    size: {
      control: 'number',
    },
    color: {
      control: 'select',
      options: ['neutral', 'blueberry', 'cherry'],
    },
    ariaLabel: {
      control: 'text',
    },
  },
} satisfies Meta<typeof LazyIllustration>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    return <LazyIllustration color={args.color} size={args.size} illustrationName={args.illustrationName} />;
  },
};
