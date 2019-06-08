import React from 'react';

import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

import { ButtonVariants } from '../../src/constants';
import { ActionButton } from '../../src/components/ActionButton';

stories.add('ActionButton', (): JSX.Element => (
  <ActionButton
    disabled={boolean('disabled', false)}
    variant={select('variant', ButtonVariants, ButtonVariants.Primary)}>
    {text('text', 'ActionButton')}
  </ActionButton>
));