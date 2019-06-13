import React from 'react';

import {number, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const stories = storiesOf('Uncategorized', module);
stories.addDecorator(withKnobs);

import {ProgressBar} from '../src/components/ProgressBar';

stories.add('ProgressBar', (): JSX.Element => (
  <ProgressBar min={number('min', 0)} max={number('max', 100)} value={number('value', 21)} />
));