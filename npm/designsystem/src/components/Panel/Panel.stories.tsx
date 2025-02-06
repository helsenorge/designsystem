import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Panel from './Panel';
import { PanelVariant, PanelLayout, PanelStacking, PanelStatus } from './PanelBase';
import { PanelDocs } from './Paneldocs';
import AnchorLink from '../AnchorLink/AnchorLink';
import Avatar from '../Avatar';
import Badge from '../Badge';
import Button from '../Button';
import Icon, { IconSize } from '../Icon';
import PanelTitle from './PanelTitle/PanelTitle';
import Expander from '../Expander/Expander';
import ArrowRight from '../Icons/ArrowRight';
import Attachment from '../Icons/Attachment';
import Envelope from '../Icons/Envelope';
import FemaleDoctor from '../Icons/FemaleDoctor';
import PdfFile from '../Icons/PdfFile';
import Pencil from '../Icons/Pencil';
import Referral from '../Icons/Referral';
import TrashCan from '../Icons/TrashCan';
import StatusDot from '../StatusDot';
import Title from '../Title/Title';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Panel',
  component: Panel,
  tags: ['new'],
  parameters: {
    docs: {
      description: {
        component:
          'Panel benyttes for å vise formaterte data på et avgrenset område, og gjør det scanbart og tilgjengelig for innbygger. Dette er den mest generelle varianten av Panel, og brukes der man ikke skal ha en del skjult av expander.',
      },
      page: (): React.JSX.Element => <PanelDocs />,
    },
  },
  args: {
    variant: PanelVariant.line,
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
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: ` 
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
</Panel>`,
      },
    },
  },
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
      <Panel {...args} isExpandable>
        <Panel.PreContainer>
          <PanelTitle title="Medisinsk fødselsregister (MFR)" />
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

