import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';

const stories = storiesOf('Avatar', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => <Avatar selected={boolean('Selected', false)}>{text('Name', 'Line Danser')}</Avatar>);
