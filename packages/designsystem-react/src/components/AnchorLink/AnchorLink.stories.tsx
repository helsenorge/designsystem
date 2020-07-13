import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import AnchorLink from './AnchorLink';
import {withA11y} from '@storybook/addon-a11y';

import './../../scss/_typography.scss';

const stories = storiesOf('AnchorLink', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div style={{width: '20rem'}}>
    <AnchorLink target={'_self'}>{text('Text', 'link text')}</AnchorLink>
    <br />
    <br />
    <AnchorLink target={'_self'}>{'I am a super long link (it is supposed to wrap!)'}</AnchorLink>
  </div>
));

stories.add('External', () => (
  <div style={{width: '20rem'}}>
    <AnchorLink target={'_blank'}>{text('Text', 'link text')}</AnchorLink>
    <br />
    <br />
    <AnchorLink target={'_blank'}>{'I am a super long link (it is supposed to wrap!)'}</AnchorLink>
  </div>
));

stories.add('anchorlinkWrapper (css module)', () => (
  <div className={'anchorlinkWrapper'} style={{width: '20rem'}}>
    <p>
      {'Lorem ipsum dolor sit '}
      <a href={'#test'} target={'_blank'}>
        {'click me'}
      </a>
      {' amet consectur'}
    </p>
  </div>
));
