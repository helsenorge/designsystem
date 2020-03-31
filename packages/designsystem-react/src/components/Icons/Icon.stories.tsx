import React from 'react';
import {withKnobs, text, select, boolean, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Icon from '../Icons';
import {allPaletteNames, allIcons} from '../../../.storybook/knobs';

const stories = storiesOf('Icon', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Icon
    isHovered={boolean('Is hovered', false)}
    size={number('Size', 48)}
    color={select('Color', allPaletteNames, 'black')}
    type={select('Type', allIcons, 'alarmClock')}
  />
));
