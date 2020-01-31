import React from 'react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Badge from './Badge';
import {palette, Colors} from '../../theme';

const stories = storiesOf('Badge', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Badge color={select('Color', Object.keys(palette), 'wheelChair') as Colors}>{text('Text', '1')}</Badge>
));
