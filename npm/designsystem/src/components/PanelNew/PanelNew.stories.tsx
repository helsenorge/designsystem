import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import PanelNew, { PanelNewVariant, PanelNewLayout, PanelNewStacking } from './PanelNew';
import Badge from '../Badge';
import Expander from '../Expander/Expander';
import Icon, { IconSize } from '../Icon';
import PdfFile from '../Icons/PdfFile';
import StatusDot from '../StatusDot';
import Title from '../Title/Title';

const meta = {
  title: '@helsenorge/designsystem-react/Components/PanelNew',
  component: PanelNew,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av PanelNew',
      },
      page: (): React.JSX.Element => <Docs component={PanelNew} />,
    },
  },
  args: {},
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(PanelNewVariant),
    },
    color: {
      control: 'select',
      options: ['blueberry', 'neutral', 'white'],
    },
    layout: {
      control: 'select',
      options: Object.values(PanelNewLayout),
    },
    stacking: {
      control: 'select',
      options: Object.values(PanelNewStacking),
    },
  },
} satisfies Meta<typeof PanelNew>;

export default meta;

type Story = StoryObj<typeof meta>;

const PreviewContainer = ({ children }) => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#BD10E040', border: '1px #BD10E0 dotted', color: '#BD10E0' }}>
      {children}
    </div>
  );
};

export const Default: Story = {
  args: {},
  render: args => (
    <PanelNew {...args}>
      <PanelNew.PreContainer>
        <PreviewContainer>{'Precontainer'}</PreviewContainer>
      </PanelNew.PreContainer>
      <PanelNew.A>
        <PreviewContainer>{'Content A'}</PreviewContainer>
      </PanelNew.A>
      <PanelNew.B>
        <PreviewContainer>{'Content B'}</PreviewContainer>
      </PanelNew.B>
      <PanelNew.C>
        <PreviewContainer>{'Content C'}</PreviewContainer>
      </PanelNew.C>
    </PanelNew>
  ),
};

export const WithHeader: Story = {
  args: {},
  render: args => (
    <PanelNew {...args}>
      <PanelNew.PreContainer>
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
      </PanelNew.PreContainer>
      <PanelNew.A>
        <PreviewContainer>{'Content A'}</PreviewContainer>
      </PanelNew.A>
      <PanelNew.B>
        <PreviewContainer>{'Content B'}</PreviewContainer>
      </PanelNew.B>
      <PanelNew.C>
        <PreviewContainer>{'Content C'}</PreviewContainer>
      </PanelNew.C>
    </PanelNew>
  ),
};

export const OldPanelDefault: Story = {
  args: {
    variant: PanelNewVariant.fill,
    color: 'neutral',
    layout: PanelNewLayout.vertical,
  },
  render: args => {
    const [expanderOpen, setExpanderOpen] = React.useState(false);
    return (
      <PanelNew {...args}>
        <PanelNew.PreContainer>
          <Title appearance="title3">{'Medisinsk fødselsregister (MFR)'}</Title>
        </PanelNew.PreContainer>
        <PanelNew.A>
          <span>{'Noe innhold'}</span>
        </PanelNew.A>
        <PanelNew.B>
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
        </PanelNew.B>
      </PanelNew>
    );
  },
};
// // <p style={{ whiteSpace: 'pre-line' }}>
// {`
//   Legemiddel: Aerius Mikst 0,5 mg/ml

//   Dosering: 1 tablett daglig

//   Virkestoff: Cetrizin
//   ATC-kode:R06AX27
//   Pakningsstørrelse: 120ml

//   Antall: 1
//   Forskrevet av: Diana Dips, Testsykehuset HF
//   Forskrevet dato: 27.09.2020
//   Gyldig til: 20.09.2021
//   Reiterasjoner: 3 (Det betyr at du kan hente ut forskrevet mengde 4 ganger)
//   Antall utlevering: 1 (Se utleveringer på denne resepten)
//   Refusjonshjemmel: §5-14 §2 (blå resept)
//   Resepten er hentet fra: Reseptformidleren`}
//     </p>
