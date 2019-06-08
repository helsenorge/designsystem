import React from 'react';

import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

import { ButtonVariants } from '../../src/constants';
import DisplayButton from '../../src/components/finished/DisplayButton';

stories.add('DisplayButton', (): JSX.Element => (
  <DisplayButton
    disabled={boolean('disabled', false)}
    variant={select('variant', ButtonVariants, ButtonVariants.Primary)}>
    {text('text', 'DisplayButton')}
  </DisplayButton>
));