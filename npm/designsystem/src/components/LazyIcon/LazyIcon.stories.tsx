import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import LazyIcon from './LazyIcon';
import { IconSize } from '../../constants';
import { useHover } from '../../hooks/useHover';
import { shortLoremText } from '../../utils/loremtext';
import GridExample from '../GridExample';

export default {
  title: '@helsenorge∕designsystem-react/Components/LazyIcon',
  component: LazyIcon,
  parameters: {
    docs: {
      description: {
        component: 'LazyIcon lar deg vise et av flere ikoner i ulike størrelser og farger',
      },
    },
  },
  argTypes: {
    iconName: {
      control: 'text',
      defaultValue: 'Hospital',
    },
  },
} as ComponentMeta<typeof LazyIcon>;

export const Default: ComponentStory<typeof LazyIcon> = (args: any) => {
  const { hoverRef, isHovered } = useHover<HTMLDivElement>();
  return (
    <GridExample>
      <div ref={hoverRef}>
        <LazyIcon {...args} size={IconSize.XLarge} isHovered={isHovered} />
      </div>
      <p>{shortLoremText}</p>
    </GridExample>
  );
};
