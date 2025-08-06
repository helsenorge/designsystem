import React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import Highlighter from './Highlighter';
import longLoremText from '../../utils/loremtext';
import AnchorLink from '../AnchorLink';
import Badge from '../Badge';
import Button from '../Button';
import Duolist, { DuolistGroup } from '../Duolist';
import ElementHeader from '../ElementHeader';
import ExpanderList from '../ExpanderList';
import Icon from '../Icon';
import AlarmClock from '../Icons/AlarmClock';
import ArrowRight from '../Icons/ArrowRight';
import Envelope from '../Icons/Envelope';
import FemaleDoctor from '../Icons/FemaleDoctor';
import PaperPlane from '../Icons/PaperPlane';
import PdfFile from '../Icons/PdfFile';
import Referral from '../Icons/Referral';
import TrashCan from '../Icons/TrashCan';
import LinkList from '../LinkList';
import Panel, { PanelLayout, PanelStatus, PanelVariant } from '../Panel';
import PanelList from '../PanelList';
import StatusDot from '../StatusDot';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Highlighter',
  component: Highlighter,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av Highlighter',
      },
      page: (): React.JSX.Element => <Docs component={Highlighter} />,
    },
  },
  args: {
    searchText: 'En',
  },
  argTypes: {},
} satisfies Meta<typeof Highlighter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Highlighter {...args}>{longLoremText}</Highlighter>,
};

export const PanelExamplesWithProp: Story = {
  render: args => (
    <div>
      <Panel highlightText={args.searchText} layout={PanelLayout.vertical} variant={PanelVariant.outline}>
        <Panel.Title title={'Medisinsk fødselsregister (MFR)'} />
        <Panel.A>
          <span>
            {
              'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
            }
          </span>
        </Panel.A>
        <Panel.ExpandedContent>
          <span>{'Innhold.'}</span>
        </Panel.ExpandedContent>
      </Panel>
      <br />
      <Panel
        highlightText={args.searchText}
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
        <Panel.Title title={'Timeavtale'} badge={<Badge>{'Ny'}</Badge>} />
        <Panel.A>
          <div>
            <Duolist useCollapsedFromAndBelowBreakpoint="xs">
              <DuolistGroup term={'Oppmøtested'} description={'Ullevål sykehus'} key={'a'} />
              <DuolistGroup term={'Behandler'} description={'Turnuslege Ingunn Thyssen'} key={'b'} />
              <DuolistGroup term={'Timen gjelder'} description={'Vaksine'} key={'c'} />
            </Duolist>
          </div>
        </Panel.A>
      </Panel>
      <br />
      <Panel status={PanelStatus.draft} layout={PanelLayout.vertical}>
        <Panel.PreContainer>
          <StatusDot text="Utkast" variant="draft" />
        </Panel.PreContainer>
        <Panel.Title highlightText={args.searchText} title={'Søknad som pasient 6. november 2024'} />
        <Panel.A>
          <span>{'Dette panelet highlighter kun tekst i tittel'}</span>
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
      <Panel highlightText={args.searchText} layout={PanelLayout.vertical}>
        <Panel.Title title={'Benedikte (DDFL) Geiraas'} icon={<Icon svgIcon={FemaleDoctor} />} />
        <Panel.A>
          <p>{'DDFL Ehelse Interntest med Mock'}</p>
        </Panel.A>
        <Panel.ExpandedContent>
          <div>
            <Duolist useCollapsedFromAndBelowBreakpoint="xs">
              <DuolistGroup term={'Din fastlege siden'} description={'1. april 2024'} key={'fastlege'} />
              <DuolistGroup term={'Telefon'} description={'11223344'} key={'telefon'} />
            </Duolist>
            <AnchorLink href="https://www.helsenorge.no">{'Mer om din fastlege'}</AnchorLink>
          </div>
        </Panel.ExpandedContent>
      </Panel>
      <br />
      <Panel highlightText={args.searchText} layout={PanelLayout.horizontal}>
        <Panel.Title title={'Ny melding fra Tarmscreeningprogrammet Kreftregisteret'} icon={<Icon svgIcon={Envelope} />} />
        <Panel.A>
          <p>{'19.11.2024'}</p>
          <Button variant="borderless" onClick={() => null}>
            {'Se mer'}
            <Icon svgIcon={ArrowRight} />
          </Button>
        </Panel.A>
        <Panel.B>
          <Button variant="borderless" onClick={() => null} ariaLabel="Slett">
            <Icon svgIcon={TrashCan} />
          </Button>
        </Panel.B>
      </Panel>
      <br />
      <Panel highlightText={args.searchText} layout={PanelLayout.horizontal} variant={PanelVariant.outline}>
        <Panel.Title title={'Luftveisplager (Egenkartlegging)'} icon={<Icon svgIcon={PdfFile} />} />
        <Panel.A>
          <p>{'Henvendelse, arkivert 04.12.2024'}</p>
        </Panel.A>
        <Panel.ExpandedContent>{'Detaljer'}</Panel.ExpandedContent>
      </Panel>
      <br />
      <Panel highlightText={args.searchText} layout={PanelLayout.horizontal} variant={PanelVariant.outline}>
        <Panel.Title title={'Dokument-navn.xml (Notat)'} icon={<Icon svgIcon={PdfFile} />} />
        <Panel.A>
          <p>{'Pasientjournal, arkivert 29.10.2020'}</p>
          <p>{'Delt med legen din'}</p>
        </Panel.A>
      </Panel>
    </div>
  ),
};

