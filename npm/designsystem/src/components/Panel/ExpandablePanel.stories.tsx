import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Panel from './Panel';
import { PanelVariant, PanelLayout, PanelStacking, PanelStatus } from './PanelBase';
import { PanelDocs } from './Paneldocs';
import Button from '../Button';
import ExpandablePanel from './ExpandablePanel';
import PanelTitle from './PanelTitle/PanelTitle';
import Title from '../Title/Title';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Panel/ExpandablePanel',
  component: ExpandablePanel,
  tags: ['new'],
  parameters: {
    docs: {
      description: {
        component:
          'ExpandablePanel benyttes for å vise formaterte data på et avgrenset område, og gjør det scanbart og tilgjengelig for innbygger. Denne varianten av Panel skal brukes når man har mer innhold man vil kunne åpne uten å gå til en ny side.',
      },
      page: (): React.JSX.Element => <PanelDocs />,
    },
  },
  args: {},
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(PanelVariant),
    },
    color: {
      control: 'select',
      options: ['neutral', 'white'],
    },
    layout: {
      control: 'select',
      options: Object.values(PanelLayout),
    },
    stacking: {
      control: 'select',
      options: Object.values(PanelStacking),
    },
    status: {
      control: 'select',
      options: Object.values(PanelStatus),
    },
  },
} satisfies Meta<typeof Panel>;

export default meta;

type Story = StoryObj<typeof meta>;

const PreviewContainer = ({ children }): JSX.Element => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#BD10E040', border: '1px #BD10E0 dotted', color: '#BD10E0' }}>
      {children}
    </div>
  );
};

export const Default: Story = {
  args: {
    layout: PanelLayout.vertical,
  },
  render: args => {
    return (
      <ExpandablePanel {...args}>
        <ExpandablePanel.PreContainer>
          <PanelTitle title="Denne har en knapp og skjult innhold" />
        </ExpandablePanel.PreContainer>
        <ExpandablePanel.A>
          <span>{'Noe innhold'}</span>
        </ExpandablePanel.A>
        <ExpandablePanel.ExpandedContent>
          <Title appearance="title3">{'Dette er skjult'}</Title>
          <p>{'Men når man åpner expanderen vil det vises'}</p>
        </ExpandablePanel.ExpandedContent>
      </ExpandablePanel>
    );
  },
};

