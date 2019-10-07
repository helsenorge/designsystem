import React from 'react';

import {text, select, boolean, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import Stacker from '../../.storybook/Stacker/Stacker';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

import {ConfirmationButton} from '../../src/components/ConfirmationButton';
import {Icon} from '../../src/components/Icons';

stories.add('ConfirmationButton', (): JSX.Element => (
    <ConfirmationButton
      iconLeft={<Icon size={32} color="white">lock</Icon>}
      variant={select('variant', ['primary', 'secondary', 'tertiary'], 'primary')}
      isLoading={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}
      >
      {text('text', 'ConfirmationButton')}
    </ConfirmationButton>
));

stories.add('ConfirmationButton (all variants)', (): JSX.Element => (
  <Stacker>
    <ConfirmationButton
      variant="primary"
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