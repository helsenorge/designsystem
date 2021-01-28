import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Spacer from './Spacer';
import { withA11y } from '@storybook/addon-a11y';

const stories = storiesOf('Spacer', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div style={{ width: '20rem' }}>
    <p>{'3xs'}</p>
    <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
      <Spacer size={'3xs'} />
    </div>
    <p>{'2xs'}</p>
    <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
      <Spacer size={'2xs'} />
    </div>
    <p>{'xs'}</p>
    <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
      <Spacer size={'xs'} />
    </div>
    <p>{'s'}</p>
    <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
      <Spacer size={'s'} />
    </div>
    <p>{'m'}</p>
    <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
      <Spacer size={'m'} />
    </div>
    <p>{'l'}</p>
    <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
      <Spacer size={'l'} />
    </div>
    <p>{'xl'}</p>
    <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
      <Spacer size={'xl'} />
    </div>
    <p>{'2xl'}</p>
    <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
      <Spacer size={'2xl'} />
    </div>
    <p>{'3xl'}</p>
    <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
      <Spacer size={'3xl'} />
    </div>
    <p>{'4xl'}</p>
    <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
      <Spacer size={'4xl'} />
    </div>
    <p>{'5xl'}</p>
    <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
      <Spacer size={'5xl'} />
    </div>
    <p>{'6xl'}</p>
    <div style={{ backgroundColor: 'lightgray', marginBottom: '0.25rem' }}>
      <Spacer size={'6xl'} />
    </div>
  </div>
));