export const WithPanelTitles: Story = {
  args: {},
  render: args => (
    <div>
      <Panel {...args}>
        <Panel.PreContainer>
          <PanelTitle
            icon={<Icon svgIcon={PdfFile} size={IconSize.XSmall} />}
            title={'Tittel'}
            badge={<Badge>{'Ny'}</Badge>}
            statusDot={<StatusDot variant="info" text="Status" />}
          />
        </Panel.PreContainer>
        <Panel.A>
          <div>
            <PanelTitle
              icon={<Icon svgIcon={PdfFile} size={IconSize.XSmall} />}
              title={'Tittel'}
              badge={<Badge>{'Ny'}</Badge>}
              statusDot={<StatusDot variant="info" text="Status" />}
            />
            <p>
              {
                'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
              }
            </p>
            <Button variant="borderless">
              {'Call to action'}
              <Icon svgIcon={ArrowRight} />
            </Button>
          </div>
        </Panel.A>
        <Panel.B>
          <div>
            <p>{'Her kommer noe mer innhold i boks B for å vise layouts'}</p>
          </div>
        </Panel.B>
        <Panel.C>
          <div>
            <p>{'Her kommer noe mer innhold i boks C for å vise layouts'}</p>
          </div>
        </Panel.C>
      </Panel>
      <br />

      <Panel {...args}>
        <Panel.PreContainer>
          <PanelTitle title={'Uten ikon'} badge={<Badge>{'Ny'}</Badge>} statusDot={<StatusDot variant="info" text="Status" />} />
        </Panel.PreContainer>
        <Panel.A>
          <div>
            <PanelTitle title={'Uten ikon'} badge={<Badge>{'Ny'}</Badge>} statusDot={<StatusDot variant="info" text="Status" />} />

            <p>
              {
                'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
              }
            </p>
            <Button variant="borderless">
              {'Call to action'}
              <Icon svgIcon={ArrowRight} />
            </Button>
          </div>
        </Panel.A>
        <Panel.B>
          <div>
            <p>{'Her kommer noe mer innhold i boks B for å vise layouts'}</p>
          </div>
        </Panel.B>
        <Panel.C>
          <div>
            <p>{'Her kommer noe mer innhold i boks C for å vise layouts'}</p>
          </div>
        </Panel.C>
      </Panel>
      <br />

      <Panel {...args}>
        <Panel.PreContainer>
          <PanelTitle
            title={'Uten badge'}
            icon={<Icon svgIcon={PdfFile} size={IconSize.XSmall} />}
            statusDot={<StatusDot variant="info" text="Status" />}
          />
        </Panel.PreContainer>
        <Panel.A>
          <div>
            <PanelTitle
              title={'Uten badge'}
              icon={<Icon svgIcon={PdfFile} size={IconSize.XSmall} />}
              statusDot={<StatusDot variant="info" text="Status" />}
            />
            <p>
              {
                'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
              }
            </p>
            <Button variant="borderless">
              {'Call to action'}
              <Icon svgIcon={ArrowRight} />
            </Button>
          </div>
        </Panel.A>
        <Panel.B>
          <div>
            <p>{'Her kommer noe mer innhold i boks B for å vise layouts'}</p>
          </div>
        </Panel.B>
        <Panel.C>
          <div>
            <p>{'Her kommer noe mer innhold i boks C for å vise layouts'}</p>
          </div>
        </Panel.C>
      </Panel>
      <br />

      <Panel {...args}>
        <Panel.PreContainer>
          <PanelTitle
            icon={<Icon svgIcon={PdfFile} size={IconSize.XSmall} />}
            title={'Uten statusdot men med skikkelig lang titteltekst'}
            badge={<Badge>{'Ny'}</Badge>}
          />
        </Panel.PreContainer>
        <Panel.A>
          <div>
            <PanelTitle
              icon={<Icon svgIcon={PdfFile} size={IconSize.XSmall} />}
              title={'Uten statusdot men med skikkelig lang titteltekst'}
              badge={<Badge>{'Ny'}</Badge>}
            />
            <p>
              {
                'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
              }
            </p>
            <Button variant="borderless">
              {'Call to action'}
              <Icon svgIcon={ArrowRight} />
            </Button>
          </div>
        </Panel.A>
        <Panel.B>
          <div>
            <p>{'Her kommer noe mer innhold i boks B for å vise layouts'}</p>
          </div>
        </Panel.B>
        <Panel.C>
          <div>
            <p>{'Her kommer noe mer innhold i boks C for å vise layouts'}</p>
          </div>
        </Panel.C>
      </Panel>
      <br />

      <Panel {...args}>
        <Panel.PreContainer>
          <PanelTitle
            icon={<Icon svgIcon={PdfFile} size={IconSize.XSmall} />}
            statusDot={<StatusDot variant="warning" text="Status" />}
            title={'Med alle komponenter og også med skikkelig lang titteltekst'}
            badge={<Badge>{'Ny'}</Badge>}
          />
        </Panel.PreContainer>
        <Panel.A>
          <div>
            <PanelTitle
              icon={<Icon svgIcon={PdfFile} size={IconSize.XSmall} />}
              title={'Uten statusdot men med skikkelig lang titteltekst'}
              badge={<Badge>{'Ny'}</Badge>}
            />
            <p>
              {
                'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
              }
            </p>
            <Button variant="borderless">
              {'Call to action'}
              <Icon svgIcon={ArrowRight} />
            </Button>
          </div>
        </Panel.A>
        <Panel.B>
          <div>
            <p>{'Her kommer noe mer innhold i boks B for å vise layouts'}</p>
          </div>
        </Panel.B>
        <Panel.C>
          <div>
            <p>{'Her kommer noe mer innhold i boks C for å vise layouts'}</p>
          </div>
        </Panel.C>
      </Panel>
    </div>
  ),
};

export const PasientReiser: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <Panel status={PanelStatus.draft} layout={PanelLayout.vertical}>
          <Panel.PreContainer>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Icon svgIcon={Pencil} size={IconSize.XSmall} />
              <span style={{ color: 'var(--core-color-cherry-500' }}>{'Utkast'}</span>
            </div>
            <Title appearance="title3">{`Søknad som pasient 6.november 2024`}</Title>
          </Panel.PreContainer>
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
        <br />
        <Panel status={PanelStatus.draft} layout={PanelLayout.vertical}>
          <Panel.PreContainer>
            <PreviewContainer>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Icon svgIcon={Pencil} size={IconSize.XSmall} />
                <span style={{ color: 'var(--core-color-cherry-500' }}>{'Utkast'}</span>
              </div>
              <Title appearance="title3">{`Søknad som pasient 6.november 2024`}</Title>
            </PreviewContainer>
          </Panel.PreContainer>
          <Panel.A>
            <PreviewContainer>
              <span>{'Behandlingssted: Sykehus (Spesialist)'}</span>
            </PreviewContainer>
          </Panel.A>
          <Panel.B>
            <PreviewContainer>
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
            </PreviewContainer>
          </Panel.B>
        </Panel>
      </div>
    );
  },
};

