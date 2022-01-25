import React from 'react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Checkbox from '../Checkbox/Checkbox';
import RadioButton from '../RadioButton/RadioButton';
import Input from '../Input/Input';
import FormGroup from './FormGroup';
import { FormMode, FormVariant } from '../../constants';
import Coronavirus from '../Icons/Coronavirus';
import { mapToBackgoundColor } from '../../../.storybook/StoryBackground';

const stories = storiesOf('FormGroup', module);
stories.addDecorator(withKnobs);

stories.add('Checkbox', () => {
  const modes = select('background', FormMode, FormMode.onwhite);

  return (
    <div
      style={{
        width: '40rem',
        background: mapToBackgoundColor(modes),
      }}
    >
      <FormGroup
        title={text('Title', 'One amazing title')}
        legend={text('Legend', 'Check out these checkboxes!')}
        mode={modes}
        variant={select('Variant', FormVariant, FormVariant.normal)}
      >
        <Checkbox inputid={'Checkbox1'} label={'Checkbox 1'} />
        <Checkbox inputid={'Checkbox2'} label={'Checkbox 2'} />
        <Checkbox inputid={'Checkbox3'} label={'Checkbox 3'} />
      </FormGroup>
      <FormGroup
        legend={text('Legend', 'Check out these checkboxes!')}
        mode={modes}
        variant={select('Variant', FormVariant, FormVariant.normal)}
      >
        <Checkbox label={'Checkbox 4'} />
        <Checkbox label={'Checkbox 5'} />
        <Checkbox label={'Checkbox 6'} />
      </FormGroup>
    </div>
  );
});

stories.add('RadioButton', () => {
  const modes = select('background', FormMode, FormMode.onwhite);

  return (
    <div
      style={{
        width: '40rem',
        background: mapToBackgoundColor(modes),
      }}
    >
      <FormGroup
        title={text('Title', 'One amazing title')}
        legend={text('Legend', 'Radio radio hello!')}
        mode={modes}
        variant={select('Variant', FormVariant, FormVariant.normal)}
        name={'radiogroup1'}
      >
        <RadioButton inputid={'RadioButton1'} label={'RadioButton 1'} />
        <RadioButton inputid={'RadioButton2'} label={'RadioButton 2'} />
        <RadioButton inputid={'RadioButton3'} label={'RadioButton 3'} />
      </FormGroup>
      <FormGroup
        legend={text('Legend', 'Radio radio hello!')}
        mode={modes}
        variant={select('Variant', FormVariant, FormVariant.normal)}
        name={'radiogroup2'}
      >
        <RadioButton inputid={'RadioButton4'} label={'RadioButton 4'} />
        <RadioButton inputid={'RadioButton5'} label={'RadioButton 5'} />
        <RadioButton inputid={'RadioButton6'} label={'RadioButton 6'} />
      </FormGroup>
    </div>
  );
});

stories.add('Input', () => {
  const modes = select('background', FormMode, FormMode.onwhite);

  return (
    <div
      style={{
        width: '40rem',
        background: mapToBackgoundColor(modes),
      }}
    >
      <FormGroup
        title={text('Title', 'One amazing title')}
        legend={text('Legend', 'Group of textsss')}
        mode={modes}
        variant={select('Variant', FormVariant, FormVariant.normal)}
      >
        <Input label={'Input 1'} />
        <Input icon={Coronavirus} label={'Input 2'} />
        <Input icon={Coronavirus} iconRight label={'Input 3'} />
      </FormGroup>
      <FormGroup
        legend={text('Legend', 'Group of textsss')}
        mode={modes}
        variant={select('Variant', FormVariant, FormVariant.normal)}
        name={'radiogroup2'}
      >
        <Input label={'Input 4'} />
        <Input label={'Input 5'} />
        <Input label={'Input 6'} />
      </FormGroup>
    </div>
  );
});
