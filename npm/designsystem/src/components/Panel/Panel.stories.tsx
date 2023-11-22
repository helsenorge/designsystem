import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Panel, { PanelStatus, PanelVariant } from './Panel';
import Avatar from '../Avatar';
import Button from '../Button';
import GridExample from '../GridExample';
import Icon, { IconSize } from '../Icon';
import Attachment from '../Icons/Attachment';
import Envelope from '../Icons/Envelope';
import Title from '../Title';

export default {
  title: '@helsenorge∕designsystem-react/Components/Panel',
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
    focusable: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Panel>;

const contentExample = (content: 'Header' | 'A' | 'B' | 'C') => (
  <div style={{ background: '#e0e7ec', height: 180, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {<p style={{ fontSize: '3rem', fontWeight: '400', color: 'black' }}>{content}</p>}
  </div>
);

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

export const ContentA: ComponentStory<typeof Panel> = (args: any) => (
  <GridExample>
    <Panel {...args} contentA={contentExample('A')}>
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
    <Panel {...args} title={'Layout1'} layout={'layout1'} contentA={contentExample('A')} contentB={contentExample('B')}>
      <div>
        <Title appearance="title2">{'Layout1'}</Title>
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
    <br />
    <Panel {...args} title={'Layout2'} layout={'layout2'} contentA={contentExample('A')} contentB={contentExample('B')}>
      <div>
        <Title appearance="title2">{'Layout2'}</Title>
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
    <br />
    <Panel {...args} title={'Layout3a'} layout={'layout3a'} contentA={contentExample('A')} contentB={contentExample('B')}>
      <div>
        <Title appearance="title2">{'Layout3a'}</Title>
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
    <br />
    <Panel {...args} title={'Layout3b'} layout={'layout3b'} contentA={contentExample('A')} contentB={contentExample('B')}>
      <div>
        <Title appearance="title2">{'Layout3b'}</Title>
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
    <br />
    <Panel {...args} title={'Layout3c'} layout={'layout3c'} contentA={contentExample('A')} contentB={contentExample('B')}>
      <div>
        <Title appearance="title2">{'Layout3c'}</Title>
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
      icon={<Icon svgIcon={Envelope} size={IconSize.Small} />}
      url={'https://www.helsenorge.no/'}
      target={'_blank'}
      title={'Layout1'}
      layout={'layout1'}
      contentA={contentExample('A')}
      contentB={contentExample('B')}
    />
    <br />
    <Panel
      {...args}
      icon={<Icon svgIcon={Envelope} size={IconSize.Small} />}
      url={'https://www.helsenorge.no/'}
      target={'_blank'}
      title={'Layout2'}
      layout={'layout2'}
      contentA={contentExample('A')}
      contentB={contentExample('B')}
    />

    <br />
    <Panel
      {...args}
      icon={<Icon svgIcon={Envelope} size={IconSize.Small} />}
      url={'https://www.helsenorge.no/'}
      target={'_blank'}
      title={'Layout3a'}
      layout={'layout3a'}
      contentA={contentExample('A')}
      contentB={contentExample('B')}
    />

    <br />
    <Panel
      {...args}
      icon={<Icon svgIcon={Envelope} size={IconSize.Small} />}
      url={'https://www.helsenorge.no/'}
      target={'_blank'}
      title={'Layout3b'}
      layout={'layout3b'}
      contentA={contentExample('A')}
      contentB={contentExample('B')}
    />

    <br />
    <Panel
      {...args}
      icon={<Icon svgIcon={Envelope} size={IconSize.Small} />}
      url={'https://www.helsenorge.no/'}
      target={'_blank'}
      title={'Layout3c'}
      layout={'layout3c'}
      contentA={contentExample('A')}
      contentB={contentExample('B')}
    />
  </GridExample>
);

export const ContentHeader: ComponentStory<typeof Panel> = (args: any) => (
  <GridExample>
    <Panel
      {...args}
      title={'Content in preContainer'}
      contentA={contentExample('A')}
      contentB={contentExample('B')}
      contentHeader={contentExample('Header')}
    >
      <div>
        <Title appearance="title2">{'Layout1'}</Title>
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
      focusable={args.focusable}
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
