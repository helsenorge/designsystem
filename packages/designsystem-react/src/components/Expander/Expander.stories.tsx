import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import ExpanderList from './ExpanderList';
import LinkList from '../LinkList';

const stories = storiesOf('ExpanderList', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div
    style={{
      width: '40rem',
    }}>
    <ExpanderList color="cherry">
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

stories.add('With LinkList', () => (
  <div
    style={{
      width: '40rem',
    }}>
    <ExpanderList color="cherry">
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
