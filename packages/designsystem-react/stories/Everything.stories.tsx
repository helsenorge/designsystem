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
import {DiveBoard, DiveBoardTitle, DiveBoardPreamable} from '../src/components/DiveBoard';
import {Icon} from '../src/components/Icons';

import {Palette} from '../src/constants';

import '../../designsystem-scss/src/helsenorge.scss';

const buttonVariants = {
  primary: undefined,
  secondary: 'secondary',
  tertiary: 'tertiary',
};

stories.add(
  'Diveboard',
  (): JSX.Element => (
    <Stacker vertical>
      <DiveBoard icon={<Icon>chevronUp</Icon>}>
        <DiveBoardTitle>Bekkenbunnstrening</DiveBoardTitle>
        <DiveBoardPreamable>
          Her finner du treningsprogram for bekkenbunnsmuskilatur fra Prostataforeningens nettside.
        </DiveBoardPreamable>
      </DiveBoard>
      <DiveBoard>
        <DiveBoardTitle>
          Nasjonalt handlingsprogram med retningslinjer for diagnostikk, behandling og oppfølging av maligne melanomer
        </DiveBoardTitle>
        <DiveBoardPreamable>
          Her finner du treningsprogram for bekkenbunnsmuskilatur fra Prostataforeningens nettside.
        </DiveBoardPreamable>
      </DiveBoard>
      <DiveBoard variant="surgical">
        <DiveBoardTitle>Helfos fristbruddavtaler med behandlingssteder</DiveBoardTitle>
        <DiveBoardPreamable>
          Her finner du treningsprogram for bekkenbunnsmuskilatur fra Prostataforeningens nettside.
        </DiveBoardPreamable>
      </DiveBoard>
      <DiveBoard icon={<Icon>pencil</Icon>} variant="strangulation">
        <DiveBoardTitle>Finn ut hva du har rett på som pasient i utlandet</DiveBoardTitle>
        <DiveBoardPreamable>
          Dersom behandlingsinstutisjonen ikke oppfyller fristen for når helsehjelp senest kan gis, vil Helfo finne et
          annet behandlinstilbud for deg.
        </DiveBoardPreamable>
      </DiveBoard>
    </Stacker>
  ),
);

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
        <Icon color={Palette.Bone}>alarmclock</Icon>
        Logg inn
      </ConfirmationButton>
      <ConfirmationButton>
        Logg inn
        <Icon isHovered color={Palette.Bone}>
          alarmclock
        </Icon>
      </ConfirmationButton>
      <ConfirmationButton>
        <Icon color={Palette.Bone}>alarmclock</Icon>
        Logg inn
        <Icon color={Palette.Bone}>alarmclock</Icon>
      </ConfirmationButton>
      <CommonButton>
        Gå videre
        <Icon color={Palette.Bone}>arrowRight</Icon>
      </CommonButton>
      <CommonButton variant="secondary">
        <Icon color={Palette.Surgical500}>arrowRight</Icon>
        Tilbake
      </CommonButton>
      <CommonButton variant="secondary">
        <Icon color={Palette.Surgical500}>arrowLeft</Icon>
        Tilbake
        <Icon color={Palette.Surgical500}>arrowRight</Icon>
      </CommonButton>
      <ActionButton>
        <Icon color={Palette.Surgical500}>alarmclock</Icon>
        Skriv ut
      </ActionButton>
      <ActionButton>
        Fjern
        <Icon color={Palette.Surgical500}>alarmclock</Icon>
      </ActionButton>
      <ActionButton>
        <Icon color={Palette.Surgical500}>alarmclock</Icon>
      </ActionButton>
      <StartButton>
        <Icon color={Palette.Bone}>alarmclock</Icon>
        Logg inn for å søke om pasientreise
        <Icon color={Palette.Bone}>arrowRight</Icon>
      </StartButton>
      <StartButton variant="secondary">
        <Icon color={Palette.Bone}>alarmclock</Icon>
        Skriv melding
        <Icon color={Palette.Bone}>arrowRight</Icon>
      </StartButton>
      <StartButton variant="tertiary">
        <Icon color={Palette.Surgical500}>alarmclock</Icon>
        Skriv melding
        <Icon color={Palette.Surgical500}>arrowRight</Icon>
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
      <ConfirmationButton disabled={boolean('disabled', false)}>Primary</ConfirmationButton>
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
  'Icons',
  (): JSX.Element => (
    <div>
      <Icon>paperplane</Icon>
      <Icon size={64} isHovered color={Palette.Surgical300}>
        alarmclock
      </Icon>
      <i style={{fontSize: '2.375rem'}} className="icon-paperplane-normal" />
      <i style={{fontSize: '4rem', color: '#90d9d3'}} className="icon-alarmclock-hover is-large is-surgical-300" />
    </div>
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