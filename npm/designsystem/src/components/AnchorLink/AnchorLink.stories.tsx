import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import AnchorLink from './AnchorLink';
import { withA11y } from '@storybook/addon-a11y';

import './../../scss/typography.module.scss';

const stories = storiesOf('AnchorLink', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div style={{ width: '20rem' }}>
    <AnchorLink href={text('Href', '/test')} target={'_self'}>
      {text('Text', 'Anchorlink tekst')}
    </AnchorLink>
    <br />
    <br />
    <AnchorLink href={text('Href', '/test')} target={'_self'}>
      {
        'Eiusmod veniam reprehenderit dolore magna tempor dolor reprehenderit reprehenderit ullamco sit in nulla qui. (Lang tekst - Skal wrappe).'
      }
    </AnchorLink>
  </div>
));

stories.add('External', () => (
  <div style={{ width: '20rem' }}>
    <AnchorLink href={text('Href', '/test')} target={'_blank'}>
      {text('Text', 'Anchorlink tekst')}
    </AnchorLink>
    <br />
    <br />
    <AnchorLink href={text('Href', '/test')} target={'_blank'}>
      {
        'Eiusmod veniam reprehenderit dolore magna tempor dolor reprehenderit reprehenderit ullamco sit in nulla qui. (Lang tekst - Skal wrappe).'
      }
    </AnchorLink>
  </div>
));
