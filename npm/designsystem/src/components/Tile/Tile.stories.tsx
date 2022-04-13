import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, select, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Tile from './Tile';
import Icon, { IconSize } from '../Icons';
import AlarmClock from '../Icons/AlarmClock';
import { allTitleTags } from '../../../.storybook/knobs';

const stories = storiesOf('Tile', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <Tile
    fixed={boolean('Fixed width', false)}
    icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
    highlighted={boolean('Highlighted', false)}
    href="https://vg.no"
    title={<Tile.Title htmlMarkup={select('HtmlMarkup', allTitleTags, 'h1')}>{text('Title', 'Inbox')}</Tile.Title>}
    description={text(
      'Description',
      'Førstehjelp de første minuttene etter at en akutt sykdom eller skade har oppstått er livsviktig og minsker risikoen for langtidsskader.'
    )}
  />
));

stories.add('External', () => (
  <Tile
    fixed={boolean('Fixed width', false)}
    icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
    highlighted={boolean('Highlighted', false)}
    href="https://helsenorge.no"
    title={<Tile.Title htmlMarkup={select('HtmlMarkup', allTitleTags, 'h1')}>{text('Title', 'External')}</Tile.Title>}
  />
));

stories.add('Wrapped container', () => (
  <div
    style={{
      width: `${number('Container width', 60)}rem`,
      height: '100%',
      padding: '2rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 33.3%)',
      gridGap: '1.5rem',
    }}
  >
    <Tile
      href="https://helsenorge.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Hva skal du si når du ringer 113?</Tile.Title>}
      description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
    />
    <Tile
      href="https://helsenorge.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Hva skal du si når du ringer 113?</Tile.Title>}
      description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
    />
    <Tile
      href="https://helsenorge.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Hva skal du si når du ringer 113?</Tile.Title>}
      description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
    />
    <Tile
      href="https://helsenorge.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Hva skal du si når du ringer 113?</Tile.Title>}
      description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
    />
    <Tile
      href="https://helsenorge.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Hva skal du si når du ringer 113?</Tile.Title>}
      description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
    />
    <Tile
      href="https://helsenorge.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Hva skal du si når du ringer 113?</Tile.Title>}
      description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
    />
    <Tile
      href="https://helsenorge.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Europeisk helsetrygdekort (nav)</Tile.Title>}
    />
    <Tile
      href="https://helsenorge.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Europeisk helsetrygdekort (nav)</Tile.Title>}
    />
  </div>
));
