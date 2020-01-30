import React from 'react';
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import ConfirmationButton from './ConfirmationButton';
import Icon from '../../Icons';
import {allIcons} from '../../../../.storybook/knobs';

const stories = storiesOf('Buttons/ConfirmationButton', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <ConfirmationButton
    variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    disabled={boolean('Disabled', false)}
    href={text('Href (a tag only)', '')}
    htmlTag={select('HTML tag', ['button', 'a'], 'button')}>
    {text('Text', 'ConfirmationButton')}
  </ConfirmationButton>
));

stories.add('With icon', () => (
  <ConfirmationButton
    variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    disabled={boolean('Disabled', false)}>
    {text('Text', 'ConfirmationButton')}
  </ConfirmationButton>
));
