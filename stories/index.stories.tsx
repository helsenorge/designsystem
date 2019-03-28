import React from 'react';

import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';

import { ButtonVariants, IconSizes } from '../src/constants';
import ActionButton from '../src/elements/ActionButton';
import DisplayButton from '../src/elements/DisplayButton';
import Icon from '../src/elements/Icon';

storiesOf('Buttons/ActionButton', module)
  .add('with text', () => <ActionButton onClick={action('clicked')}>Hello World</ActionButton>)
  .add('secondary variant with text', () => (
    <ActionButton variant={ButtonVariants.Secondary} onClick={action('clicked')}>
    Hello World
    </ActionButton>
  ));

storiesOf('Buttons/DisplayButton', module)
    .add('with text', () => <DisplayButton>Hello World</DisplayButton>);

storiesOf('Icon', module)
    .add('calendar', () => <Icon size={IconSizes.Huge}>calendar</Icon>)
