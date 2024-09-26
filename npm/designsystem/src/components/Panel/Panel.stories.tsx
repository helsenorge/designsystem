import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Panel, { PanelStatus, PanelVariant } from './Panel';
import Avatar from '../Avatar';
import Button from '../Button';
import Icon, { IconSize } from '../Icon';
import Attachment from '../Icons/Attachment';
import Envelope from '../Icons/Envelope';
import Title from '../Title';

type PanelWithAndCustomArgs = React.ComponentProps<typeof Panel> & {
  useIcon: boolean;
};

const meta = {
  title: '@helsenorge/designsystem-react/Components/Panel',
  component: Panel,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Panel} />,
      description: {
        component:
          'Som innbygger vil jeg se formatterte data på et avgrenset område som gjør det scanbart og tilgjengelig, og som kan være en inngang til mer informasjon, slik at jeg kan løse oppgavene mine.',
      },
    },
  },
  args: {
    variant: PanelVariant.fill,
    title: 'Medisinsk fødselsregister (MFR)',
    status: PanelStatus.normal,
    statusMessage: 'Dette er en status tekst',
    buttonText: 'Vis detaljer',
    buttonTextClose: 'Skjul detaljer',
    useIcon: false,
    containerAsButton: false,
    date: 'Dato',
    time: 'Tid',
    expanded: false,
    renderChildrenWhenClosed: false,
    focusable: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: PanelVariant,
    },
    title: {
      control: 'text',
    },
    status: {
      control: 'select',
      options: PanelStatus,
    },
    statusMessage: {
      control: 'text',
    },
    buttonText: {
      control: 'text',
    },
    buttonTextClose: {
      control: 'text',
    },
    useIcon: {
      control: 'boolean',
    },
    containerAsButton: {
      control: 'boolean',
    },
    date: {
      control: 'text',
    },
    time: {
      control: 'text',
    },
    expanded: {
      control: 'boolean',
    },
    renderChildrenWhenClosed: {
      control: 'boolean',
    },
    focusable: {
      control: 'boolean',
    },
  },
} satisfies Meta<PanelWithAndCustomArgs>;

export default meta;

type Story = StoryObj<PanelWithAndCustomArgs>;

const contentExample = (content: 'Header' | 'A' | 'B' | 'C') => (
  <div style={{ background: '#e0e7ec', height: 180, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {<p style={{ fontSize: '3rem', fontWeight: '400', color: 'black' }}>{content}</p>}
  </div>
);

export const Default: Story = {
  render: args => (
    <Panel {...args} contentA={'Noe innhold'} icon={args.useIcon ? <Icon svgIcon={Attachment} size={IconSize.XSmall} /> : undefined}>
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
  ),
};

export const ContentA: Story = {
  render: args => (
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
  ),
};
export const ContentAAndB: Story = {
  render: args => (
    <>
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
    </>
  ),
};

export const ContentAAndBWithIconAndUrl: Story = {
  render: args => (
    <>
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
    </>
  ),
};

export const ContentHeader: Story = {
  render: args => (
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
  ),
};

export const IconAndDetails: Story = {
  render: () => (
    <Panel title={'Medisinsk fødselsregister (MFR)'} icon={<Icon svgIcon={Envelope} size={IconSize.Small} />}>
      <p>
        {
          'Dolor sit nisi exercitation esse sint et excepteur commodo officia qui exercitation. Ad excepteur laboris laboris Lorem. Occaecat aliquip cupidatat pariatur enim est eiusmod laboris ea nulla dolore ullamco dolore nostrud proident. Irure in eu irure excepteur sit exercitation aliquip deserunt adipisicing ullamco nulla elit culpa culpa.'
        }
      </p>
    </Panel>
  ),
};

export const AvatarAndDetails: Story = {
  render: () => (
    <Panel title={'Medisinsk fødselsregister (MFR)'} icon={<Avatar variant="black">{'Line Danser'}</Avatar>}>
      <div>
        <Button htmlMarkup="a" target="_blank" href="https://www.facebook.com/people/Line-Danser/100007422643849/">
          {'Line Danser'}
        </Button>
        <span>{' Lorem culpa esse dolore cillum minim qui minim aliquip eu laborum voluptate.'}</span>
      </div>
    </Panel>
  ),
};

export const Status: Story = {
  render: args => (
    <>
      <Panel status={args.status} statusMessage={args.statusMessage} title={args.title} url={'https://www.helsenorge.no/'} />
      <br />
      <Panel
        status={'new'}
        statusMessage={'4 nye'}
        title={'Fullmakt slettet'}
        url={'https://www.helsenorge.no/'}
        focusable={args.focusable}
      />
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
    </>
  ),
};

export const AsButton: Story = {
  render: () => (
    <Panel
      title={'Medisinsk fødselsregister (MFR)'}
      icon={<Avatar variant="black">{'Line Danser'}</Avatar>}
      buttonText="Lenke til mer"
      buttonOnClick={action('Button clicked!')}
      buttonHtmlMarkup="button"
    />
  ),
};

export const WithCallback: Story = {
  render: args => (
    <Panel {...args} title={'Medisinsk fødselsregister (MFR)'} onExpand={isExpanded => console.log(isExpanded)}>
      <p>Sjekk nettleserkonsollen</p>
    </Panel>
  ),
};

export const NotClickable: Story = {
  render: args => <Panel {...args} title={'Medisinsk fødselsregister (MFR)'}></Panel>,
};