export const LangExpandedContent: Story = {
  args: {
    layout: PanelLayout.vertical,
  },
  render: args => {
    const [expanderOpen, setExpanderOpen] = React.useState(false);
    return (
      <>
        <ExpandablePanel {...args}>
          <ExpandablePanel.PreContainer>
            <PreviewContainer>{'Precontainer'}</PreviewContainer>
          </ExpandablePanel.PreContainer>
          <ExpandablePanel.A>
            <PreviewContainer>{'Content A'}</PreviewContainer>
          </ExpandablePanel.A>
          <ExpandablePanel.B>
            <PreviewContainer>{'Content B'}</PreviewContainer>
          </ExpandablePanel.B>
          <ExpandablePanel.C>
            <PreviewContainer>{'Content C'}</PreviewContainer>
          </ExpandablePanel.C>
        </ExpandablePanel>
        <br />
        <ExpandablePanel {...args}>
          <ExpandablePanel.PreContainer>
            <PreviewContainer>{'Precontainer'}</PreviewContainer>
          </ExpandablePanel.PreContainer>
          <ExpandablePanel.A>
            <PreviewContainer>{'Content A'}</PreviewContainer>
          </ExpandablePanel.A>
          <ExpandablePanel.B>
            <PreviewContainer>{'Content B'}</PreviewContainer>
          </ExpandablePanel.B>
          <ExpandablePanel.C>
            <PreviewContainer>{'Content C'}</PreviewContainer>
          </ExpandablePanel.C>
        </ExpandablePanel>
        <br />
        <ExpandablePanel {...args}>
          <ExpandablePanel.PreContainer>
            <PanelTitle title="Denne har en knapp og skjult innhold" />
          </ExpandablePanel.PreContainer>
          <ExpandablePanel.A>
            <span>{'Noe innhold'}</span>
          </ExpandablePanel.A>
          <ExpandablePanel.ExpandedContent>
            <div>
              <Title appearance="title4">{'Fullmakt til å bruke tjenester på Helsenorge'}</Title>
              <p>
                {
                  'Den som går fullmakt, kan bruke tjenester på Helsenorge på vegne av personen som gir fullmakt. Det er ikke mulig å gi fullmakt til mer enn man selv har tilgang til.'
                }
              </p>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Opprettet: '}</span>
                <span>{'11.03.2024'}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Gyldig fra: '}</span>
                <span>{'11.03.2024'}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Gyldig til: '}</span>
                <span>{'Ubegrenset'}</span>
              </div>

              <Title appearance="title4">{'Fullmakt til å bruke tjenester på Helsenorge'}</Title>
              <p>
                {
                  'Den som går fullmakt, kan bruke tjenester på Helsenorge på vegne av personen som gir fullmakt. Det er ikke mulig å gi fullmakt til mer enn man selv har tilgang til.'
                }
              </p>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Opprettet: '}</span>
                <span>{'11.03.2024'}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Gyldig fra: '}</span>
                <span>{'11.03.2024'}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Gyldig til: '}</span>
                <span>{'Ubegrenset'}</span>
              </div>

              <Title appearance="title4">{'Fullmakt til å bruke tjenester på Helsenorge'}</Title>
              <p>
                {
                  'Den som går fullmakt, kan bruke tjenester på Helsenorge på vegne av personen som gir fullmakt. Det er ikke mulig å gi fullmakt til mer enn man selv har tilgang til.'
                }
              </p>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Opprettet: '}</span>
                <span>{'11.03.2024'}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Gyldig fra: '}</span>
                <span>{'11.03.2024'}</span>
              </div>
              <div>
                <span style={{ fontWeight: 'bold' }}>{'Gyldig til: '}</span>
                <span>{'Ubegrenset'}</span>
              </div>
            </div>
          </ExpandablePanel.ExpandedContent>
        </ExpandablePanel>
        <br />

        <Panel {...args}>
          <Panel.PreContainer>
            <PreviewContainer>{'Precontainer'}</PreviewContainer>
          </Panel.PreContainer>
          <Panel.A>
            <PreviewContainer>{'Content A'}</PreviewContainer>
          </Panel.A>
          <Panel.B>
            <PreviewContainer>{'Content B'}</PreviewContainer>
          </Panel.B>
          <Panel.C>
            <PreviewContainer>{'Content C'}</PreviewContainer>
          </Panel.C>
        </Panel>
        <br />
        <Panel {...args}>
          <Panel.PreContainer>
            <PreviewContainer>{'Precontainer'}</PreviewContainer>
          </Panel.PreContainer>
          <Panel.A>
            <PreviewContainer>{'Content A'}</PreviewContainer>
          </Panel.A>
          <Panel.B>
            <PreviewContainer>{'Content B'}</PreviewContainer>
          </Panel.B>
          <Panel.C>
            <PreviewContainer>{'Content C'}</PreviewContainer>
          </Panel.C>
        </Panel>
        <br />
        <br />
        <ExpandablePanel {...args} expanded={expanderOpen} showExpandButton={false}>
          <ExpandablePanel.PreContainer>
            <PanelTitle title="Denne har en custom knapp som åpner expandedcontent" />
          </ExpandablePanel.PreContainer>
          <ExpandablePanel.A>
            <span>{'Noe innhold'}</span>
            <br />
            <Button onClick={() => setExpanderOpen(!expanderOpen)}>{expanderOpen ? 'Skjul detaljer' : 'Se detaljer'}</Button>
          </ExpandablePanel.A>
          <ExpandablePanel.ExpandedContent>
            <Title appearance="title3">{'Dette er skjult'}</Title>
            <p>{'Men når man åpner expanderen vil det vises'}</p>
          </ExpandablePanel.ExpandedContent>
        </ExpandablePanel>
      </>
    );
  },
};
