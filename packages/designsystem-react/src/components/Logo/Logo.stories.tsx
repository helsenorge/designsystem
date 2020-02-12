import React from 'react';
import {withKnobs, text, select, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Logo from './Logo';
import {allPaletteNamesWithNegatives} from '../../../.storybook/knobs';

const stories = storiesOf('Logo', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Logo
    color={select('Color', allPaletteNamesWithNegatives, 'black')}
    size={number('Size', 300)}
    variant={select('Variant', ['original', 'byline', 'square'], 'original')}
  />
));