export const KjernejournalKritiskInfo: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <Panel layout={PanelLayout.combined}>
          <Panel.A>
            <PanelTitle title={'Overfølsomhetsreaksjoner (allergier m.m.)'} />
            <p>
              {'Her vises legemidler og annet som kan gi deg en alvorlig reaksjon som for eksempel allergisk sjokk eller alvorlig utslett.'}
            </p>
          </Panel.A>
          <Panel.B>
            <div style={{ height: '100%', display: 'flex', flexFlow: 'column', justifyContent: 'space-between' }}>
              <div>
                <StatusDot variant="info" text="43 gjeldende" />
                <StatusDot variant="alert" text="52 avkreftet" />
              </div>
            </div>
          </Panel.B>
          <Panel.ExpandedContent>{'Noe detaljer her'}</Panel.ExpandedContent>
        </Panel>
        <br />
      </div>
    );
  },
};

export const Helsekontakter: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <Panel layout={PanelLayout.vertical} isExpandable>
          <Panel.PreContainer>
            <PanelTitle title={'Benedikte (DDFL) Geiraas'} icon={<Icon svgIcon={FemaleDoctor} />} />
          </Panel.PreContainer>
          <Panel.A>
            <p>{'DDFL Ehelse Interntest med Mock'}</p>
          </Panel.A>
          <Panel.ExpandedContent>
            <div>
              <p>{'Din fastlege siden: 1. april 2024'}</p>
              <p>{'Telefon: 11223344'}</p>
              <AnchorLink href="https://www.helsenorge.no">{'Mer om din fastlege'}</AnchorLink>
            </div>
          </Panel.ExpandedContent>
        </Panel>
        <br />
      </div>
    );
  },
};

export const Varsler: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <Panel layout={PanelLayout.horizontal} status={PanelStatus.new}>
          <Panel.A>
            <PanelTitle title={'Ny melding fra SØHF'} icon={<Icon svgIcon={Envelope} />} badge={<Badge>{'Ny'}</Badge>} />
            <p>{'2 minutter siden'}</p>
          </Panel.A>
          <Panel.B>
            <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'end', gap: '1rem' }}>
              <Button htmlMarkup={'a'} variant="borderless" ariaLabel="Slett">
                <Icon svgIcon={TrashCan} />
              </Button>
              <Button htmlMarkup={'a'} variant="borderless" aria-label="Se mer">
                <span>{'Se mer'}</span>
                <Icon svgIcon={ArrowRight} />
              </Button>
            </div>
          </Panel.B>
        </Panel>
        <br />
        <Panel layout={PanelLayout.horizontal} status={PanelStatus.new}>
          <Panel.A>
            <PreviewContainer>
              <PanelTitle title={'Ny melding fra SØHF'} icon={<Icon svgIcon={Envelope} />} badge={<Badge>{'Ny'}</Badge>} />
              <p>{'2 minutter siden'}</p>
            </PreviewContainer>
          </Panel.A>
          <Panel.B>
            <PreviewContainer>
              <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'end', gap: '1rem' }}>
                <Button htmlMarkup={'a'} variant="borderless" ariaLabel="Slett">
                  <Icon svgIcon={TrashCan} />
                </Button>
                <Button htmlMarkup={'a'} variant="borderless" aria-label="Se mer">
                  <span>{'Se mer'}</span>
                  <Icon svgIcon={ArrowRight} />
                </Button>
              </div>
            </PreviewContainer>
          </Panel.B>
        </Panel>
      </div>
    );
  },
};

export const Innboks: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <Panel layout={PanelLayout.horizontal}>
          <Panel.A>
            <PanelTitle title={'Innbyggerbrev'} />
            <p>{'SØHF'}</p>
          </Panel.A>
          <Panel.B>
            <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'end', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon svgIcon={Attachment} size={IconSize.XXSmall} />
                <span style={{ fontWeight: 'bold' }}>{'Sendt: '}</span>
                <span>{'14:34'}</span>
              </div>
              <Button htmlMarkup={'a'} variant="borderless" aria-label="Se mer">
                <span>{'Se detaljer'}</span>
                <Icon svgIcon={ArrowRight} />
              </Button>
            </div>
          </Panel.B>
        </Panel>
        <br />

        <Panel layout={PanelLayout.horizontal}>
          <Panel.A>
            <PreviewContainer>
              <PanelTitle title={'Innbyggerbrev'} />
              <p>{'SØHF'}</p>
            </PreviewContainer>
          </Panel.A>
          <Panel.B>
            <PreviewContainer>
              <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'end', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Icon svgIcon={Attachment} size={IconSize.XXSmall} />
                  <span style={{ fontWeight: 'bold' }}>{'Sendt: '}</span>
                  <span>{'14:34'}</span>
                </div>
                <Button htmlMarkup={'a'} variant="borderless" aria-label="Se mer">
                  <span>{'Se detaljer'}</span>
                  <Icon svgIcon={ArrowRight} />
                </Button>
              </div>
            </PreviewContainer>
          </Panel.B>
        </Panel>
      </div>
    );
  },
};

