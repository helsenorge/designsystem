import React from 'react';
import {withKnobs, text, select, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Logo from './Logo';
import {palette, Colors} from '../../theme';

const stories = storiesOf('Logo', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Logo
    color={select('Color', Object.keys(palette), 'wheelChair') as Colors}
    size={number('Size', 300)}
    variant={select('Variant', ['original', 'byline', 'square'], 'original')}
  />
));
