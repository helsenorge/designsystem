import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Panel, { PanelLayout, PanelStatus, PanelVariant } from './Panel';
import { withA11y } from '@storybook/addon-a11y';
import Avatar from '../Avatar';
import Title from '../Title';
import Icon, { IconSize } from '../Icons';
import Envelope from '../Icons/Envelope';
import Attachment from '../Icons/Attachment';
import Button from '../Button';

const stories = storiesOf('Panel', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => {
  const icon = boolean('icon', false);
  const iconRight = boolean('iconRight', false);

  return (
    <div style={{ width: '90vw', padding: '1vw', backgroundColor: 'white' }}>
      <Panel
        variant={select('Variant', PanelVariant, PanelVariant.fill)}
        title={text('Title', 'Medisinsk fødselsregister (MFR)')}
        status={select('Status', PanelStatus, PanelStatus.normal)}
        statusMessage={text('Status message', 'Dette er en status tekst')}
        buttonText="Expand"
        contentA={<div>{'Noe innhold'}</div>}
        icon={icon ? <Icon svgIcon={Attachment} size={IconSize.XSmall} /> : undefined}
        iconRight={iconRight}
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
    </div>
  );
});

stories.add('Content A and B', () => (
  <div style={{ width: '90vw', padding: '1vw', backgroundColor: 'white' }}>
    <Panel
      variant={select('Variant', PanelVariant, PanelVariant.fill)}
      title={text('Title', 'Medisinsk fødselsregister (MFR)')}
      layout={select('Layout', PanelLayout, PanelLayout.layout1)}
      contentA={<div style={{ background: '#748999', height: 180 }}>{'Content A'}</div>}
      contentB={<div style={{ background: '#748999', height: 100 }}>{'Content B'}</div>}
      status={select('Status', PanelStatus, PanelStatus.normal)}
      statusMessage={text('Status message', 'Dette er en status tekst')}
      containerAsButton={boolean('containerAsButton', false)}
      date={text('Date', 'Dato')}
      time={text('Time', 'Tid')}
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
  </div>
));

stories.add('Content A og B med ikon og url ', () => (
  <div style={{ width: '90vw', padding: '1vw', backgroundColor: 'white' }}>
    <Panel
      variant={select('Variant', PanelVariant, PanelVariant.fill)}
      title={text('Title', 'Medisinsk fødselsregister (MFR)')}
      contentA={<div style={{ background: '#748999', height: 250 }}>{'Content A'}</div>}
      contentB={
        <div style={{ background: '#748999' }}>
          {
            'Lorem ipsum er opprinnelig et lettere redigert utdrag fra De finibus bonorum et malorum av Cicero. Opprinnelig begynte avsnittet: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli'
          }
        </div>
      }
      status={select('Status', PanelStatus, PanelStatus.normal)}
      layout={select('Layout', PanelLayout, PanelLayout.layout1)}
      statusMessage={text('Status message', 'Dette er en status tekst')}
      url={text('url', 'https://www.helsenorge.no/')}
      target={select('Target', ['_blank', '_self'], '_blank')}
      icon={<Icon svgIcon={Envelope} size={IconSize.Small} />}
      iconRight={boolean('iconRight', false)}
      containerAsButton={boolean('containerAsButton', false)}
      date={text('Date', '')}
      time={text('Time', '')}
    />
  </div>
));

stories.add('Ikon og detaljer', () => (
  <div style={{ width: '90vw', padding: '1vw', backgroundColor: 'white' }}>
    <Panel
      variant={select('Variant', PanelVariant, PanelVariant.fill)}
      title={text('Title', 'Medisinsk fødselsregister (MFR)')}
      icon={<Icon svgIcon={Envelope} size={IconSize.XSmall} />}
    >
      <p>
        {
          'Dolor sit nisi exercitation esse sint et excepteur commodo officia qui exercitation. Ad excepteur laboris laboris Lorem. Occaecat aliquip cupidatat pariatur enim est eiusmod laboris ea nulla dolore ullamco dolore nostrud proident. Irure in eu irure excepteur sit exercitation aliquip deserunt adipisicing ullamco nulla elit culpa culpa.'
        }
      </p>
    </Panel>
  </div>
));

stories.add('Avatar og detaljer', () => (
  <div style={{ width: '90vw', padding: '1vw', backgroundColor: 'white' }}>
    <Panel
      variant={select('Variant', PanelVariant, PanelVariant.fill)}
      title={text('Title', 'Medisinsk fødselsregister (MFR)')}
      icon={<Avatar variant="black">{'Line Danser'}</Avatar>}
    >
      <div>
        <Button htmlMarkup="a" target="_blank" href="https://www.facebook.com/people/Line-Danser/100007422643849/">
          {'Line Danser'}
        </Button>
        <span>{' Lorem culpa esse dolore cillum minim qui minim aliquip eu laborum voluptate.'}</span>
      </div>
    </Panel>
  </div>
));

stories.add('Status', () => (
  <div style={{ width: '90vw', padding: '1vw', backgroundColor: 'white' }}>
    <Panel
      status={select('Status', PanelStatus, PanelStatus.normal)}
      statusMessage={text('Status message', 'Dette er en status tekst')}
      title={text('Title', 'Medisinsk fødselsregister (MFR)')}
      url={text('url', 'https://www.helsenorge.no/')}
    />
  </div>
));
