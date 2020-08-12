import React from 'react';
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import ExpanderList from './ExpanderList';
import LinkList from '../LinkList';
import Title from '../Title';
import Icon from '../Icons';
import Avatar from '../Icons/Avatar';
import PaperPlane from '../Icons/PaperPlane';
import AlarmClock from '../Icons/AlarmClock';
import {allPaletteNames} from '../../../.storybook/knobs';

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
        Some major content/text about <a href="#">certain illness here.</a>. Note that the anchors are not styled by
        default. The content is free from styling.
      </ExpanderList.Expander>
      <ExpanderList.Expander title="Health anxiety">
        Some major content/text about certain illness here.
      </ExpanderList.Expander>
      <ExpanderList.Expander title="Brain damage (This is a super long text just so you can observe how it will wrap on a multiline context)">
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
      <ExpanderList.Expander icon={<Icon svgIcon={Avatar} />} title="Cognitive therapy">
        Some major content/text about certain illness here.
      </ExpanderList.Expander>
      <ExpanderList.Expander icon={<Icon svgIcon={PaperPlane} />} title="Health anxiety">
        Some major content/text about certain illness here.
      </ExpanderList.Expander>
      <ExpanderList.Expander icon={<Icon svgIcon={AlarmClock} />} title="Brain damage">
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
          <LinkList.Link href="/firstaid">First aid</LinkList.Link>
          <LinkList.Link href="/secondaid">Second aid</LinkList.Link>
          <LinkList.Link href="/thirdaid">Third aid</LinkList.Link>
        </LinkList>
      </ExpanderList.Expander>
    </ExpanderList>
  </div>
));
