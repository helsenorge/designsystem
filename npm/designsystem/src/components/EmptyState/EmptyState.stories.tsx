import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import EmptyState from './EmptyState';
import Docs from '../../docs';
import AnchorLink from '../AnchorLink';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/EmptyState',
  component: EmptyState,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={EmptyState} />,
      description: {
        component:
          'Denne komponenten benyttes på sider der det ikke finnes innhold å vise, og man ønsker å gi en tilpasset beskjed til brukeren om dette avhengig av hvor i løsningen de befinner seg. Illustrasjonen «Ingen hjemme» og oppsettet på mørk bakgrunn sørger for at brukeren kjenner den igjen uavhengig av hvilken kontekst den står i.',
      },
    },
  },
  args: {
    children: 'Du har ingen rekvirerte reiser',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <EmptyState {...args} />,
};

export const WithAnchorLink: Story = {
  render: args => (
    <EmptyState {...args}>
      {'Du har ingen verktøy enda. Gå til '}
      <AnchorLink href="/">{'Alle verktøy'}</AnchorLink>
      {' for å finne verktøy.'}
    </EmptyState>
  ),
};
