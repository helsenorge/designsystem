import React from 'react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Loader from './Loader';
import {allPaletteNames} from '../../../.storybook/knobs';

const stories = storiesOf('Loader', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Loader
    size={select('Size (does not work properly)', ['tiny', 'small', 'medium', 'large'], 'tiny')}
    color={select('Color', allPaletteNames, 'neutral')}
  />
));

stories.add('All sizes', () => (
  <div style={{display: 'grid', gridGap: '2rem'}}>
    <Loader size="tiny" color={select('Color', allPaletteNames, 'neutral')} />
    <Loader size="small" color={select('Color', allPaletteNames, 'neutral')} />
    <Loader size="medium" color={select('Color', allPaletteNames, 'neutral')} />
    <Loader size="large" color={select('Color', allPaletteNames, 'neutral')} />
  </div>
));
