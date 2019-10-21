import React from 'react';

import {text, select, boolean, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import Stacker from '../../.storybook/Stacker/Stacker';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

import {ConfirmationButton} from '../../src/components/ConfirmationButton';

const buttonVariants = {
  primary: null,
  secondary: 'secondary',
  tertiary: 'tertiary'
}

stories.add('ConfirmationButton', (): JSX.Element => (
    <ConfirmationButton
      variant={select('variant', buttonVariants, buttonVariants.primary)}
      isLoading={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}
      >
      {text('text', 'ConfirmationButton')}
    </ConfirmationButton>
));

stories.add('ConfirmationButton (all variants)', (): JSX.Element => (
  <Stacker vertical={boolean('vertically stacking', false)}>
    <ConfirmationButton
      disabled={boolean('disabled', false)}
      >
      Primary
    </ConfirmationButton>
    <ConfirmationButton
      variant="secondary"
      disabled={boolean('disabled', false)}
      >
      Secondary
    </ConfirmationButton>
    <ConfirmationButton
      variant="tertiary"
      disabled={boolean('disabled', false)}
      >
      Tertiary
    </ConfirmationButton>
  </Stacker>
));