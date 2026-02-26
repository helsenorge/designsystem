import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Illustration from './Illustration';
import Doctor from '../Illustrations/Doctor';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Illustration',
  component: Illustration,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={Illustration} supernovaLink="https://frankenstein.helsenorge.design/latest/fundament/illustrasjoner-jY2uXwoj" />
      ),
      description: {
        component: 'Illustration lar deg vise en av flere illustrasjoner i ulike størrelser og farger',
      },
    },
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
  render: args => <Illustration {...args} />,
};
