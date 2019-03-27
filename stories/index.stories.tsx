import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import ActionButton from '../src/elements/ActionButton';

storiesOf('ActionButton', module)
  .add('with text', () => <ActionButton onClick={action('clicked')}>Hello World</ActionButton>)
  .add('secondary variant with text', () => (
    <ActionButton variant="secondary" onClick={action('clicked')}>
      Hello World
    </ActionButton>
  ));
