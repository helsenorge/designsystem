import React from 'react';
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import ConfirmationButton from './ConfirmationButton';
import {Icon} from '../../..';
import {allIcons} from '../../../../.storybook/knobs';

const stories = storiesOf('Buttons/ConfirmationButton', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <ConfirmationButton
    variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    disabled={boolean('Disabled', false)}
    href={text('Href (a tag only)', '')}
    asTag={select('As tag', ['button', 'a'], 'button')}>
    {text('Text', 'ConfirmationButton')}
  </ConfirmationButton>
));

stories.add('With icon', () => (
  <ConfirmationButton
    variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    disabled={boolean('Disabled', false)}
    leftIcon={<Icon>{select('Icon', allIcons, 'eye')}</Icon>}>
    {text('Text', 'ConfirmationButton')}
  </ConfirmationButton>
));

stories.add('All variants', () => (
  <>
    <ConfirmationButton variant="primary" disabled={boolean('Disabled', false)}>
      {text('Text (primary)', 'ConfirmationButton')}
    </ConfirmationButton>
    <ConfirmationButton variant="secondary" disabled={boolean('Disabled', false)}>
      {text('Text (secondary)', 'ConfirmationButton')}
    </ConfirmationButton>
    <ConfirmationButton variant="tertiary" disabled={boolean('Disabled', false)}>
      {text('Text (tertiary)', 'ConfirmationButton')}
    </ConfirmationButton>
  </>
));
