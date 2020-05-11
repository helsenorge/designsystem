import React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import {withKnobs, text, select, boolean, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Tile from './Tile';
import Icon from '../Icons';

const stories = storiesOf('Tile', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <Tile
    fixed={boolean('Fixed width', false)}
    icon={<Icon size={64} type="alarmClock" />}
    highlighted={boolean('Highlighted', false)}
    href="https://vg.no"
    title={<Tile.Title>{text('Title', 'Inbox')}</Tile.Title>}
    description={text('Description', 'Messages between you and your health contacts through Helsenorge.')}
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
    }}>
    <Tile
      href="https://vg.no"
      icon={<Icon size={64} type="alarmClock" />}
      title={<Tile.Title>Titledffdgkdfklgfdlkglkdglkdfkglfssdasdasdsa</Tile.Title>}
      description="Some long description about the service."
    />
    <Tile
      href="https://vg.no"
      icon={<Icon size={64} type="alarmClock" />}
      title={<Tile.Title>Title</Tile.Title>}
      description="Some long description about the service."
    />
    <Tile
      href="https://vg.no"
      icon={<Icon size={64} type="alarmClock" />}
      title={<Tile.Title>Title</Tile.Title>}
      description="Some long description about the service."
    />
    <Tile
      href="https://vg.no"
      icon={<Icon size={64} type="alarmClock" />}
      title={<Tile.Title>Title</Tile.Title>}
      description="Some long description about the service."
    />
    <Tile
      href="https://vg.no"
      icon={<Icon size={64} type="alarmClock" />}
      title={<Tile.Title>Title</Tile.Title>}
      description="Some long description about the service."
    />
    <Tile
      href="https://vg.no"
      icon={<Icon size={64} type="alarmClock" />}
      title={<Tile.Title>Title</Tile.Title>}
      description="Some long description about the service."
    />
    <Tile
      href="https://vg.no"
      icon={<Icon size={64} type="alarmClock" />}
      title={<Tile.Title>Europeisk helsetrygdekort (nav)</Tile.Title>}
    />
    <Tile href="https://vg.no" icon={<Icon size={64} type="alarmClock" />} title={<Tile.Title>Title</Tile.Title>} />
  </div>
));
