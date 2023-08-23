import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import HelpPanel from './HelpPanel';

export default {
  title: 'Components/HelpPanel',
  component: HelpPanel,
  parameters: {
    docs: {
      description: {
        component: 'HelpPanel er et komponent som skal innholde hjelpetekst til brukeren.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis neque sed accumsan pellentesque. Pellentesque eu ex finibus lectus congue hendrerit quis vel justo.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
  },
} as ComponentMeta<typeof HelpPanel>;

export const Default: ComponentStory<typeof HelpPanel> = args => (
  <HelpPanel {...args} title="Test tittel">
    {args.children}
  </HelpPanel>
);
export const WithoutTitle: ComponentStory<typeof HelpPanel> = args => <HelpPanel {...args}>{args.children}</HelpPanel>;
