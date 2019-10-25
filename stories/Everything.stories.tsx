import React from 'react';

import {text, select, boolean, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import Stacker from '../.storybook/Stacker/Stacker';

const stories = storiesOf('Evertyhing', module);
stories.addDecorator(withKnobs);


import {CommonButton} from '../src/components/CommonButton';
import {ActionButton} from '../src/components/ActionButton';
import { ConfirmationButton } from '../src/components/ConfirmationButton';
import { StartButton } from '../src/components/StartButton';
import {Icon} from '../src/components/Icons';

import '../src/styling/helsenorge.scss';
import { Palette } from '../src/constants';

const buttonVariants = {
  primary: undefined,
  secondary: 'secondary',
  tertiary: 'tertiary'
}

stories.add('CommonButton', (): JSX.Element => (
    <CommonButton
      variant={select('variant', buttonVariants, buttonVariants.primary)}
      isLoading={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}
      >
      {text('text', 'CommonButton')}
    </CommonButton>
));

stories.add('CommonButton (all variants)', (): JSX.Element => (
  <Stacker vertical={boolean('vertically stacking', false)}>
    <CommonButton
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

stories.add('CommonButton (all variants with icons)', (): JSX.Element => (
  <Stacker vertical={boolean('vertically stacking', true)}>
    <CommonButton
      disabled={boolean('disabled', false)}
      >
      Primary
    </CommonButton>
    <CommonButton
      disabled={boolean('disabled', false)}
      >
      Primary
      <Icon>lock</Icon>
    </CommonButton>
    <CommonButton
      disabled={boolean('disabled', false)}
      >
      <Icon color={Palette.Bone}>lock</Icon>
      Primary
    </CommonButton>
    <CommonButton
      variant="secondary"
      disabled={boolean('disabled', false)}
      >
      <Icon color={Palette.Surgical500}>lock</Icon>
      Logg inn
      <Icon color={Palette.Surgical500}>arrowRight</Icon>
    </CommonButton>
    <CommonButton
      disabled={boolean('disabled', false)}
      >
      <Icon>lock</Icon>
      Primary
      <Icon>arrowRight</Icon>
    </CommonButton>
    <CommonButton
      disabled={boolean('disabled', false)}
      >
      <Icon>lock</Icon>
      Primary
      Tullball
      <Icon>lock</Icon>
      Fjas
      <Icon>lock</Icon>
    </CommonButton>
  </Stacker>
));

stories.add('ActionButton', (): JSX.Element => (
    <ActionButton
      variant={select('variant', buttonVariants, buttonVariants.primary)}
      isLoading={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}
      >
      {text('text', 'ActionButton')}
    </ActionButton>
));

stories.add('ActionButton (all variants)', (): JSX.Element => (
  <Stacker vertical={boolean('vertically stacking', false)}>
    <ActionButton
      disabled={boolean('disabled', false)}
      >
      Primary
    </ActionButton>
    <ActionButton
      variant="secondary"
      disabled={boolean('disabled', false)}
      >
      Secondary
    </ActionButton>
    <ActionButton
      variant="tertiary"
      disabled={boolean('disabled', false)}
      >
      Tertiary
    </ActionButton>
  </Stacker>
));

stories.add('ConfirmationButton', (): JSX.Element => (
    <ConfirmationButton
      variant={select('variant', buttonVariants, buttonVariants.primary)}
      isLoading={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}
      >
      {text('text', 'ConfirmationButton')}
    </ConfirmationButton>
));

stories.add('ConfirmationButton (all variants)', (): JSX.Element => (
  <Stacker vertical={boolean('vertically stacking', false)}>
    <ConfirmationButton
      disabled={boolean('disabled', false)}
      >
      Primary
    </ConfirmationButton>
    <ConfirmationButton
      variant="secondary"
      disabled={boolean('disabled', false)}
      >
      Secondary
    </ConfirmationButton>
    <ConfirmationButton
      variant="tertiary"
      disabled={boolean('disabled', false)}
      >
      Tertiary
    </ConfirmationButton>
  </Stacker>
));

stories.add('StartButton', (): JSX.Element => (
    <StartButton
      variant={select('variant', buttonVariants, buttonVariants.primary)}
      isLoading={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}
      >
      {text('text', 'StartButton')}
    </StartButton>
));

stories.add('StartButton (all variants)', (): JSX.Element => (
  <Stacker vertical={boolean('vertically stacking', false)}>
    <StartButton
      disabled={boolean('disabled', false)}
      >
      Primary
    </StartButton>
    <StartButton
      variant="secondary"
      disabled={boolean('disabled', false)}
      >
      Secondary
    </StartButton>
    <StartButton
      variant="tertiary"
      disabled={boolean('disabled', false)}
      >
      Tertiary
    </StartButton>
  </Stacker>
));

stories.add(
  'Typography',
  (): JSX.Element => (
    <div>
      <h1>Heading one (H1)</h1>
      <h2>Heading two (H2)</h2>
      <h3>Heading three (H3)</h3>
      <h4>Heading four (H4)</h4>
      <h5>Heading five (H5)</h5>
    </div>
  ),
);