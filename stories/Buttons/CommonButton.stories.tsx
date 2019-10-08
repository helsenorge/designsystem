import React from 'react';

import {text, select, boolean, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import Stacker from '../../.storybook/Stacker/Stacker';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

import {CommonButton} from '../../src/components/CommonButton';
import {Icon} from '../../src/components/Icons';

stories.add('CommonButton', (): JSX.Element => (
    <CommonButton
      variant={select('variant', ['primary', 'secondary', 'tertiary'], 'primary')}
      isLoading={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}
      >
      {text('text', 'CommonButton')}
    </CommonButton>
));

stories.add('CommonButton with icon', (): JSX.Element => (
    <CommonButton
      iconRight={<Icon size={32} color="white">lock</Icon>}
      variant={select('variant', ['primary', 'secondary', 'tertiary'], 'primary')}
      isLoading={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}
      >
      {text('text', 'CommonButton')}
    </CommonButton>
));

stories.add('CommonButton (all variants)', (): JSX.Element => (
  <Stacker>
    <CommonButton
      variant="primary"
      disabled={boolean('disabled', false)}
      >
      Primary
    </CommonButton>
    <CommonButton
      variant="secondary"
      disabled={boolean('disabled', false)}
      >
      Secondary
    </CommonButton>
    <CommonButton
      variant="tertiary"
      disabled={boolean('disabled', false)}
      >
      Tertiary
    </CommonButton>
  </Stacker>
));