export const Fullmakter: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <Panel layout={PanelLayout.horizontal} isExpandable>
          <Panel.A>
            <PanelTitle title={'Gry Telokk'} icon={<Avatar>{'Gry Telokk'}</Avatar>} />
            <p>{'Fødselsnummer 131169'}</p>
            <p>{'*****'}</p>
          </Panel.A>
          <Panel.B>
            <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'start', gap: '1rem' }}>
              <Title appearance="title4">{'Fullmakt til å bruke tjenester på Helsenorge'}</Title>
              <p>{'Gyldig til: Ubegrenset'}</p>
            </div>
          </Panel.B>
          <Panel.ExpandedContent>
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
            </div>
          </Panel.ExpandedContent>
        </Panel>
        <br />
      </div>
    );
  },
};

export const Dokumentliste: Story = {
  args: {},
  render: () => {
    return (
      <Panel layout={PanelLayout.horizontal} variant={PanelVariant.border} isExpandable>
        <Panel.A>
          <PanelTitle title={'Luftveisplager (Egenkartlegging)'} icon={<Icon svgIcon={PdfFile} />} />
          <p>{'Henvendelse, arkivert 04.12.2024'}</p>
        </Panel.A>
        <Panel.ExpandedContent>{'Innhold i expander'}</Panel.ExpandedContent>
      </Panel>
    );
  },
};

export const DokumentlisteDeling: Story = {
  args: {},
  render: () => {
    return (
      <div>
        <Title appearance="title4">{'Her er det ikke brukt PanelList, kun enkeltpanel'}</Title>
        <br />
        <Panel layout={PanelLayout.horizontal} variant={PanelVariant.border}>
          <Panel.A>
            <PanelTitle title={'Langt_dokument-navn_med_rar_utforming.xml (Notat)'} icon={<Icon svgIcon={PdfFile} />} />
            <p>{'Pasientjournal, arkivert 29.10.2020'}</p>
            <p>{'Delt med legen din'}</p>
          </Panel.A>
        </Panel>
        <br />

        <Panel layout={PanelLayout.horizontal} variant={PanelVariant.border}>
          <Panel.A>
            <PreviewContainer>
              <PanelTitle title={'Langt_dokument-navn_med_rar_utforming.xml (Notat)'} icon={<Icon svgIcon={PdfFile} />} />
              <p>{'Pasientjournal, arkivert 29.10.2020'}</p>
              <p>{'Delt med legen din'}</p>
            </PreviewContainer>
          </Panel.A>
        </Panel>
      </div>
    );
  },
};

export const Expandable: Story = {
  args: {
    layout: PanelLayout.vertical,
  },
  render: args => {
    return (
      <Panel {...args} isExpandable>
        <Panel.PreContainer>
          <PanelTitle title="Denne har en knapp og skjult innhold" />
        </Panel.PreContainer>
        <Panel.A>
          <div style={{ textAlign: 'left' }}>{'Noe innhold'}</div>
        </Panel.A>
        <Panel.ExpandedContent>
          <Title appearance="title3">{'Dette er skjult'}</Title>
          <p>{'Men når man åpner expanderen vil det vises'}</p>
        </Panel.ExpandedContent>
      </Panel>
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
        <Panel {...args} isExpandable>
          <Panel.PreContainer>
            <PanelTitle title="Denne har en knapp og skjult innhold" />
          </Panel.PreContainer>
          <Panel.A>
            <span>{'Noe innhold'}</span>
          </Panel.A>
          <Panel.ExpandedContent>
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
          </Panel.ExpandedContent>
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
        <Panel {...args} expanded={expanderOpen} showExpandButton={false} isExpandable>
          <Panel.PreContainer>
            <PanelTitle title="Denne har en custom knapp som åpner expandedcontent" />
          </Panel.PreContainer>
          <Panel.A>
            <span>{'Noe innhold'}</span>
            <br />
            <Button onClick={() => setExpanderOpen(!expanderOpen)}>{expanderOpen ? 'Skjul detaljer' : 'Se detaljer'}</Button>
          </Panel.A>
          <Panel.ExpandedContent>
            <Title appearance="title3">{'Dette er skjult'}</Title>
            <p>{'Men når man åpner expanderen vil det vises'}</p>
          </Panel.ExpandedContent>
        </Panel>
      </>
    );
  },
};
