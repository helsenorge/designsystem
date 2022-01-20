import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Loader, { Overlay } from './Loader';
import { allPaletteNames } from '../../../.storybook/knobs';
import { withA11y } from '@storybook/addon-a11y';
import Title from '../Title/Title';
import Button from '../Button/Button';

const stories = storiesOf('Loader', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <Loader
    size={select('Size (does not work properly)', ['tiny', 'small', 'medium', 'large'], 'small')}
    color={select('Color', allPaletteNames, 'blueberry')}
  />
));

stories.add('All sizes', () => (
  <div style={{ display: 'grid', gridGap: '2rem' }}>
    <Loader size="tiny" color={select('Color', allPaletteNames, 'blueberry')} />
    <Loader size="small" color={select('Color', allPaletteNames, 'blueberry')} />
    <Loader size="medium" color={select('Color', allPaletteNames, 'blueberry')} />
    <Loader size="large" color={select('Color', allPaletteNames, 'blueberry')} />
  </div>
));

stories.add('Loader is centered', () => (
  <div style={{ width: 300, background: 'white' }}>
    <Loader
      size={select('Size (does not work properly)', ['tiny', 'small', 'medium', 'large'], 'small')}
      color={select('Color', allPaletteNames, 'blueberry')}
      center
    />
  </div>
));

stories.add('Inline', () => (
  <div>
    <Title htmlMarkup="span" appearance="title1">
      {'Søker'}
    </Title>
    <Loader color="black" inline size="tiny" />
  </div>
));

stories.add('Overlay screen', () => (
  <div style={{ width: '100%', height: '200vh' }}>
    <h2>{'Fastlegen din er Arnfinn Nesset ved Orkdal sykehjem'}</h2>
    <Loader
      size={select('Size (does not work properly)', ['tiny', 'small', 'medium', 'large'], 'small')}
      color={select('Color', allPaletteNames, 'black')}
      overlay={Overlay.screen}
    />
  </div>
));

stories.add('Overlay parent', () => (
  <div style={{ width: '100%', height: '100vh' }}>
    <h2>{'Fastlegen din er Arnfinn Nesset ved Orkdal sykehjem'}</h2>
    <div>
      <Title>{'Søknad'}</Title>
      <p style={{ color: 'red' }}>{'Søknad om greier'}</p>
      <Button>{'Lagre'}</Button>
      <Loader
        size={select('Size (does not work properly)', ['tiny', 'small', 'medium', 'large'], 'small')}
        color={select('Color', allPaletteNames, 'black')}
        overlay={Overlay.parent}
      />
    </div>
  </div>
));
