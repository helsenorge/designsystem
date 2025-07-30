import React from 'react';

import { action } from 'storybook/actions';

import Panel, { PanelVariant, PanelLayout, PanelStatus } from './Panel';
import AnchorLink from '../AnchorLink/AnchorLink';
import Badge from '../Badge';
import Button from '../Button';
import Duolist, { DuolistGroup } from '../Duolist';
import Icon from '../Icon';
import ArrowRight from '../Icons/ArrowRight';
import Envelope from '../Icons/Envelope';
import FemaleDoctor from '../Icons/FemaleDoctor';
import PdfFile from '../Icons/PdfFile';
import Referral from '../Icons/Referral';
import TrashCan from '../Icons/TrashCan';
import StatusDot from '../StatusDot';

export const MedisinskFødselsregister: React.FC = () => {
  return (
    <Panel layout={PanelLayout.vertical} variant={PanelVariant.outline}>
      <Panel.Title title="Medisinsk fødselsregister (MFR)" />
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
  );
};

export const TimeAvtale: React.FC = () => {
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
};

export const PasientReiser: React.FC = () => {
  return (
    <Panel status={PanelStatus.draft} layout={PanelLayout.vertical}>
      <Panel.PreContainer>
        <StatusDot text="Utkast" variant="draft" />
      </Panel.PreContainer>
      <Panel.Title title="Søknad som pasient 6. november 2024" />
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
};

export const Helsekontakter: React.FC = () => {
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
};

export const Dokumentliste: React.FC = () => {
  return (
    <Panel layout={PanelLayout.horizontal} variant={PanelVariant.outline}>
      <Panel.Title title={'Luftveisplager (Egenkartlegging)'} icon={<Icon svgIcon={PdfFile} />} />
      <Panel.A>
        <p>{'Henvendelse, arkivert 04.12.2024'}</p>
      </Panel.A>
      <Panel.ExpandedContent>{'Detaljer'}</Panel.ExpandedContent>
    </Panel>
  );
};

export const DokumentlisteDeling: React.FC = () => {
  return (
    <Panel layout={PanelLayout.horizontal} variant={PanelVariant.outline}>
      <Panel.Title title={'Dokument-navn.xml (Notat)'} icon={<Icon svgIcon={PdfFile} />} />
      <Panel.A>
        <p>{'Pasientjournal, arkivert 29.10.2020'}</p>
        <p>{'Delt med legen din'}</p>
      </Panel.A>
    </Panel>
  );
};

export const NyMelding: React.FC = () => {
  return (
    <Panel layout={PanelLayout.horizontal}>
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
  );
};
