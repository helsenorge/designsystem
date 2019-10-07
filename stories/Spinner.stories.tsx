import React from 'react';

import {withKnobs, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const stories = storiesOf('Spinner', module);
stories.addDecorator(withKnobs);

import {Spinner} from '../src/components/Spinner';

stories.add(
  'Spinner',
  (): JSX.Element => (
    <Spinner size={select('size', ['small', 'normal', 'large'], 'normal')} />
  ),
);
