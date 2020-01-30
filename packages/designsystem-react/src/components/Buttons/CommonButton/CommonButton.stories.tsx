import React from 'react';
import {withKnobs, select, boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import CommonButton from './CommonButton';
import {Icon} from '../../..';
import {allIcons} from '../../../../.storybook/knobs';

const stories = storiesOf('Buttons/CommonButton', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <CommonButton
    variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    disabled={boolean('Disabled', false)}
    href={text('Href (a tag only)', '')}
    htmlTag={select('HTML tag', ['button', 'a'], 'button')}
    loading={boolean('Loading', false)}>
    {text('Text', 'CommonButton')}
  </CommonButton>
));

stories.add('With icon', () => (
  <CommonButton
    variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    disabled={boolean('Disabled', false)}>
    <Icon>{select('Left icon', allIcons, 'alarmclock')}</Icon>
    {text('Text', 'CommonButton')}
    <Icon>{select('Right icon', allIcons, 'arrowRight')}</Icon>
  </CommonButton>
));
