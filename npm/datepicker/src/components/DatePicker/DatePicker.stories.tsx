import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import GridExample from '@helsenorge/designsystem-react/components/GridExample';

import DatePicker from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av DatePicker',
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof DatePicker>;

export const Default: ComponentStory<typeof DatePicker> = (args: any) => (
  <GridExample>
    <DatePicker {...args} />
  </GridExample>
);
