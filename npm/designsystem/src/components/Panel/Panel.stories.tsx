import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Panel, { PanelStatus, PanelVariant } from './Panel';
import Avatar from '../Avatar';
import Title from '../Title';
import Icon, { IconSize } from '../Icons';
import Envelope from '../Icons/Envelope';
import Attachment from '../Icons/Attachment';
import Button from '../Button';
import GridExample from '../GridExample';

export default {
  title: 'Components/Panel',
  component: Panel,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg se formatterte data på et avgrenset område som gjør det scanbart og tilgjengelig, og som kan være en inngang til mer informasjon, slik at jeg kan løse oppgavene mine.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: PanelVariant,
      defaultValue: PanelVariant.fill,
    },
    title: {
      control: 'text',
      defaultValue: 'Medisinsk fødselsregister (MFR)',
    },
    status: {
      control: 'select',
      options: PanelStatus,
      defaultValue: PanelStatus.normal,
    },
    statusMessage: {
      control: 'text',
      defaultValue: 'Dette er en status tekst',
    },
    buttonText: {
      control: 'text',
      defaultValue: 'Vis detaljer',
    },
    buttonTextClose: {
      control: 'text',
      defaultValue: 'Skjul detaljer',
    },
    useicon: {
      control: 'boolean',
      defaultValue: false,
    },
    iconRight: {
      control: 'boolean',
      defaultValue: false,
    },
    containerAsButton: {
      control: 'boolean',
      defaultValue: false,
    },
    date: {
      control: 'text',
      defaultValue: 'Dato',
    },
    time: {
      control: 'text',
      defaultValue: 'Tid',
    },
    expanded: {
      control: 'boolean',
      defaultValue: false,
    },
    renderChildrenWhenClosed: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Panel>;

export const Default: ComponentStory<typeof Panel> = (args: any) => (
  <GridExample>
    <Panel {...args} contentA={'Noe innhold'} icon={args.useicon ? <Icon svgIcon={Attachment} size={IconSize.XSmall} /> : undefined}>
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
    </Panel>
  </GridExample>
);

export const ContentAAndB: ComponentStory<typeof Panel> = (args: any) => (
  <GridExample>
    <Panel
      {...args}
      contentA={<div style={{ background: '#748999', height: 180 }}>{'Content A'}</div>}
      contentB={<div style={{ background: '#748999', height: 100 }}>{'Content B'}</div>}
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
    </Panel>
  </GridExample>
);

export const ContentAAndBWithIconAndUrl: ComponentStory<typeof Panel> = (args: any) => (
  <GridExample>
    <Panel
      {...args}
      contentA={<div style={{ background: '#748999', height: 250 }}>{'Content A'}</div>}
      contentB={
        <div style={{ background: '#748999' }}>
          {
            'Lorem ipsum er opprinnelig et lettere redigert utdrag fra De finibus bonorum et malorum av Cicero. Opprinnelig begynte avsnittet: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
          }
        </div>
      }
      url={'https://www.helsenorge.no/'}
      target={'_blank'}
      icon={<Icon svgIcon={Envelope} size={IconSize.Small} />}
    />
  </GridExample>
);

export const IconAndDetails: ComponentStory<typeof Panel> = () => (
  <GridExample>
    <Panel title={'Medisinsk fødselsregister (MFR)'} icon={<Icon svgIcon={Envelope} size={IconSize.Small} />}>
      <p>
        {
          'Dolor sit nisi exercitation esse sint et excepteur commodo officia qui exercitation. Ad excepteur laboris laboris Lorem. Occaecat aliquip cupidatat pariatur enim est eiusmod laboris ea nulla dolore ullamco dolore nostrud proident. Irure in eu irure excepteur sit exercitation aliquip deserunt adipisicing ullamco nulla elit culpa culpa.'
        }
      </p>
    </Panel>
  </GridExample>
);

export const AvatarAndDetails: ComponentStory<typeof Panel> = () => (
  <GridExample>
    <Panel title={'Medisinsk fødselsregister (MFR)'} icon={<Avatar variant="black">{'Line Danser'}</Avatar>}>
      <div>
        <Button htmlMarkup="a" target="_blank" href="https://www.facebook.com/people/Line-Danser/100007422643849/">
          {'Line Danser'}
        </Button>
        <span>{' Lorem culpa esse dolore cillum minim qui minim aliquip eu laborum voluptate.'}</span>
      </div>
    </Panel>
  </GridExample>
);

export const Status: ComponentStory<typeof Panel> = (args: any) => (
  <GridExample>
    <Panel status={args.status} statusMessage={args.statusMessage} title={args.title} url={'https://www.helsenorge.no/'} />
    <br />
    <Panel
      status={'new'}
      statusMessage={'4 nye'}
      title={'Dette er en veldig lang tittel for å wrappe badge (4)'}
      url={'https://www.helsenorge.no/'}
    />
    <br />
    <Panel status={'error'} statusMessage={'1'} title={args.title} url={'https://www.helsenorge.no/'} />
    <br />
    <Panel status={'draft'} statusMessage={'1'} title={args.title} url={'https://www.helsenorge.no/'} />
  </GridExample>
);

export const AsButton: ComponentStory<typeof Panel> = (args: any) => (
  <GridExample>
    <Panel
      title={'Medisinsk fødselsregister (MFR)'}
      icon={<Avatar variant="black">{'Line Danser'}</Avatar>}
      buttonText="Lenke til mer"
      buttonOnClick={action('Button clicked!')}
      buttonHtmlMarkup="button"
    />
  </GridExample>
);

export const WithCallback: ComponentStory<typeof Panel> = (args: any) => (
  <GridExample>
    <Panel {...args} title={'Medisinsk fødselsregister (MFR)'} onExpand={isExpanded => console.log(isExpanded)}>
      <p>Sjekk nettleserkonsollen</p>
    </Panel>
  </GridExample>
);

export const NotClickable: ComponentStory<typeof Panel> = (args: any) => (
  <GridExample>
    <Panel {...args} title={'Medisinsk fødselsregister (MFR)'}></Panel>
  </GridExample>
);
