import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import Panel, { PanelVariant, PanelLayout, PanelStacking, PanelStatus } from './Panel';
import AnchorLink from '../AnchorLink/AnchorLink';
import Badge from '../Badge';
import Button from '../Button';
import Duolist, { DuolistGroup } from '../Duolist';
import Icon, { IconSize } from '../Icon';
import Calendar from '../Icons/Calendar';
import FemaleDoctor from '../Icons/FemaleDoctor';
import PdfFile from '../Icons/PdfFile';
import Referral from '../Icons/Referral';
import TrashCan from '../Icons/TrashCan';
import Watch from '../Icons/Watch';
import StatusDot from '../StatusDot';
import Title from '../Title/Title';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Panel/Eksempler',
  component: Panel,
  parameters: {
    docs: {
      description: {
        component: 'Eksempler på bruk av Panel basert på det som finnes i Helsenorge i dag.',
      },
    },
  },
  args: {
    buttonBottomOnClick: () => action('Clicked CTA'),
  },
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
    scrollProp: {
      control: 'number',
    },
    buttonBottomText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Panel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OldPanelDefault: Story = {
  args: {
    variant: PanelVariant.fill,
    color: 'neutral',
    layout: PanelLayout.vertical,
  },
  render: args => {
    return (
      <Panel {...args} layout={PanelLayout.vertical}>
        <Panel.Title title="Medisinsk fødselsregister (MFR)"></Panel.Title>
        <Panel.A>
          <span>{'Noe innhold'}</span>
        </Panel.A>
        <Panel.B>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Icon svgIcon={Calendar} size={IconSize.XSmall} />
            <span>{'Dato'}</span>
            <Icon svgIcon={Watch} size={IconSize.XSmall} />
            <span>{'Tid'}</span>
          </div>
        </Panel.B>
        <Panel.ExpandedContent>
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
        </Panel.ExpandedContent>
      </Panel>
    );
  },
};

export const MedisinskFødselsregister: Story = {
  args: {},
  render: () => {
    return (
      <Panel layout={PanelLayout.vertical} variant={PanelVariant.outline}>
        <Panel.Title title="Medisinsk fødselsregister (MFR)" />
        <Panel.A>
          <p>
            {
              'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
            }
          </p>
        </Panel.A>
        <Panel.ExpandedContent>
          <span>{'Innhold.'}</span>
        </Panel.ExpandedContent>
      </Panel>
    );
  },
};

export const TimeAvtale: Story = {
  args: {},
  render: () => {
    return (
      <Panel
        layout={PanelLayout.vertical}
        variant={PanelVariant.fill}
        color={'white'}
        status={PanelStatus.new}
        buttonBottomText="Gå til timeavtale"
        buttonBottomOnClick={() => action('Clicked CTA')}
      >
        <Panel.PreContainer>
          <div style={{ display: 'flex', flexFlow: 'column', gap: '8px' }}>
            <StatusDot text="Skjult for barnet" variant="hidden" />
            <StatusDot text="Godkjent" variant="success" />
          </div>
        </Panel.PreContainer>
        <Panel.Title title="Timeavtale" badge={<Badge>{'Ny'}</Badge>} />
        <Panel.A>
          <div>
            <Duolist useCollapsedFromAndBelowBreakpoint="xs">
              <DuolistGroup term={'Oppmøtested'} description={'Ullevål sykehus'} />
              <DuolistGroup term={'Behandler'} description={'Turnuslege Ingunn Thyssen'} />
              <DuolistGroup term={'Timen gjelder'} description={'Vaksine'} />
            </Duolist>
          </div>
        </Panel.A>
      </Panel>
    );
  },
};

export const PasientReiser: Story = {
  args: {},
  render: () => {
    return (
      <Panel status={PanelStatus.draft} layout={PanelLayout.vertical}>
        <Panel.Title title="Søknad som pasient 6. november 2024" statusDot={<StatusDot text="Utkast" variant="draft" />} />
        <Panel.A>
          <span>{'Behandlingssted: Sykehus (Spesialist)'}</span>
        </Panel.A>
        <Panel.B>
          <div>
            <Button variant="borderless" onClick={() => null}>
              <Icon svgIcon={Referral} />
              {'Fortsett søknad'}
            </Button>
            <Button concept="destructive" variant="borderless" onClick={() => null}>
              <Icon svgIcon={TrashCan} />
              {'Slett søknad'}
            </Button>
          </div>
        </Panel.B>
      </Panel>
    );
  },
};

export const Helsekontakter: Story = {
  args: {},
  render: () => {
    return (
      <Panel layout={PanelLayout.vertical}>
        <Panel.Title title={'Benedikte (DDFL) Geiraas'} icon={<Icon svgIcon={FemaleDoctor} />} />
        <Panel.A>
          <p>{'DDFL Ehelse Interntest med Mock'}</p>
        </Panel.A>
        <Panel.ExpandedContent>
          <div>
            <Duolist useCollapsedFromAndBelowBreakpoint="xs">
              <DuolistGroup term={'Din fastlege siden'} description={'1. april 2024'} />
              <DuolistGroup term={'Telefon'} description={'11223344'} />
            </Duolist>
            <AnchorLink href="https://www.helsenorge.no">{'Mer om din fastlege'}</AnchorLink>
          </div>
        </Panel.ExpandedContent>
      </Panel>
    );
  },
};

export const Dokumentliste: Story = {
  args: {},
  render: () => {
    return (
      <Panel layout={PanelLayout.horizontal} variant={PanelVariant.outline}>
        <Panel.Title title={'Luftveisplager (Egenkartlegging)'} icon={<Icon svgIcon={PdfFile} />} />
        <Panel.A>
          <p>{'Henvendelse, arkivert 04.12.2024'}</p>
        </Panel.A>
        <Panel.ExpandedContent>{'Detaljer'}</Panel.ExpandedContent>
      </Panel>
    );
  },
};

export const DokumentlisteDeling: Story = {
  args: {},
  render: () => {
    return (
      <Panel layout={PanelLayout.horizontal} variant={PanelVariant.outline}>
        <Panel.Title title={'Langt_dokument-navn_med_rar_utforming.xml (Notat)'} icon={<Icon svgIcon={PdfFile} />} />
        <Panel.A>
          <p>{'Pasientjournal, arkivert 29.10.2020'}</p>
          <p>{'Delt med legen din'}</p>
        </Panel.A>
      </Panel>
    );
  },
};
