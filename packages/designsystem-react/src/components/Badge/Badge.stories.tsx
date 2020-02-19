import React from 'react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Badge from './Badge';
import {allPaletteNames} from '../../../.storybook/knobs';

const stories = storiesOf('Badge', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => <Badge color={select('Color', allPaletteNames, 'neutral')}>{text('Text', '1')}</Badge>);
