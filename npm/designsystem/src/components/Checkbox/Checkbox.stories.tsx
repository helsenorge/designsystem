import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';

const stories = storiesOf('ExpanderList', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <Checkbox text={'Check me!'} />
  </div>
));
