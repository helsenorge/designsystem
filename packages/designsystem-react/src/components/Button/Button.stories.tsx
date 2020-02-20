import React from 'react';
import {withKnobs, select, boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import Button, {ButtonVariants, ButtonIntents} from './Button';
import {allIcons} from '../../../.storybook/knobs';
import Icon from '../Icons';

const allButtonVariants: ButtonVariants[] = ['fill', 'outline', 'borderless'];
const allButtonIntents: ButtonIntents[] = ['primary', 'positive', 'warning', 'danger'];

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Button
    onClick={action('button-click')}
    variant={select('Variant', allButtonVariants, 'fill')}
    intent={select('Intent', allButtonIntents, 'primary')}
    large={boolean('Large', false)}
    loading={boolean('Loading', false)}
    fluid={boolean('Fluid', false)}
    disabled={boolean('Disabled', false)}
    is={select('Is', ['button', 'a'], 'button')}>
    {text('Text', 'Button')}
  </Button>
));

stories.add('Fluid', () => (
  <div
    style={{
      width: '30rem',
      padding: '1rem',
    }}>
    <Button
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}
      intent={select('Intent', allButtonIntents, 'primary')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      fluid={boolean('Fluid', true)}
      disabled={boolean('Disabled', false)}
      is={select('Is', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
    <div style={{height: '1rem'}}></div>
    <Button
      onClick={action('button-click')}
      variant={select('Variant', allButtonVariants, 'fill')}
      intent={select('Intent', allButtonIntents, 'primary')}
      large={boolean('Large', false)}
      loading={boolean('Loading', false)}
      fluid={boolean('Fluid', true)}
      disabled={boolean('Disabled', false)}
      is={select('Is', ['button', 'a'], 'button')}>
      <Icon>{select('Left icon', allIcons, 'alarmclock')}</Icon>
      {text('Text', 'Button')}
      <Icon>{select('Right icon', allIcons, 'arrowRight')}</Icon>
    </Button>
  </div>
));

stories.add('With icon(s)', () => (
  <Button
    onClick={action('button-click')}
    variant={select('Variant', allButtonVariants, 'fill')}
    intent={select('Intent', allButtonIntents, 'primary')}
    large={boolean('Large', false)}
    loading={boolean('Loading', false)}
    fluid={boolean('Fluid', false)}
    disabled={boolean('Disabled', false)}
    is={select('Is', ['button', 'a'], 'button')}>
    <Icon>{select('Left icon', allIcons, 'alarmclock')}</Icon>
    {text('Text', 'Button')}
    <Icon>{select('Right icon', allIcons, 'arrowRight')}</Icon>
  </Button>
));

stories.add('All variants', () => (
  <div style={{display: 'grid', gridGap: '2rem'}}>
    <Button
      variant="fill"
      intent={select('Intent', allButtonIntents, 'primary')}
      large={boolean('Large', false)}
      is={select('Is', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
    <Button
      variant="outline"
      intent={select('Intent', allButtonIntents, 'primary')}
      large={boolean('Large', false)}
      is={select('Is', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
    <Button
      variant="borderless"
      intent={select('Intent', allButtonIntents, 'primary')}
      large={boolean('Large', false)}
      is={select('Is', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
  </div>
));
