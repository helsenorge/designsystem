import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Illustration from './Illustration';
import GridExample from '../GridExample';
import HighlightBox from '../HighlightBox';
import Doctor from '../Illustrations/Doctor';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Illustration',
  component: Illustration,
  parameters: {
    docs: {
      description: {
        component: 'Illustration lar deg vise en av flere illustrasjoner i ulike størrelser og farger',
      },
    },
  },
  args: {
    size: 512,
    color: 'neutral',
    ariaLabel: '',
  },
  argTypes: {
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
} satisfies Meta<typeof Illustration>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    illustration: Doctor,
  },
  render: args => (
    <GridExample>
      <HighlightBox color={args.color} size={'fluid'}>
        <Illustration {...args} />
      </HighlightBox>
    </GridExample>
  ),
};
