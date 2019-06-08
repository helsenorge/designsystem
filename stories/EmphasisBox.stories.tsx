import React from 'react';

import {text, select, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const stories = storiesOf('Uncategorized', module);
stories.addDecorator(withKnobs);

import EmphasisBox, { EmphasisBoxColors }from '../src/components/finished/EmphasisBox';

const emphasisBoxColors = {...EmphasisBoxColors, None: 'None'}

stories.add('EmphasisBox', (): JSX.Element => (
  <EmphasisBox color={select('color', emphasisBoxColors, emphasisBoxColors.None)}>
    <h1>{text('text', 'EmphasisBox')}</h1>
  </EmphasisBox>
));