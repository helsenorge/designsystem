import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import FormExample, { FormExampleVariants } from '../FormExample/FormExample';
import { FormVariant } from '../../constants';

const stories = storiesOf('Validation', module);
stories.addDecorator(withKnobs);

stories.add('FormGroup', () => (
  <div
    style={{
      width: '50vw',
    }}
  >
    <FormExample variant={select('Variant', FormVariant, FormVariant.normal)} exampleType={FormExampleVariants.formgroup} />
  </div>
));

stories.add('Checkbox', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <FormExample variant={select('Variant', FormVariant, FormVariant.normal)} exampleType={FormExampleVariants.checkbox} />
  </div>
));

stories.add('Radiobutton', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <FormExample variant={select('Variant', FormVariant, FormVariant.normal)} exampleType={FormExampleVariants.radiobutton} />
  </div>
));

stories.add('Textarea', () => (
  <div
    style={{
      width: '90vw',
    }}
  >
    <FormExample variant={select('Variant', FormVariant, FormVariant.normal)} exampleType={FormExampleVariants.textarea} />
  </div>
));

stories.add('Input', () => (
  <div
    style={{
      width: '90vw',
    }}
  >
    <FormExample variant={select('Variant', FormVariant, FormVariant.normal)} exampleType={FormExampleVariants.input} />
  </div>
));
