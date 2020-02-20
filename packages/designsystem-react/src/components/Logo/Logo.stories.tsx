import React from 'react';
import {withKnobs, text, select, number, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Logo from './Logo';
import {allPaletteNames} from '../../../.storybook/knobs';

const stories = storiesOf('Logo', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Logo
    color={select('Color', allPaletteNames, 'blueberry')}
    size={number('Size', 300)}
    byline={boolean('Byline', false)}
  />
));
