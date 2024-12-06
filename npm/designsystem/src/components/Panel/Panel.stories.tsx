import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Panel, { PanelVariant, PanelLayout, PanelStacking, PanelStatus } from './Panel';
import { PanelDocs } from './Paneldocs';
import Badge from '../Badge';
import Button from '../Button';
import Expander from '../Expander/Expander';
import Icon, { IconSize } from '../Icon';
import ArrowRight from '../Icons/ArrowRight';
import PdfFile from '../Icons/PdfFile';
import StatusDot from '../StatusDot';
import Title from '../Title/Title';
import Toggle from '../Toggle';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Panel',
  component: Panel,
  parameters: {
    docs: {
      description: {
        component: 'Panel benyttes for å vise formaterte data på et avgrenset område, og gjør det scanbart og tilgjengelig for innbygger.',
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
  args: {},
  render: args => (
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
  ),
};

export const WithHeader: Story = {
  args: {},
  render: args => (
    <Panel {...args}>
      <Panel.PreContainer>
        <div
          style={{
            display: 'grid',
            gridTemplateAreas: `'. statusdot statusdot' 'icon title badge'`,
            gridTemplateColumns: '64px 70px auto',
          }}
        >
          <div style={{ gridArea: 'statusdot' }}>
            <StatusDot text={'Label'} />
          </div>
          <div style={{ gridArea: 'icon' }}>
            <Icon svgIcon={PdfFile} size={IconSize.XSmall} />
          </div>
          <div style={{ gridArea: 'title' }}>
            <Title appearance="title3">{'Tittel'}</Title>
          </div>
          <div style={{ gridArea: 'badge' }}>
            <Badge>{'Ny'}</Badge>
          </div>
        </div>
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
  ),
};

export const OldPanelDefault: Story = {
  args: {
    variant: PanelVariant.fill,
    color: 'neutral',
    layout: PanelLayout.vertical,
  },
  render: args => {
    const [expanderOpen, setExpanderOpen] = React.useState(false);
    return (
      <Panel {...args}>
        <Panel.PreContainer>
          <Title appearance="title3">{'Medisinsk fødselsregister (MFR)'}</Title>
        </Panel.PreContainer>
        <Panel.A>
          <span>{'Noe innhold'}</span>
        </Panel.A>
        <Panel.B>
          <Expander
            title={expanderOpen ? 'Skjul detaljer' : 'Se detaljer'}
            onExpand={setExpanderOpen}
            expanded={expanderOpen}
            testId="expander"
          >
            <div>
              <Title appearance="title2">{'E-resept'}</Title>
              <p style={{ whiteSpace: 'pre-line' }}>
                {`
              Legemiddel: Aerius Mikst 0,5 mg/ml
        
              Dosering: 1 tablett daglig
        
              Virkestoff: Cetrizin
              ATC-kode:R06AX27
              Pakningsstørrelse: 120ml
        
        
              Antall: 1
              Forskrevet av: Diana Dips, Testsykehuset HF
              Forskrevet dato: 27.09.2020
              Gyldig til: 20.09.2021
              Reiterasjoner: 3 (Det betyr at du kan hente ut forskrevet mengde 4 ganger)
              Antall utlevering: 1 (Se utleveringer på denne resepten)
              Refusjonshjemmel: §5-14 §2 (blå resept)
              Resepten er hentet fra: Reseptformidleren`}
              </p>
            </div>
          </Expander>
        </Panel.B>
      </Panel>
    );
  },
};

export const WithContent: Story = {
  args: {},
  render: args => (
    <Panel {...args}>
      <Panel.PreContainer>
        <div
          style={{
            display: 'grid',
            gridTemplateAreas: `'. statusdot statusdot' 'icon title badge'`,
            gridTemplateColumns: '64px 70px auto',
          }}
        >
          <div style={{ gridArea: 'statusdot' }}>
            <StatusDot text={'Label'} />
          </div>
          <div style={{ gridArea: 'icon' }}>
            <Icon svgIcon={PdfFile} size={IconSize.XSmall} />
          </div>
          <div style={{ gridArea: 'title' }}>
            <Title appearance="title3">{'Tittel'}</Title>
          </div>
          <div style={{ gridArea: 'badge' }}>
            <Badge>{'Ny'}</Badge>
          </div>
        </div>
      </Panel.PreContainer>
      <Panel.A>
        <p>
          {
            'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
          }
        </p>
        <Button variant="borderless">
          {'Call to action'}
          <Icon svgIcon={ArrowRight} />
        </Button>
      </Panel.A>
      <Panel.B>
        <p>
          {
            'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
          }
        </p>
        <Button variant="borderless">
          {'Call to action'}
          <Icon svgIcon={ArrowRight} />
        </Button>
      </Panel.B>
      <Panel.C>
        <p>
          {
            'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
          }
        </p>
        <Button variant="borderless">
          {'Call to action'}
          <Icon svgIcon={ArrowRight} />
        </Button>
      </Panel.C>
    </Panel>
  ),
};

export const TestPanel: Story = {
  args: {},
  render: args => {
    const [showA, setShowA] = React.useState(true);
    const [showB, setShowB] = React.useState(true);
    const [showC, setShowC] = React.useState(true);

    return (
      <div>
        <div>
          <Toggle {...args} onColor={'onwhite'} checked={showA} onChange={() => setShowA(!showA)} label={[{ text: 'Vis content A' }]} />
          <Toggle {...args} onColor={'onwhite'} checked={showB} onChange={() => setShowB(!showB)} label={[{ text: 'Vis content B' }]} />
          <Toggle {...args} onColor={'onwhite'} checked={showC} onChange={() => setShowC(!showC)} label={[{ text: 'Vis content C' }]} />
        </div>
        <Panel {...args}>
          <Panel.PreContainer>
            <div
              style={{
                display: 'grid',
                gridTemplateAreas: `'. statusdot statusdot' 'icon title badge'`,
                gridTemplateColumns: '64px 70px auto',
              }}
            >
              <div style={{ gridArea: 'statusdot' }}>
                <StatusDot text={'Label'} />
              </div>
              <div style={{ gridArea: 'icon' }}>
                <Icon svgIcon={PdfFile} size={IconSize.XSmall} />
              </div>
              <div style={{ gridArea: 'title' }}>
                <Title appearance="title3">{'Tittel'}</Title>
              </div>
              <div style={{ gridArea: 'badge' }}>
                <Badge>{'Ny'}</Badge>
              </div>
            </div>
          </Panel.PreContainer>
          {showA && (
            <Panel.A>
              <PreviewContainer>{'Content A'}</PreviewContainer>
            </Panel.A>
          )}
          {showB && (
            <Panel.B>
              <PreviewContainer>{'Content B'}</PreviewContainer>
            </Panel.B>
          )}
          {showC && (
            <Panel.C>
              <PreviewContainer>{'Content C'}</PreviewContainer>
            </Panel.C>
          )}
        </Panel>
      </div>
    );
  },
};
