import React from 'react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import RadioButton from './RadioButton';
import { FormMode, FormVariant } from '../../constants';

const stories = storiesOf('RadioButton', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <RadioButton
      label={'Check me out!'}
      defaultChecked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      mode={select('Mode', FormMode, FormMode.OnWhite)}
      variant={select('Variant', FormVariant, FormVariant.Normal)}
    />
  </div>
));
