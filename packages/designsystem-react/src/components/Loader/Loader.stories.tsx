import React from 'react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Loader from './Loader';
import {allPaletteNames} from '../../../.storybook/knobs';
import {withA11y} from '@storybook/addon-a11y';

const stories = storiesOf('Loader', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <Loader
    size={select('Size (does not work properly)', ['tiny', 'small', 'medium', 'large'], 'tiny')}
    color={select('Color', allPaletteNames, 'blueberry')}
  />
));

stories.add('All sizes', () => (
  <div style={{display: 'grid', gridGap: '2rem'}}>
    <Loader size="tiny" color={select('Color', allPaletteNames, 'blueberry')} />
    <Loader size="small" color={select('Color', allPaletteNames, 'blueberry')} />
    <Loader size="medium" color={select('Color', allPaletteNames, 'blueberry')} />
    <Loader size="large" color={select('Color', allPaletteNames, 'blueberry')} />
  </div>
));
