import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { shortLoremText } from '../../utils/loremtext';
import GridExample from '../GridExample';
import HighlightBox from '../HighlightBox';

import LazyIllustration from './';

export default {
  title: '@helsenorge∕designsystem-react/Components/LazyIllustration',
  component: LazyIllustration,
  parameters: {
    docs: {
      description: {
        component: 'LazyIllustration lar deg vise en av flere illustrasjoner i ulike størrelser og farger',
      },
    },
  },
  argTypes: {
    illustrationName: {
      control: 'text',
      defaultValue: 'Doctor',
    },
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
} as ComponentMeta<typeof LazyIllustration>;

export const Default: ComponentStory<typeof LazyIllustration> = (args: any) => {
  return (
    <GridExample>
      <HighlightBox color={args.color} size={'fluid'}>
        <LazyIllustration color={args.color} size={args.size} illustrationName={args.illustrationName} />
        <p>{shortLoremText}</p>
      </HighlightBox>
    </GridExample>
  );
};
