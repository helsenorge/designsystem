import React from 'react';
import {withKnobs, select, boolean, number, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Icon from '.';
import Medicine from './Medicine';
import {allPaletteNames} from '../../../.storybook/knobs';

const stories = storiesOf('Icon', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Icon
    svgIcon={Medicine}
    isHovered={boolean('Is hovered', false)}
    size={number('Size', 48)}
    color={text('Color', 'black')}
  />
));
