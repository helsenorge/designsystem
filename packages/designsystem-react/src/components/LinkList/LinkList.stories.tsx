import React from 'react';
import {withKnobs, text, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import LinkList from './LinkList';
import {Icon} from '../..';

const stories = storiesOf('LinkList', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div
    style={{
      width: '40rem',
    }}>
    <LinkList
      chevron={boolean('Chevron', false)}
      large={boolean('Large', false)}
      color="cherry"
      topBorder={boolean('Top border', true)}
      bottomBorder={boolean('Bottom border', true)}>
      <LinkList.Link icon={<Icon type="alarmClock" />} href="https://vg.no">
        Innhold A-Å
      </LinkList.Link>
      <LinkList.Link icon={<Icon type="paperPlane" />} href="https://db.no">
        English
      </LinkList.Link>
    </LinkList>
  </div>
));
