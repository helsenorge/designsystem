import React from 'react';

import {withKnobs, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const stories = storiesOf('Uncategorized', module);
stories.addDecorator(withKnobs);

import {Icon, Size, Color} from '../src/components/Icons';

stories.add(
  'Icon',
  (): JSX.Element => (
    <>
      <Icon.Behandlingssted size={select('size', Size, Size.Large)} color={select('color', Color, Color.Black)} />
    </>
  ),
);
