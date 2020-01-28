import React from 'react';
import {withKnobs, select, boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import FunctionButton from './FunctionButton';
import {Icon} from '../../..';
import {allIcons} from '../../../../.storybook/knobs';

const stories = storiesOf('Buttons/FunctionButton', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <FunctionButton
    variant={select('Variant', ['primary', 'secondary', 'tertiary'], 'primary')}
    disabled={boolean('Disabled', false)}
    href={text('Href (a tag only)', '')}
    isNegative={boolean('Negative', false)}
    leftIcon={<Icon>{select('Icon', allIcons, 'eye')}</Icon>}
    asTag={select('As tag', ['button', 'a'], 'button')}>
    {text('Text', 'FunctionButton')}
  </FunctionButton>
));

stories.add('All variants', () => (
  <>
    <FunctionButton
      leftIcon={<Icon>{select('Icon', allIcons, 'eye')}</Icon>}
      variant="primary"
      disabled={boolean('Disabled', false)}>
      {text('Text (primary)', 'FunctionButton')}
    </FunctionButton>
    <FunctionButton
      leftIcon={<Icon>{select('Icon', allIcons, 'eye')}</Icon>}
      variant="secondary"
      disabled={boolean('Disabled', false)}>
      {text('Text (secondary)', 'FunctionButton')}
    </FunctionButton>
    <FunctionButton
      leftIcon={<Icon>{select('Icon', allIcons, 'eye')}</Icon>}
      variant="tertiary"
      disabled={boolean('Disabled', false)}>
      {text('Text (tertiary)', 'FunctionButton')}
    </FunctionButton>
  </>
));
