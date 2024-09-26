import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Illustration from './Illustration';
import HighlightPanel from '../HighlightPanel';
import Doctor from '../Illustrations/Doctor';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Illustration',
  component: Illustration,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Illustration} />,
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
    <HighlightPanel color={args.color} size={'fluid'}>
      <Illustration {...args} />
    </HighlightPanel>
  ),
};
