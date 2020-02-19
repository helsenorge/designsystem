import React from 'react';
import {withKnobs, select, boolean, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';
import Button, {ButtonColors} from './Button';
import {allIcons, allPaletteNames} from '../../../.storybook/knobs';
import Icon from '../Icons';

const allButtonColors = allPaletteNames;

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Button
    onClick={action('button-click')}
    variant={select('Variant', ['fill', 'outline', 'borderless'], 'fill')}
    size={select('Size', ['small', 'medium', 'large'], 'small')}
    color={select('Color', allButtonColors, 'neutral')}
    loading={boolean('Loading', false)}
    fluid={boolean('Fluid', false)}
    disabled={boolean('Disabled', false)}
    htmlTag={select('HTML tag', ['button', 'a'], 'button')}>
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
      variant={select('Variant', ['fill', 'outline', 'borderless'], 'fill')}
      size={select('Size', ['small', 'medium', 'large'], 'small')}
      color={select('Color', allButtonColors, 'neutral')}
      loading={boolean('Loading', false)}
      fluid={boolean('Fluid', false)}
      htmlTag={select('HTML tag', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
    <div style={{height: '1rem'}}></div>
    <Button
      variant={select('Variant', ['fill', 'outline', 'borderless'], 'fill')}
      size={select('Size', ['small', 'medium', 'large'], 'small')}
      color={select('Color', allButtonColors, 'neutral')}
      loading={boolean('Loading', false)}
      fluid={boolean('Fluid', false)}
      htmlTag={select('HTML tag', ['button', 'a'], 'button')}>
      <Icon>{select('Left icon', allIcons, 'alarmclock')}</Icon>
      {text('Text', 'Button')}
      <Icon>{select('Right icon', allIcons, 'arrowRight')}</Icon>
    </Button>
  </div>
));

stories.add('With icon(s)', () => (
  <Button
    variant={select('Variant', ['fill', 'outline', 'borderless'], 'fill')}
    size={select('Size', ['small', 'medium', 'large'], 'small')}
    color={select('Color', allButtonColors, 'neutral')}
    loading={boolean('Loading', false)}
    fluid={boolean('Fluid', false)}
    htmlTag={select('HTML tag', ['button', 'a'], 'button')}>
    <Icon>{select('Left icon', allIcons, 'alarmclock')}</Icon>
    {text('Text', 'Button')}
    <Icon>{select('Right icon', allIcons, 'arrowRight')}</Icon>
  </Button>
));

stories.add('All variants', () => (
  <div style={{display: 'grid', gridGap: '2rem'}}>
    <Button
      variant="fill"
      size={select('Size', ['small', 'medium', 'large'], 'small')}
      color={select('Color', allButtonColors, 'neutral')}
      htmlTag={select('As tag', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
    <Button
      variant="outline"
      size={select('Size', ['small', 'medium', 'large'], 'small')}
      color={select('Color', allButtonColors, 'neutral')}
      htmlTag={select('As tag', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
    <Button
      variant="borderless"
      size={select('Size', ['small', 'medium', 'large'], 'small')}
      color={select('Color', allButtonColors, 'neutral')}
      htmlTag={select('As tag', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
  </div>
));
