import React from 'react';

import {select, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

import {StartButton} from '../../src/components/StartButton';

stories.add('StartButton', (): JSX.Element => (
  <StartButton
    variant={select('variant', ['primary', 'secondary', 'tertiary'], 'primary')}>
    {text('text', 'StartButton')}
  </StartButton>
));