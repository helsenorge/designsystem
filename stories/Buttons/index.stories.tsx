import React from 'react';

import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

import { ButtonVariants } from '../../src/constants';
import ActionButton from '../../src/elements/ActionButton';

const actionButtonVariants = [ButtonVariants.Primary, ButtonVariants.Secondary, ButtonVariants.Tertiary];

stories.add('ActionButton', () => (
  <ActionButton
    disabled={boolean('Disabled', false)}
    variant={select('Variant', actionButtonVariants, actionButtonVariants[0])}>
      {text('Text', 'ActionButton')}
  </ActionButton>
));