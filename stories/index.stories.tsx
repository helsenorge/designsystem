import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ActionButton from '../src/elements/ActionButton';

storiesOf('Button', module)
  .add('with text', () => <ActionButton onClick={action('clicked')}>Hello World</ActionButton>);