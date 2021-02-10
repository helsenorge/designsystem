import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Slider from './Slider';
import { withA11y } from '@storybook/addon-a11y';

const stories = storiesOf('Slider', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div style={{ width: '20rem' }}>
    <Slider optionLeft={'left'} optionRight={'right'} />
  </div>
));
