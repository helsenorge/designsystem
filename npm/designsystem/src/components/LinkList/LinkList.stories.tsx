import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { allPaletteNames } from '../../../.storybook/knobs';
import { allLinkListSizes } from '../../../.storybook/knobs';
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
      size={select('Size', allLinkListSizes, 'medium')}
      color={select('Color', allPaletteNames, 'blueberry')}
      topBorder={boolean('Top border', true)}
      bottomBorder={boolean('Bottom border', true)}
    >
      <LinkList.Link>Innhold A-Å</LinkList.Link>
      <LinkList.Link>
        Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og
        bidra til en god fordøyelse. (Eksempel på wrapping av tekst)
      </LinkList.Link>
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
      size={select('Size', allLinkListSizes, 'medium')}
      color="cherry"
      topBorder={boolean('Top border', true)}
      bottomBorder={boolean('Bottom border', true)}
    >
      <LinkList.Link icon={<Icon svgIcon={AlarmClock} />}>Innhold A-Å</LinkList.Link>
      <LinkList.Link icon={<Icon svgIcon={PaperPlane} />}>English</LinkList.Link>
    </LinkList>
  </div>
));
