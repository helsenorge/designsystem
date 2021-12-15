import React from 'react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Checkbox from '../Checkbox/Checkbox';
import FormGroup, { allFormVariants, allFormModes } from './FormGroup';

const stories = storiesOf('FormGroup', module);
stories.addDecorator(withKnobs);

stories.add('Checkbox', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <FormGroup
      title={text('Title', 'One amazing title')}
      legend={text('Legend', 'Check out these checkboxes!')}
      mode={select('Mode', allFormModes, 'on-white')}
      variant={select('Variant', allFormVariants, 'normal')}
    >
      <Checkbox inputid={'Checkbox1'} label={'Checkbox 1'} />
      <Checkbox inputid={'Checkbox2'} label={'Checkbox 2'} />
      <Checkbox inputid={'Checkbox3'} label={'Checkbox 3'} />
    </FormGroup>
    <FormGroup
      legend={text('Legend', 'Check out these checkboxes!')}
      mode={select('Mode', allFormModes, 'on-white')}
      variant={select('Variant', allFormVariants, 'normal')}
    >
      <Checkbox label={'Checkbox 4'} />
      <Checkbox label={'Checkbox 5'} />
      <Checkbox label={'Checkbox 6'} />
    </FormGroup>
  </div>
));
