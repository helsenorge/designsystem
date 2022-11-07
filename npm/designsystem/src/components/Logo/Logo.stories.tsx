import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { allPaletteNames } from '../../../.storybook/knobs';

import Logo from './Logo';
import GridExample from '../GridExample';

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    docs: {
      description: {
        component: 'Et komponent som lar deg vise logoen til helsenorge i ulike varianter',
      },
    },
  },
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

export const Sizes: ComponentStory<typeof Logo> = (args: any) => (
  <GridExample>
    <Logo {...args} size={100} />
    <Logo {...args} size={200} />
    <Logo {...args} size={300} />
  </GridExample>
);

export const Colors: ComponentStory<typeof Logo> = (args: any) => (
  <GridExample>
    <Logo {...args} color={'blueberry'} />
    <Logo {...args} color={'banana'} />
    <Logo {...args} color={'black'} />
    <Logo {...args} color={'cherry'} />
    <Logo {...args} color={'kiwi'} />
    <Logo {...args} color={'neutral'} />
    <Logo {...args} color={'plum'} />
    <Logo {...args} color={'white'} />
  </GridExample>
);

export const Byline: ComponentStory<typeof Logo> = (args: any) => (
  <GridExample>
    <Logo {...args} byline />
  </GridExample>
);
