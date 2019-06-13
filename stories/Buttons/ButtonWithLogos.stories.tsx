import React from 'react';

import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

import {ButtonWithLogos} from '../../src/components/ButtonWithLogos';

stories.add('ButtonWithLogos', (): JSX.Element => (
  <ButtonWithLogos
    disabled={boolean('disabled', false)}>
    {text('text', 'ButtonWithLogos')}
  </ButtonWithLogos>
));