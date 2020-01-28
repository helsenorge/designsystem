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
    asTag={select('As tag', ['button', 'a'], 'button')}>
    {text('Text', 'CommonButton')}
  </CommonButton>
));

stories.add('With icon', () => (
  <CommonButton
    variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    disabled={boolean('Disabled', false)}
    leftIcon={<Icon>{select('Icon', allIcons, 'eye')}</Icon>}>
    {text('Text', 'CommonButton')}
  </CommonButton>
));

stories.add('All variants', () => (
  <>
    <CommonButton
      variant="primary"
      disabled={boolean('Disabled', false)}
      asTag={select('As tag', ['button', 'a'], 'button')}>
      {text('Text (primary)', 'CommonButton')}
    </CommonButton>
    <CommonButton
      variant="secondary"
      disabled={boolean('Disabled', false)}
      asTag={select('As tag', ['button', 'a'], 'button')}>
      {text('Text (secondary)', 'CommonButton')}
    </CommonButton>
    <CommonButton
      variant="tertiary"
      disabled={boolean('Disabled', false)}
      asTag={select('As tag', ['button', 'a'], 'button')}>
      {text('Text (tertiary)', 'CommonButton')}
    </CommonButton>
  </>
));
