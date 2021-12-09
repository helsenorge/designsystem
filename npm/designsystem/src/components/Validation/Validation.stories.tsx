import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { allFormVariants } from '../FormGroup/FormGroup';
import FormExample, { FormExampleVariants } from '../FormExample/FormExample';

const stories = storiesOf('Validation', module);
stories.addDecorator(withKnobs);

stories.add('FormGroup', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <FormExample variant={select('Variant', allFormVariants, 'normal')} exampleType={FormExampleVariants.formgroup} />
  </div>
));

stories.add('Checkbox', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <FormExample variant={select('Variant', allFormVariants, 'normal')} exampleType={FormExampleVariants.checkbox} />
  </div>
));
