import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import StatusDot, { StatusDotVariant } from './StatusDot';
import { withA11y } from '@storybook/addon-a11y';

const stories = storiesOf('StatusDot', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div style={{ width: '20rem' }}>
    <StatusDot variant={select('Variant', StatusDotVariant, StatusDotVariant.info)} text={text('Text', 'StatusDot Text')} />
  </div>
));

stories.add('All types', () => (
  <div style={{ width: '20rem' }}>
    <p>{'info'}</p>
    <StatusDot variant={StatusDotVariant.info} text="Info" />
    <p>{'warning'}</p>
    <StatusDot variant={StatusDotVariant.warning} text="Warning" />
    <p>{'alert'}</p>
    <StatusDot variant={StatusDotVariant.alert} text="Alert" />
    <p>{'cancelled'}</p>
    <StatusDot variant={StatusDotVariant.cancelled} text="Cancelled" />
    <p>{'active'}</p>
    <StatusDot variant={StatusDotVariant.active} text="Active" />
    <p>{'transparent'}</p>
    <StatusDot variant={StatusDotVariant.transparent} text="Transparent" />
    <p>{'recurring'}</p>
    <StatusDot variant={StatusDotVariant.recurring} text="Recurring" />
    <p>{'group'}</p>
    <StatusDot variant={StatusDotVariant.group} text="Group" />
    <p>{'info no text'}</p>
    <StatusDot variant={StatusDotVariant.info} text="" />
  </div>
));