export const PanelExamplesInCode: Story = {
  render: args => (
    <div>
      <Panel layout={PanelLayout.vertical} variant={PanelVariant.outline}>
        <Panel.Title title={<Highlighter {...args}>{'Medisinsk fødselsregister (MFR)'}</Highlighter>} />
        <Panel.A>
          <Highlighter {...args}>
            <span>
              {
                'Lorem ipsum dolor sit amet consectetur. Neque cras eget at imperdiet. Lectus massa dolor cursus vulputate. Vel ultrices morbi et lacus id amet morbi. Enim molestie elit in nibh lorem. Malesuada sapien elementum pretium enim arcu orci. '
              }
            </span>
          </Highlighter>
        </Panel.A>
        <Panel.ExpandedContent>
          <Highlighter {...args}>
            <span>{'Innhold.'}</span>
          </Highlighter>
        </Panel.ExpandedContent>
      </Panel>
      <br />
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
        <Panel.Title title={<Highlighter {...args}>{'Timeavtale'}</Highlighter>} badge={<Badge>{'Ny'}</Badge>} />
        <Panel.A>
          <Highlighter {...args}>
            <div>
              <Duolist useCollapsedFromAndBelowBreakpoint="xs">
                <DuolistGroup term={'Oppmøtested'} description={'Ullevål sykehus'} key={'a'} />
                <DuolistGroup term={'Behandler'} description={'Turnuslege Ingunn Thyssen'} key={'b'} />
                <DuolistGroup term={'Timen gjelder'} description={'Vaksine'} key={'c'} />
              </Duolist>
            </div>
          </Highlighter>
        </Panel.A>
      </Panel>
      <br />
      <Panel status={PanelStatus.draft} layout={PanelLayout.vertical}>
        <Panel.PreContainer>
          <StatusDot text="Utkast" variant="draft" />
        </Panel.PreContainer>
        <Panel.Title title={<Highlighter {...args}>{'Søknad som pasient 6. november 2024'}</Highlighter>} />
        <Panel.A>
          <Highlighter {...args}>
            <span>{'Behandlingssted: Sykehus (Spesialist)'}</span>
          </Highlighter>
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
      <Panel layout={PanelLayout.vertical}>
        <Panel.Title title={<Highlighter {...args}>{'Benedikte (DDFL) Geiraas'}</Highlighter>} icon={<Icon svgIcon={FemaleDoctor} />} />
        <Panel.A>
          <Highlighter {...args}>
            <p>{'DDFL Ehelse Interntest med Mock'}</p>
          </Highlighter>
        </Panel.A>
        <Panel.ExpandedContent>
          <Highlighter {...args}>
            <div>
              <Duolist useCollapsedFromAndBelowBreakpoint="xs">
                <DuolistGroup term={'Din fastlege siden'} description={'1. april 2024'} key={'fastlege'} />
                <DuolistGroup term={'Telefon'} description={'11223344'} key={'telefon'} />
              </Duolist>
              <AnchorLink href="https://www.helsenorge.no">{'Mer om din fastlege'}</AnchorLink>
            </div>
          </Highlighter>
        </Panel.ExpandedContent>
      </Panel>
      <br />
      <Panel layout={PanelLayout.horizontal}>
        <Panel.Title
          title={<Highlighter {...args}>{'Ny melding fra Tarmscreeningprogrammet Kreftregisteret'}</Highlighter>}
          icon={<Icon svgIcon={Envelope} />}
        />
        <Panel.A>
          <Highlighter {...args}>
            <p>{'19.11.2024'}</p>
          </Highlighter>
          <Button variant="borderless" onClick={() => null}>
            {'Se mer'}
            <Icon svgIcon={ArrowRight} />
          </Button>
        </Panel.A>
        <Panel.B>
          <Button variant="borderless" onClick={() => null} ariaLabel="Slett">
            <Icon svgIcon={TrashCan} />
          </Button>
        </Panel.B>
      </Panel>
      <br />
      <Panel layout={PanelLayout.horizontal} variant={PanelVariant.outline}>
        <Panel.Title title={<Highlighter {...args}>{'Luftveisplager (Egenkartlegging)'}</Highlighter>} icon={<Icon svgIcon={PdfFile} />} />
        <Panel.A>
          <Highlighter {...args}>
            <p>{'Henvendelse, arkivert 04.12.2024'}</p>
          </Highlighter>
        </Panel.A>
        <Panel.ExpandedContent>
          <Highlighter {...args}>{'Detaljer'}</Highlighter>
        </Panel.ExpandedContent>
      </Panel>
      <br />
      <Panel layout={PanelLayout.horizontal} variant={PanelVariant.outline}>
        <Panel.Title title={<Highlighter {...args}>{'Dokument-navn.xml (Notat)'}</Highlighter>} icon={<Icon svgIcon={PdfFile} />} />
        <Panel.A>
          <Highlighter {...args}>
            <p>{'Pasientjournal, arkivert 29.10.2020'}</p>
          </Highlighter>
          <p>{'Delt med legen din'}</p>
        </Panel.A>
      </Panel>
    </div>
  ),
};

