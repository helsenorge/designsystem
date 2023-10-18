import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import LazyIcon from './LazyIcon';
import { IconSize } from '../../constants';
import { shortLoremText } from '../../utils/loremtext';
import GridExample from '../GridExample';

export default {
  title: 'Components/LazyIcon',
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
  return (
    <GridExample>
      <LazyIcon {...args} size={IconSize.XLarge} />
      <p>{shortLoremText}</p>
    </GridExample>
  );
};
