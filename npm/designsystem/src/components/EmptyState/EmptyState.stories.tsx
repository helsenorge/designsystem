import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import EmptyState from './EmptyState';
import AnchorLink from '../AnchorLink';

const meta = {
  title: '@helsenorge/designsystem-react/Components/EmptyState',
  component: EmptyState,
  tags: ['breaking'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={EmptyState} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/emptystate/bruk-GKPb2vaj" />
      ),
      description: {
        component:
          'Denne komponenten benyttes på sider der det ikke finnes innhold å vise, og man ønsker å gi en tilpasset beskjed til brukeren om dette avhengig av hvor i løsningen de befinner seg. Illustrasjonen «Ingen hjemme» og oppsettet på mørk bakgrunn sørger for at brukeren kjenner den igjen uavhengig av hvilken kontekst den står i.',
      },
    },
  },
  args: {
    title: 'Beskjed til bruker',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    onColor: {
      control: 'select',
      options: ['onwhite', 'onblueberry', 'oncherry'],
    },
    size: {
      control: 'select',
      options: ['normal', 'compact'],
    },
    additionalText: {
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
    <EmptyState
      {...args}
      title={
        <div>
          {'Du har ingen verktøy enda. Gå til '}
          <AnchorLink href={'https://www.helsenorge.no'} target="_blank">
            {'Alle verktøy'}
          </AnchorLink>
          {' for å finne verktøy.'}
        </div>
      }
    />
  ),
};

export const WithTitle: Story = {
  render: args => (
    <EmptyState
      {...args}
      titleHtmlMarkup="h3"
      title={'Du har ingen timeavtaler'}
      additionalText={
        'Tilleggstekst - ved bruk forsøk å begrense lengde. Og dersom det er mye tekst så skal illustrasjonen legge seg på toppen. Selv om teksten går langt nedover siden.'
      }
    />
  ),
};
