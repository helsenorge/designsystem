import React from 'react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Textarea from './Textarea';
import { withA11y } from '@storybook/addon-a11y';

const stories = storiesOf('Textarea', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div style={{ width: '20rem' }}>
    <Textarea placeholder="Dette er en placeholder" />
  </div>
));

stories.add('Max characters', () => (
  <div style={{ paddingTop: 50 }}>
    <div style={{ display: 'flex', width: '50rem' }}>
      <Textarea max={10} gutterBottom />
    </div>

    <div style={{ display: 'flex', width: '40rem' }}>
      <Textarea max={100} />
    </div>

    <div style={{ width: '20rem' }}>
      <Textarea max={100} defaultValue="test" />
    </div>
  </div>
));

stories.add('Disabled', () => (
  <>
    <div style={{ width: '20rem' }}>
      <Textarea disabled placeholder={'This is a placeholder'} gutterBottom />
    </div>
    <div style={{ width: '20rem' }}>
      <Textarea disabled defaultValue={`This is a defaultValue`} />
    </div>
  </>
));

stories.add('Transparent', () => (
  <div style={{ width: '25rem', background: '#e4f7f9' }}>
    <Textarea
      max={150}
      transparent
      defaultValue={`It is not the fart that kills you, it's the smell
- Petter Solberg`}
    />
  </div>
));

stories.add('Modes', () => (
  <div style={{ width: '25rem', background: '#e4f7f9' }}>
    <Textarea
      max={150}
      defaultValue={`It is not the fart that kills you, it's the smell
- Petter Solberg`}
      mode='onBlueberry'
    />
  </div>
));
