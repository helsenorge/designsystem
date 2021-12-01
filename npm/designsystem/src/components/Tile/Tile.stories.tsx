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
    description={text('Description', 'Messages between you and your health contacts through Helsenorge.')}
  />
));

stories.add('External', () => (
  <Tile
    fixed={boolean('Fixed width', false)}
    icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
    highlighted={boolean('Highlighted', false)}
    href="https://vg.no"
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
      href="https://vg.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Titledffdgkdfklgfdlkglkdglkdfkglfssdasdasdsa</Tile.Title>}
      description="Some long description about the service."
    />
    <Tile
      href="https://vg.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Title</Tile.Title>}
      description="Some long description about the service."
    />
    <Tile
      href="https://vg.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Title - quiet long but with separated words at least!</Tile.Title>}
      description="Some long description about the service."
    />
    <Tile
      href="https://vg.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Title</Tile.Title>}
      description="Some long description about the service."
    />
    <Tile
      href="https://vg.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Title</Tile.Title>}
      description="Some long description about the service."
    />
    <Tile
      href="https://vg.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Title</Tile.Title>}
      description="Some long description about the service."
    />
    <Tile
      href="https://vg.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>Europeisk helsetrygdekort (nav)</Tile.Title>}
    />
    <Tile href="https://vg.no" icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />} title={<Tile.Title>Title</Tile.Title>} />
  </div>
));
