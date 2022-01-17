import React from 'react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Checkbox from '../Checkbox/Checkbox';
import RadioButton from '../RadioButton/RadioButton';
import FormGroup from './FormGroup';
import { FormMode, FormVariant } from '../../constants';

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
      mode={select('Mode', FormMode, FormMode.OnWhite)}
      variant={select('Variant', FormVariant, FormVariant.Normal)}
    >
      <Checkbox inputid={'Checkbox1'} label={'Checkbox 1'} />
      <Checkbox inputid={'Checkbox2'} label={'Checkbox 2'} />
      <Checkbox inputid={'Checkbox3'} label={'Checkbox 3'} />
    </FormGroup>
    <FormGroup
      legend={text('Legend', 'Check out these checkboxes!')}
      mode={select('Mode', FormMode, FormMode.OnWhite)}
      variant={select('Variant', FormVariant, FormVariant.Normal)}
    >
      <Checkbox label={'Checkbox 4'} />
      <Checkbox label={'Checkbox 5'} />
      <Checkbox label={'Checkbox 6'} />
    </FormGroup>
  </div>
));

stories.add('RadioButton', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <FormGroup
      title={text('Title', 'One amazing title')}
      legend={text('Legend', 'Radio radio hello!')}
      mode={select('Mode', FormMode, FormMode.OnWhite)}
      variant={select('Variant', FormVariant, FormVariant.Normal)}
      name={'radiogroup1'}
    >
      <RadioButton inputid={'RadioButton1'} label={'RadioButton 1'} />
      <RadioButton inputid={'RadioButton2'} label={'RadioButton 2'} />
      <RadioButton inputid={'RadioButton3'} label={'RadioButton 3'} />
    </FormGroup>
    <FormGroup
      legend={text('Legend', 'Radio radio hello!')}
      mode={select('Mode', FormMode, FormMode.OnWhite)}
      variant={select('Variant', FormVariant, FormVariant.Normal)}
      name={'radiogroup2'}
    >
      <RadioButton inputid={'RadioButton4'} label={'RadioButton 4'} />
      <RadioButton inputid={'RadioButton5'} label={'RadioButton 5'} />
      <RadioButton inputid={'RadioButton6'} label={'RadioButton 6'} />
    </FormGroup>
  </div>
));
