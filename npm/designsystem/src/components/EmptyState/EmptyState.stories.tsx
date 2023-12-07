import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import EmptyState from './EmptyState';
import AnchorLink from '../AnchorLink';
import GridExample from '../GridExample';

export default {
  title: '@helsenorge∕designsystem-react/Components/EmptyState',
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component:
          'Denne komponenten benyttes på sider der det ikke finnes innhold å vise, og man ønsker å gi en tilpasset beskjed til brukeren om dette avhengig av hvor i løsningen de befinner seg. Illustrasjonen «Ingen hjemme» og oppsettet på mørk bakgrunn sørger for at brukeren kjenner den igjen uavhengig av hvilken kontekst den står i.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Du har ingen rekvirerte reiser',
    },
  },
} as ComponentMeta<typeof EmptyState>;

export const Default: ComponentStory<typeof EmptyState> = (args: any) => (
  <GridExample>
    <EmptyState {...args} />
  </GridExample>
);

export const WithAnchorLink: ComponentStory<typeof EmptyState> = (args: any) => (
  <GridExample>
    <EmptyState {...args}>
      {'Du har ingen verktøy enda. Gå til '}
      <AnchorLink href="/">{'Alle verktøy'}</AnchorLink>
      {' for å finne verktøy.'}
    </EmptyState>
  </GridExample>
);