export const PanelListExample: Story = {
  args: {
    searchText: 'over',
  },
  render: args => (
    <PanelList highlightText={args.searchText}>
      <Panel>
        <Panel.Title title="Overskrift 1" />
        <Panel.A>
          {
            'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
          }
        </Panel.A>
      </Panel>
      <Panel>
        <Panel.Title title="Overskrift 2" />
        <Panel.A>
          {
            'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
          }
        </Panel.A>
      </Panel>
    </PanelList>
  ),
};

export const DuoList: Story = {
  args: {
    searchText: 'te',
  },
  render: args => (
    <Highlighter {...args}>
      <Duolist useCollapsedFromAndBelowBreakpoint="xs">
        <DuolistGroup description="Description" term="Term" key={1} />
        <DuolistGroup description="Description" term="Term" key={2} />
        <DuolistGroup description="Description" term="Term" key={3} />
        <DuolistGroup description="Description" term="Term" key={4} />
      </Duolist>
    </Highlighter>
  ),
};

export const ExpanderListExamplesWithProp: Story = {
  args: {
    searchText: 'te',
  },
  render: args => (
    <ExpanderList highlightText={args.searchText}>
      {/* Eksempel fra PasientJournal, dokument-expandable.tsx */}
      <ExpanderList.Expander
        testId="dokument-expandable"
        title={
          <ElementHeader highlightText={args.searchText}>
            <ElementHeader.Text highlightText={args.searchText} firstText="Tekst" />
            <span>{'Opprettet dato: 01.01.2025'}</span>
            <span>{'Kategori:'}</span>
            <span>{'Avdeling:'}</span>
          </ElementHeader>
        }
      >
        <div>{'Noe innhold her'}</div>
      </ExpanderList.Expander>
      <ExpanderList.Expander title="Kognitiv terapi">
        {
          'Kognitiv terapi er en form for psykoterapi som retter seg mot problemløsning og innsikt i sammenhengen mellom tenkning, handlinger og følelser. Et viktig mål er å bryte selvforsterkende onde sirkler som opprettholder psykiske helseproblemer.'
        }
      </ExpanderList.Expander>
      <ExpanderList.Expander title="Hypokondri">
        {
          'Hypokondri er en sykdom der folk føler at de har en sykdom som de i realiteten ikke har. Statens helsetilsyn sier blant annet følgende om sykdommen: «Det vesentlige kjennetegnet er vedvarende opptatthet av muligheten for å ha en eller flere alvorlige og fremadskridende somatiske lidelser».'
        }
      </ExpanderList.Expander>
      <ExpanderList.Expander title="En hjerneskade er en skade opstået i hjernen, med vedvarende funktionsnedsættelse til følge (Ekstra lang tekst for wrapping)">
        {
          'De hyppigste årsager til hjerneskader er hjerneblødninger, blodpropper i hjernen, trafik- eller drukneulykker, svulster eller hjertestop med efterfølgende iltmangel til hjernen; men kan også skyldes en hjernebetændelse på grund af herpes eller anden virus.'
        }
      </ExpanderList.Expander>
    </ExpanderList>
  ),
};

export const LinkListExamplesWithProp: Story = {
  args: {
    searchText: 'se',
  },
  render: args => (
    <LinkList highlightText={args.searchText}>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank" icon={<Icon svgIcon={AlarmClock} />}>
        {'Innhold A-Å'}
      </LinkList.Link>
      <LinkList.Link htmlMarkup="button" icon={<Icon svgIcon={PaperPlane} />}>
        {
          'Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og bidra til en god fordøyelse. (Eksempel på wrapping av tekst)'
        }
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank" icon={<Icon svgIcon={AlarmClock} />}>
        <ElementHeader>
          <ElementHeader.Text
            highlightText={args.searchText}
            firstText="Emphasized label segment"
            firstTextEmphasised
            secondText=" and normal segment"
          />
          <ElementHeader.Text
            highlightText={args.searchText}
            subText
            firstText="Emphasized label segment"
            firstTextEmphasised
            secondText=" and normal segment"
          />
          <ElementHeader.Text
            highlightText={args.searchText}
            subText
            firstText="Emphasized label segment"
            firstTextEmphasised
            secondText=" and normal segment"
          />
        </ElementHeader>
      </LinkList.Link>
    </LinkList>
  ),
};
