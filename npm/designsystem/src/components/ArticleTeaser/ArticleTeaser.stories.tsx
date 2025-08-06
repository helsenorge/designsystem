import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { useArgs } from 'storybook/internal/preview-api';

import ArticleTeaser, { ArticleTeaserProps } from './ArticleTeaser';
import Title from '../Title';

const meta = {
  title: '@helsenorge/designsystem-react/Components/ArticleTeaser',
  component: ArticleTeaser,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av ArticleTeaser',
      },
      page: (): React.JSX.Element => <Docs component={ArticleTeaser} />,
    },
  },
  args: {
    contentId: 'contentId',
  },
  argTypes: {
    heightCollapsed: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof ArticleTeaser>;

export default meta;

type Story = StoryObj<typeof meta>;

const DummyContent = (props: { expanded: boolean }) => (
  <section>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Title htmlMarkup="h2" appearance="title4">
        <span style={{ color: '#126F87' }}>{'Hendelse 1'}</span>
      </Title>
      <span>{'Uke 7-9'}</span>
    </div>
    <Title htmlMarkup="h3" appearance="title2">
      {'Hva skjer med mor?'}
    </Title>
    <p id="contentId" aria-hidden={props.expanded ? false : true}>
      {`I de første ukene av svangerskapet er det få som kjenner noen tegn på at de er gravide. Uke fire er vanligvis tidspunktet for en ny menstruasjon. Dersom denne uteblir, eller du har en unormalt liten blødning, kan det være et tegn på at du er gravid.
        Enkelte kan føle forandringer i kroppen, men de fleste merker ingen endringer så tidlig i svangerskapet. I uke fem opplever mange tegn på graviditet. Det som er vanlig å kjenne på er:
        Behov for å tisse ofte, Ømme, spente og større bryster, Verking i korsryggen, Lett trykk eller spreng i underlivet
        Mange vil også oppleve trøtthet og kvalme. Kvalmen gir seg hos de fleste omkring svangerskapsuke 12-14.`}
    </p>
  </section>
);

export const Default: Story = {
  args: {},
  render: args => {
    const [{ expanded }, setExpanded] = useArgs<ArticleTeaserProps>();

    const onExpand = () => {
      setExpanded({ expanded: !expanded });
    };

    return (
      <ArticleTeaser {...args} onExpand={onExpand} expanded={expanded}>
        <DummyContent expanded={expanded} />
      </ArticleTeaser>
    );
  },
};
