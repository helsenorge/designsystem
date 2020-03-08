import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Expander from './Expander';
import ExpanderList from './ExpanderList';
import {Icon} from '../..';

const stories = storiesOf('Expander', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div
    style={{
      width: '40rem',
    }}>
    <ExpanderList color="cherry">
      <Expander icon={<Icon type="alarmClock" />} title={<Expander.Title>Title</Expander.Title>}></Expander>
      <Expander icon={<Icon type="alarmClock" />} title={<Expander.Title>Title</Expander.Title>}></Expander>
      <Expander icon={<Icon type="alarmClock" />} title={<Expander.Title>Title</Expander.Title>}></Expander>
      <Expander title={<Expander.Title>Title</Expander.Title>}></Expander>
    </ExpanderList>
  </div>
));
