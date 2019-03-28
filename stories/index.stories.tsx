import React from 'react';

import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';

import ActionButton from '../src/elements/ActionButton';
import DisplayButton from '../src/elements/DisplayButton';

storiesOf('Buttons/ActionButton', module)
  .add('with text', () => <ActionButton onClick={action('clicked')}>Hello World</ActionButton>)
  .add('secondary variant with text', () => (
    <ActionButton variant="secondary" onClick={action('clicked')}>
    Hello World
    </ActionButton>
  ));

storiesOf('Buttons/DisplayButton', module)
    .add('with text', () => <DisplayButton>Hello World</DisplayButton>);
