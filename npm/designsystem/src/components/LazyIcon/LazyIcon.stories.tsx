import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import LazyIcon from './LazyIcon';
import { IconSize } from '../../constants';
import { useHover } from '../../hooks/useHover';
import { shortLoremText } from '../../utils/loremtext';
import GridExample from '../GridExample';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/LazyIcon',
  component: LazyIcon,
  parameters: {
    docs: {
      description: {
        component: 'LazyIcon lar deg vise et av flere ikoner i ulike størrelser og farger',
      },
    },
  },
  args: {
    iconName: 'Hospital',
  },
  argTypes: {
    iconName: {
      control: 'text',
    },
  },
} satisfies Meta<typeof LazyIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: IconSize.XLarge,
  },
  render: args => {
    const { hoverRef, isHovered } = useHover<HTMLDivElement>();
    return (
      <GridExample>
        <div ref={hoverRef}>
          <LazyIcon {...args} isHovered={isHovered} />
        </div>
        <p>{shortLoremText}</p>
      </GridExample>
    );
  },
};
