import React from 'react';
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Logo from './Logo';
import { allPaletteNames } from '../../../.storybook/knobs';
import { withA11y } from '@storybook/addon-a11y';

const stories = storiesOf('Logo', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Original', () => (
  <Logo color={select('Color', allPaletteNames, 'blueberry')} size={number('Size', 300)} byline={boolean('Byline', false)} />
));

stories.add('Byline', () => (
  <Logo color={select('Color', allPaletteNames, 'blueberry')} size={number('Size', 300)} byline={boolean('Byline', true)} />
));
