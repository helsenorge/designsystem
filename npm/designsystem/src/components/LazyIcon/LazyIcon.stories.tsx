import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import LazyIcon from './LazyIcon';
import { IconSize } from '../../constants';
import { useHover } from '../../hooks/useHover';

const meta = {
  title: '@helsenorge/designsystem-react/Components/LazyIcon',
  component: LazyIcon,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={LazyIcon} />,
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
      <div ref={hoverRef}>
        <LazyIcon {...args} isHovered={isHovered} />
      </div>
    );
  },
};
