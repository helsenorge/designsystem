import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { allPaletteNames } from '../../../.storybook/knobs';
import LinkList from './LinkList';
import Icon from '../Icons';
import AlarmClock from '../Icons/AlarmClock';
import PaperPlane from '../Icons/PaperPlane';

const stories = storiesOf('LinkList', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <LinkList
      chevron={boolean('Chevron', false)}
      large={boolean('Large', false)}
      color={select('Color', allPaletteNames, 'blueberry')}
      topBorder={boolean('Top border', true)}
      bottomBorder={boolean('Bottom border', true)}
    >
      <LinkList.Link>Innhold A-Å</LinkList.Link>
      <LinkList.Link>English (This is a super long text just so you can observe how it will wrap on a multiline context)</LinkList.Link>
    </LinkList>
  </div>
));

stories.add('With icon', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <LinkList
      chevron={boolean('Chevron', false)}
      large={boolean('Large', false)}
      color="cherry"
      topBorder={boolean('Top border', true)}
      bottomBorder={boolean('Bottom border', true)}
    >
      <LinkList.Link icon={<Icon svgIcon={AlarmClock} />}>Innhold A-Å</LinkList.Link>
      <LinkList.Link icon={<Icon svgIcon={PaperPlane} />}>English</LinkList.Link>
    </LinkList>
  </div>
));
