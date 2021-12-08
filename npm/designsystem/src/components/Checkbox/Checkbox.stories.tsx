import React from 'react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { FormGroupVariants, FormGroupModes } from '../FormGroup/FormGroup';
import Checkbox from './Checkbox';

const stories = storiesOf('Checkbox', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <Checkbox
      label={'Check me out!'}
      checked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      mode={select('Mode', FormGroupModes, FormGroupModes.onWhite)}
      variant={select('Variant', FormGroupVariants, FormGroupVariants.normal)}
    />
  </div>
));
