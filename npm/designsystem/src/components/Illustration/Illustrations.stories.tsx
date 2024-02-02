import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import HighlightBox from '../HighlightBox';
import { IllustrationList } from '../Illustrations/IllustrationNames';
import LazyIllustration from '../LazyIllustration';
import Spacer from '../Spacer';
import Title from '../Title';

export default {
  title: '@helsenorge∕designsystem-react/Components/Illustrations',
  component: LazyIllustration,
  parameters: {
    docs: {
      description: {
        component: 'LazyIllustration lar deg vise et av flere ikoner i ulike størrelser og farger',
      },
    },
  },
  argTypes: {
    illustrationName: {
      control: 'text',
      defaultValue: '',
    },
    size: {
      control: 'number',
      defaultValue: 200,
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
  const filtered = IllustrationList.filter(x =>
    args.illustrationName ? x.toLowerCase().includes(args.illustrationName.toLowerCase()) : true
  );

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {filtered.map(illustrationName => (
        <div key={illustrationName}>
          <Title htmlMarkup="h2" appearance="title5">
            {illustrationName}
          </Title>
          <Spacer />
          <HighlightBox color={args.color} size={'fluid'}>
            <LazyIllustration color={args.color} size={args.size} illustrationName={illustrationName} />
          </HighlightBox>
        </div>
      ))}
    </div>
  );
};
