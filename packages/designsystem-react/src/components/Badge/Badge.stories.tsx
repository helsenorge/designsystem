import React from 'react';
import {withA11y} from '@storybook/addon-a11y';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Badge from './Badge';
import {allPaletteNames} from '../../../.storybook/knobs';

const stories = storiesOf('Badge', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => <Badge color={select('Color', allPaletteNames, 'blueberry')}>{text('Text', '1')}</Badge>);
