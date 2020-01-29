import React from 'react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import StartButton from './StartButton';
import {Icon} from '../../Icons';
import {allIcons} from '../../../../.storybook/knobs';

const stories = storiesOf('Buttons/StartButton', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <StartButton variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}>
    {text('Text', 'StartButton')}
  </StartButton>
));
