import React from 'react';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Button, { ButtonVariants, ButtonIntents } from './Button';
import Icon from '../Icons';
import X from '../Icons/X';
import Calendar from '../Icons/Calendar';
import { withA11y } from '@storybook/addon-a11y';

const allButtonVariants: ButtonVariants[] = ['fill', 'outline', 'borderless'];
const allButtonIntents: ButtonIntents[] = ['primary', 'warning', 'danger'];

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

const myRef1 = React.createRef();
const myRef2 = React.createRef();
const myRef3 = React.createRef();
const myRef4 = React.createRef();

stories.add('Default', () => (
  <div style={{ width: '15rem' }}>
    <Button
      ellipsis={boolean('Ellipsis', false)}
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}
    >
      {text('Text', 'Button')}
    </Button>
  </div>
));

stories.add('Fluid', () => (
  <div
    style={{
      width: '30rem',
      padding: '1rem',
    }}
  >
    <Button
      ellipsis={boolean('Ellipsis', false)}
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}
    >
      {text('Text', 'Button')}
    </Button>
    <div style={{ height: '1rem' }}></div>
    <Button
      ellipsis={boolean('Ellipsis', false)}
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}
    >
      <Icon svgIcon={X} />
      {text('Text', 'Button')}
      <Icon svgIcon={X} />
    </Button>
    <div style={{ height: '1rem' }}></div>
    <Button
      ellipsis={boolean('Ellipsis', false)}
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}
    >
      <Icon svgIcon={X} />
      {text('Text', 'Button')}
    </Button>
  </div>
));

stories.add('With icon(s)', () => (
  <div>
    <Button
      ref={myRef1}
      ellipsis={boolean('Ellipsis', false)}
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}
    >
      <Icon svgIcon={X} />
      {text('Text', 'Button with ref')}
    </Button>
    <div style={{ height: '1rem' }}></div>
    <Button
      ref={myRef2}
      ellipsis={boolean('Ellipsis', false)}
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}
    >
      {text('Text', 'Button')}
      <Icon svgIcon={X} />
    </Button>
    <div style={{ height: '1rem' }}></div>
    <Button
      ref={myRef3}
      ellipsis={boolean('Ellipsis', false)}
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}
    >
      <Icon svgIcon={Calendar} />
      {text('Text', 'Button')}
      <Icon svgIcon={X} />
    </Button>
    <div style={{ height: '1rem' }}></div>
    <Button
      ref={myRef4}
      ellipsis={boolean('Ellipsis', false)}
      disabled={boolean('Disabled', false)}
      fluid={boolean('Fluid', false)}
      intent={select('Intent', allButtonIntents, 'primary')}
      inverted={boolean('Inverted', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}
    >
      <Icon svgIcon={Calendar} color={'lime'} hoverColor={'red'} />
      {text('Text', 'Button')}
      <Icon svgIcon={X} color={'lime'} hoverColor={'red'} />
    </Button>
  </div>
));

stories.add('All variants', () => (
  <div style={{ display: 'grid', gridGap: '2rem' }}>
    <Button
      ellipsis={boolean('Ellipsis', false)}
      disabled={boolean('Disabled', false)}
      variant="fill"
      intent={select('Intent', allButtonIntents, 'primary')}
      large={boolean('Large', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
    >
      {boolean('HasIcon', true) && <Icon svgIcon={Calendar} />}
      {text('Text', 'Button')}
      <Icon svgIcon={X} />
    </Button>

    <Button
      ellipsis={boolean('Ellipsis', false)}
      disabled={boolean('Disabled', false)}
      variant="outline"
      intent={select('Intent', allButtonIntents, 'primary')}
      large={boolean('Large', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
    >
      {boolean('HasIcon', true) && <Icon svgIcon={Calendar} />}
      {text('Text', 'Button')}
      <Icon svgIcon={X} />
    </Button>
    <Button
      ellipsis={boolean('Ellipsis', false)}
      disabled={boolean('Disabled', false)}
      variant="borderless"
      intent={select('Intent', allButtonIntents, 'primary')}
      large={boolean('Large', false)}
      htmlMarkup={select('Is', ['button', 'a'], 'button')}
    >
      {boolean('HasIcon', true) && <Icon svgIcon={Calendar} />}
      {text('Text', 'Button')}
      <Icon svgIcon={X} />
    </Button>
  </div>
));
