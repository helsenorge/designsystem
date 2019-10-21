import React from 'react';

import {text, select, boolean, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import Stacker from '../../.storybook/Stacker/Stacker';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

import {StartButton} from '../../src/components/StartButton';

const buttonVariants = {
  primary: null,
  secondary: 'secondary',
  tertiary: 'tertiary'
}

stories.add('StartButton', (): JSX.Element => (
    <StartButton
      variant={select('variant', buttonVariants, buttonVariants.primary)}
      isLoading={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}
      >
      {text('text', 'StartButton')}
    </StartButton>
));

// stories.add('StartButton with icon', (): JSX.Element => (
//     <StartButton
//       iconLeft={<Icon size={32} color="white">lock</Icon>}
//       variant={select('variant', ['primary', 'secondary', 'tertiary'], 'primary')}
//       isLoading={boolean('isLoading', false)}
//       disabled={boolean('disabled', false)}
//       >
//       {text('text', 'StartButton')}
//     </StartButton>
// ));

stories.add('StartButton (all variants)', (): JSX.Element => (
  <Stacker>
    <StartButton
      disabled={boolean('disabled', false)}
      >
      Primary
    </StartButton>
    <StartButton
      variant="secondary"
      disabled={boolean('disabled', false)}
      >
      Secondary
    </StartButton>
    <StartButton
      variant="tertiary"
      disabled={boolean('disabled', false)}
      >
      Tertiary
    </StartButton>
  </Stacker>
));