import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Slider from './Slider';
import { withA11y } from '@storybook/addon-a11y';

const stories = storiesOf('Slider', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div style={{ width: '30rem' }}>
    <Slider title={'Steps: 100'} labelLeft={'left'} labelRight={'right'} step={1} />
    <Slider title={'Steps: 10'} step={10} />
    <Slider title={'Steps: 3'} step={50} />
    <Slider title={'Disabled'} disabled={true} />
  </div>
));
