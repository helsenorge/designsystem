import React from 'react';
import {withKnobs, text, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import LinkList from './LinkList';
import {Icon} from '../Icons/Icon';

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
      <LinkList.Link>Innhold A-Å</LinkList.Link>
      <LinkList.Link>
        English (This is a super long text just so you can observe how it will wrap on a multiline context)
      </LinkList.Link>
    </LinkList>
  </div>
));

stories.add('With icon', () => (
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
      <LinkList.Link icon={<Icon type="alarmClock" />}>Innhold A-Å</LinkList.Link>
      <LinkList.Link icon={<Icon type="paperPlane" />}>English</LinkList.Link>
    </LinkList>
  </div>
));
