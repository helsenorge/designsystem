import React from 'react';
import {withKnobs, select, boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Button from './Button';
import {Icon} from '../../..';
import {allIcons} from '../../../../.storybook/knobs';
import {palette, Colors} from '../../../theme';

const stories = storiesOf('Buttons/Button', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Button
    variant={select('Variant', ['fill', 'outline', 'borderless'], 'fill')}
    size={select('Size', ['small', 'medium', 'large'], 'small')}
    color={select('Color', ['strangulation', 'surgical'], 'strangulation')}
    isLoading={boolean('Is loading', false)}
    asTag={select('As tag', ['button', 'a'], 'button')}>
    {text('Text', 'Button')}
  </Button>
));
stories.add('All variants', () => (
  <div style={{display: 'grid', gridGap: '2rem'}}>
    <Button
      variant="fill"
      size={select('Size', ['small', 'medium', 'large'], 'small')}
      color={select('Color', ['strangulation', 'surgical'], 'strangulation')}
      asTag={select('As tag', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
    <Button
      variant="outline"
      size={select('Size', ['small', 'medium', 'large'], 'small')}
      color={select('Color', ['strangulation', 'surgical'], 'strangulation')}
      asTag={select('As tag', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
    <Button
      variant="borderless"
      size={select('Size', ['small', 'medium', 'large'], 'small')}
      color={select('Color', ['strangulation', 'surgical'], 'strangulation')}
      asTag={select('As tag', ['button', 'a'], 'button')}>
      {text('Text', 'Button')}
    </Button>
  </div>
));
