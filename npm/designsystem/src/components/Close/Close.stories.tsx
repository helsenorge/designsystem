import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Close from './Close';
import GridExample from '../GridExample';

export default {
  title: 'Components/Close',
  component: Close,
  argTypes: {
    testId: {
      control: 'text',
      defaultValue: '',
    },
    ariaLabel: {
      control: 'text',
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof Close>;

export const Default: ComponentStory<typeof Close> = (args: any) => (
  <GridExample>
    <Close {...args} onClick={action('button-click')} />
  </GridExample>
);
