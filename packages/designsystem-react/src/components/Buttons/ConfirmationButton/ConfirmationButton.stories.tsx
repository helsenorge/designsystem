import React from 'react';
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import ConfirmationButton from './ConfirmationButton';
import Icon from '../../Icons';
import {allIcons} from '../../../../.storybook/knobs';
import {action} from '@storybook/addon-actions';

const stories = storiesOf('Buttons/ConfirmationButton', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <ConfirmationButton
    onClick={action('button-click')}
    variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    disabled={boolean('Disabled', false)}
    href={text('Href (a tag only)', '')}
    htmlTag={select('HTML tag', ['button', 'a'], 'button')}
    loading={boolean('Loading', false)}>
    {text('Text', 'ConfirmationButton')}
  </ConfirmationButton>
));

stories.add('With icon', () => (
  <ConfirmationButton
    variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    disabled={boolean('Disabled', false)}>
    <Icon>{select('Left icon', allIcons, 'alarmclock')}</Icon>
    {text('Text', 'ConfirmationButton')}
    <Icon>{select('Right icon', allIcons, 'arrowRight')}</Icon>
  </ConfirmationButton>
));
