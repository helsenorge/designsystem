import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { allPaletteNames } from '../../../.storybook/knobs';

import Logo from './Logo';
import GridExample from '../GridExample';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    color: {
      control: 'select',
      options: allPaletteNames,
      defaultValue: 'blueberry',
    },
    size: {
      control: 'number',
      defaultValue: 300,
    },
    byline: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Logo>;

export const Default: ComponentStory<typeof Logo> = (args: any) => (
  <GridExample>
    <Logo {...args} />
  </GridExample>
);

export const Byline: ComponentStory<typeof Logo> = (args: any) => (
  <GridExample>
    <Logo {...args} byline />
  </GridExample>
);
