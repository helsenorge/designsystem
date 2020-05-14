import React from 'react';
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import ExpanderList from './ExpanderList';
import LinkList from '../LinkList';
import Icon from '../Icons';
import {allPaletteNames} from '../../../.storybook/knobs';
import {Title} from '../..';

const stories = storiesOf('ExpanderList', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div
    style={{
      width: '40rem',
    }}>
    <ExpanderList
      isOpen={boolean('Is open', false)}
      accordion={boolean('Accordion', false)}
      childPadding={boolean('Child padding', true)}
      color={select('Color', allPaletteNames, 'blueberry')}>
      <ExpanderList.Expander title="Cognitive therapy">
        Some major content/text about certain illness here.
      </ExpanderList.Expander>
      <ExpanderList.Expander title="Health anxiety">
        Some major content/text about certain illness here.
      </ExpanderList.Expander>
      <ExpanderList.Expander title="Brain damage">
        Some major content/text about certain illness here.
      </ExpanderList.Expander>
    </ExpanderList>
  </div>
));

stories.add('With icon', () => (
  <div
    style={{
      width: '40rem',
    }}>
    <ExpanderList isOpen={boolean('Is open', false)} color="cherry">
      <ExpanderList.Expander icon={<Icon type="alarmClock" />} title="Cognitive therapy">
        Some major content/text about certain illness here.
      </ExpanderList.Expander>
      <ExpanderList.Expander icon={<Icon type="paperPlane" />} title="Health anxiety">
        Some major content/text about certain illness here.
      </ExpanderList.Expander>
      <ExpanderList.Expander icon={<Icon type="avatar" />} title="Brain damage">
        Some major content/text about certain illness here.
      </ExpanderList.Expander>
    </ExpanderList>
  </div>
));

stories.add('With LinkList', () => (
  <div
    style={{
      width: '40rem',
    }}>
    <ExpanderList isOpen={boolean('Is open', false)} color="cherry">
      <ExpanderList.Expander title="Cognitive therapy">
        <LinkList color="cherry">
          <LinkList.Link>First aid</LinkList.Link>
          <LinkList.Link>Second aid</LinkList.Link>
          <LinkList.Link>Third aid</LinkList.Link>
        </LinkList>
      </ExpanderList.Expander>
    </ExpanderList>
  </div>
));
