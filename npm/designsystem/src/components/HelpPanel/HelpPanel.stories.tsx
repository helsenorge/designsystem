import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import HelpPanel from './HelpPanel';
import HandWaving from '../Icons/HandWaving';

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
    htmlMarkup: {
      control: 'select',
      options: ['div', 'nav', 'section', 'article', 'span'],
      defaultValue: 'div',
    },
  },
} as ComponentMeta<typeof HelpPanel>;

export const Default: ComponentStory<typeof HelpPanel> = args => (
  <HelpPanel {...args} title="Test tittel" svgIcon={HandWaving}>
    {args.children}
  </HelpPanel>
);
export const WithoutTitle: ComponentStory<typeof HelpPanel> = args => (
  <HelpPanel {...args} svgIcon={HandWaving}>
    {args.children}
  </HelpPanel>
);
