import React from 'react';
import {withKnobs, select, boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import Button, {ButtonVariants, ButtonIntents} from './Button';
import Icon from '../Icons';
import X from '../Icons/X';
import {withA11y} from '@storybook/addon-a11y';

const allButtonVariants: ButtonVariants[] = ['fill', 'outline', 'borderless'];
const allButtonIntents: ButtonIntents[] = ['primary', 'warning', 'danger'];

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div style={{width: '15rem'}}>
    <Button
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}>
      {text('Text', 'Button')}
    </Button>
  </div>
));

stories.add('Fluid', () => (
  <div
    style={{
      width: '30rem',
      padding: '1rem',
    }}>
    <Button
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}>
      {text('Text', 'Button')}
    </Button>
    <div style={{height: '1rem'}}></div>
    <Button
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}>
      <Icon svgIcon={X} />
      {text('Text', 'Button')}
      <Icon svgIcon={X} />
    </Button>
    <div style={{height: '1rem'}}></div>
    <Button
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}>
      <Icon svgIcon={X} />
      {text('Text', 'Button')}
    </Button>
  </div>
));

stories.add('With icon(s)', () => (
  <div>
    <Button
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}>
      <Icon svgIcon={X} />
      {text('Text', 'Button')}
    </Button>
    <div style={{height: '1rem'}}></div>
    <Button
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}>
      {text('Text', 'Button')}
      <Icon svgIcon={X} />
    </Button>
    <div style={{height: '1rem'}}></div>
    <Button
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}>
      <Icon svgIcon={X} />
      {text('Text', 'Button')}
      <Icon svgIcon={X} />
    </Button>
  </div>
));

stories.add('All variants', () => (
  <div style={{display: 'grid', gridGap: '2rem'}}>
    <Button
      variant="fill"
      intent={select('Intent', allButtonIntents, 'primary')}
      large={boolean('Large', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
    <Button
      variant="outline"
      intent={select('Intent', allButtonIntents, 'primary')}
      large={boolean('Large', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
    <Button
      variant="borderless"
      intent={select('Intent', allButtonIntents, 'primary')}
      large={boolean('Large', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
  </div>
));
