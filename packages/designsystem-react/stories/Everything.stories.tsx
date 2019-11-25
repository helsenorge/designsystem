import React from 'react';

import {text, select, boolean, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import Stacker from '../.storybook/Stacker/Stacker';

const stories = storiesOf('Evertyhing', module);
stories.addDecorator(withKnobs);

import {CommonButton} from '../src/components/CommonButton';
import {ActionButton} from '../src/components/ActionButton';
import {ConfirmationButton} from '../src/components/ConfirmationButton';
import {StartButton} from '../src/components/StartButton';
import {Icon} from '../src/components/Icons';
import {Diveboard} from '../src/components/Diveboard';

import {Palette} from '../src/constants';

import '../../designsystem-scss/src/helsenorge.scss';

const buttonVariants = {
  primary: undefined,
  secondary: 'secondary',
  tertiary: 'tertiary',
};

stories.add('Diveboard', (): JSX.Element => <Diveboard>{text('text', 'CommonButton')}</Diveboard>);

stories.add(
  'CommonButton',
  (): JSX.Element => (
    <CommonButton
      onClick={() => console.log('hallllloo???')}
      variant={select('variant', buttonVariants, buttonVariants.primary)}
      disabled={boolean('disabled', false)}>
      {text('text', 'CommonButton')}
    </CommonButton>
  ),
);

stories.add(
  'CommonButton (button and a)',
  (): JSX.Element => (
    <Stacker vertical={boolean('vertically stacking', false)}>
      <CommonButton asTag="button" disabled={boolean('disabled', false)}>
        Button
      </CommonButton>
      <CommonButton asTag="a" disabled={boolean('disabled', false)}>
        Anchor
      </CommonButton>
      <button className="button is-common">Button (tag)</button>
      <a className="button is-common">Anchor (tag)</a>
    </Stacker>
  ),
);

stories.add(
  'CommonButton (all variants)',
  (): JSX.Element => (
    <Stacker vertical={boolean('vertically stacking', false)}>
      <CommonButton disabled={boolean('disabled', false)}>Primary</CommonButton>
      <CommonButton variant="secondary" disabled={boolean('disabled', false)}>
        Secondary
      </CommonButton>
      <CommonButton variant="tertiary" disabled={boolean('disabled', false)}>
        Tertiary
      </CommonButton>
    </Stacker>
  ),
);

stories.add(
  'Assorted (all variants with icons)',
  (): JSX.Element => (
    <Stacker vertical={boolean('vertically stacking', true)}>
      <ConfirmationButton>
        <Icon color={Palette.Bone}>lock</Icon>
        Logg inn
      </ConfirmationButton>
      <ConfirmationButton>
        Logg inn
        <Icon color={Palette.Bone}>unlock</Icon>
      </ConfirmationButton>
      <ConfirmationButton>
        <Icon color={Palette.Bone}>unlock</Icon>
        Logg inn
        <Icon color={Palette.Bone}>unlock</Icon>
      </ConfirmationButton>
      <CommonButton>
        Gå videre
        <Icon color={Palette.Bone}>arrowLeft</Icon>
      </CommonButton>
      <CommonButton variant="secondary">
        <Icon color={Palette.Surgical500}>arrowRight</Icon>
        Tilbake
      </CommonButton>
      <CommonButton variant="secondary">
        <Icon color={Palette.Surgical500}>arrowRight</Icon>
        Tilbake
        <Icon color={Palette.Surgical500}>arrowLeft</Icon>
      </CommonButton>
      <ActionButton>
        <Icon color={Palette.Surgical500}>printer</Icon>
        Skriv ut
      </ActionButton>
      <ActionButton>
        Fjern
        <Icon color={Palette.Surgical500}>bin</Icon>
      </ActionButton>
      <ActionButton>
        <Icon color={Palette.Surgical500}>close</Icon>
      </ActionButton>
      <StartButton>
        <Icon color={Palette.Bone}>bus</Icon>
        Logg inn for å søke om pasientreise
        <Icon color={Palette.Bone}>arrowLeft</Icon>
      </StartButton>
      <StartButton variant="secondary">
        <Icon color={Palette.Bone}>envelope</Icon>
        Skriv melding
        <Icon color={Palette.Bone}>arrowLeft</Icon>
      </StartButton>
      <StartButton variant="tertiary">
        <Icon color={Palette.Surgical500}>envelope</Icon>
        Skriv melding
        <Icon color={Palette.Surgical500}>arrowLeft</Icon>
      </StartButton>
    </Stacker>
  ),
);

stories.add(
  'ActionButton',
  (): JSX.Element => (
    <ActionButton
      variant={select('variant', buttonVariants, buttonVariants.primary)}
      disabled={boolean('disabled', false)}>
      {text('text', 'ActionButton')}
    </ActionButton>
  ),
);

stories.add(
  'ActionButton (all variants)',
  (): JSX.Element => (
    <Stacker vertical={boolean('vertically stacking', false)}>
      <ActionButton disabled={boolean('disabled', false)}>Primary</ActionButton>
      <ActionButton variant="secondary" disabled={boolean('disabled', false)}>
        Secondary
      </ActionButton>
      <ActionButton variant="tertiary" disabled={boolean('disabled', false)}>
        Tertiary
      </ActionButton>
    </Stacker>
  ),
);

stories.add(
  'ConfirmationButton',
  (): JSX.Element => (
    <ConfirmationButton
      variant={select('variant', buttonVariants, buttonVariants.primary)}
      isLoading={boolean('isLoading', false)}
      disabled={boolean('disabled', false)}>
      {text('text', 'ConfirmationButton')}
    </ConfirmationButton>
  ),
);

stories.add(
  'ConfirmationButton (all variants)',
  (): JSX.Element => (
    <>
      <ConfirmationButton variant="secondary" disabled={boolean('disabled', false)}>
        Primary
      </ConfirmationButton>
      <ConfirmationButton variant="secondary" disabled={boolean('disabled', false)}>
        Secondary
      </ConfirmationButton>
      <ConfirmationButton variant="tertiary" disabled={boolean('disabled', false)}>
        Tertiary
      </ConfirmationButton>
    </>
  ),
);

stories.add(
  'StartButton',
  (): JSX.Element => (
    <StartButton
      variant={select('variant', buttonVariants, buttonVariants.primary)}
      disabled={boolean('disabled', false)}>
      {text('text', 'StartButton')}
    </StartButton>
  ),
);

stories.add(
  'StartButton (all variants)',
  (): JSX.Element => (
    <Stacker vertical={boolean('vertically stacking', false)}>
      <StartButton disabled={boolean('disabled', false)}>Primary</StartButton>
      <StartButton variant="secondary" disabled={boolean('disabled', false)}>
        Secondary
      </StartButton>
      <StartButton variant="tertiary" disabled={boolean('disabled', false)}>
        Tertiary
      </StartButton>
    </Stacker>
  ),
);

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
