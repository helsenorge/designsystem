import React from 'react';
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import StartButton from './StartButton';
import Icon from '../../Icons';
import {allIcons} from '../../../../.storybook/knobs';
import {action} from '@storybook/addon-actions';

const stories = storiesOf('Buttons/StartButton', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <StartButton
    onClick={action('button-click')}
    variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    disabled={boolean('Disabled', false)}
    href={text('Href (a tag only)', '')}
    htmlTag={select('HTML tag', ['button', 'a'], 'button')}
    loading={boolean('Loading', false)}>
    {text('Text', 'StartButton')}
  </StartButton>
));

stories.add('With icon', () => (
  <StartButton
    variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    disabled={boolean('Disabled', false)}>
    <Icon>{select('Left icon', allIcons, 'alarmclock')}</Icon>
    {text('Text', 'StartButton')}
    <Icon>{select('Right icon', allIcons, 'arrowRight')}</Icon>
  </StartButton>
));
