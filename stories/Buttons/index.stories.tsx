import React from 'react';

import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import logoLeft from '../../src/images/icon_pasientreiser_white.svg';
import logoRight from '../../src/images/nav_arrow_right.svg';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

import { ButtonVariants } from '../../src/constants';
import ActionButton from '../../src/components/finished/ActionButton';
import ButtonWithLogos from '../../src/components/finished/ButtonWithLogos';

const actionButtonVariants = [ButtonVariants.Primary, ButtonVariants.Secondary, ButtonVariants.Tertiary];

stories.add('ActionButton', (): JSX.Element => (
  <ActionButton
    disabled={boolean('Disabled', false)}
    variant={select('Variant', actionButtonVariants, actionButtonVariants[0])}>
    {text('Text', 'ActionButton')}
  </ActionButton>
));

stories.add('ButtonWithLogos', (): JSX.Element => (
  <ButtonWithLogos
    logoLeft={logoLeft}
    logoRight={logoRight}
    disabled={boolean('Disabled', false)}>
    {text('Text', 'ButtonWithLogos')}
  </ButtonWithLogos>
));