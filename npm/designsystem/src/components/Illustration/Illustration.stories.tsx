import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Illustration from './Illustration';
import GridExample from '../GridExample';
import HighlightBox from '../HighlightBox';
import Doctor from '../Illustrations/Doctor';

export default {
  title: '@helsenorge∕designsystem-react/Components/Illustration',
  component: Illustration,
  parameters: {
    docs: {
      description: {
        component: 'Illustration lar deg vise en av flere illustrasjoner i ulike størrelser og farger',
      },
    },
  },
  argTypes: {
    size: {
      control: 'number',
      defaultValue: 512,
    },
    color: {
      control: 'select',
      options: ['neutral', 'blueberry', 'cherry'],
      defaultValue: 'neutral',
    },
    ariaLabel: {
      control: 'text',
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof Illustration>;

export const Default: ComponentStory<typeof Illustration> = (args: any) => (
  <GridExample>
    <HighlightBox color={args.color} size={'fluid'}>
      <Illustration {...args} illustration={Doctor} />
    </HighlightBox>
  </GridExample>
);
