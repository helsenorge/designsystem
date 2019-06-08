import React from 'react';

import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import logoLeft from '../../src/images/icon_pasientreiser_white.svg';
import logoRight from '../../src/images/nav_arrow_right.svg';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

import {ButtonWithLogos} from '../../src/components/ButtonWithLogos';

stories.add('ButtonWithLogos', (): JSX.Element => (
  <ButtonWithLogos
    logoLeft={logoLeft}
    logoRight={logoRight}
    disabled={boolean('disabled', false)}>
    {text('text', 'ButtonWithLogos')}
  </ButtonWithLogos>
));