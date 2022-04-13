import React from 'react';
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Checkbox from '../Checkbox/Checkbox';
import RadioButton from '../RadioButton/RadioButton';
import FormGroup from '../FormGroup';
import FormLayout, { FormLayoutColumns } from './FormLayout';
import { FormMode, FormVariant } from '../../constants';
import { mapToBackgoundColor } from '../../../.storybook/StoryBackground';

const stories = storiesOf('FormLayout', module);
stories.addDecorator(withKnobs);

stories.add('Checkbox', () => {
  const modes = select('background', FormMode, FormMode.onwhite);

  return (
    <div
      style={{
        width: '90vw',
        background: mapToBackgoundColor(modes),
      }}
    >
      <FormGroup
        title={text('Title', 'Her kan du styre maks antall kolonner')}
        legend={text('Legend', 'Antallet er basert på hvor mange som har plass')}
        mode={modes}
        variant={select('Variant', FormVariant, FormVariant.normal)}
      >
        <FormLayout maxColumns={select('maxColumns', FormLayoutColumns, FormLayoutColumns.three)} colMinWidth={number('colMinWidth', 300)}>
          <Checkbox inputId={'Checkbox1'} label={'Checkbox hei'} />
          <Checkbox inputId={'Checkbox2'} label={'Checkbox lalalala'} />
          <Checkbox inputId={'Checkbox3'} label={'Checkbox asdadasd afasasfaa'} />
          <Checkbox inputId={'Checkbox4'} label={'Checkbox hmm'} />
          <Checkbox inputId={'Checkbox5'} label={'Checkbox'} />
          <Checkbox inputId={'Checkbox6'} label={'Checkbox jadada'} />
        </FormLayout>
      </FormGroup>
    </div>
  );
});

stories.add('RadioButton', () => {
  const modes = select('background', FormMode, FormMode.onwhite);

  return (
    <div
      style={{
        width: '90vw',
        background: mapToBackgoundColor(modes),
      }}
    >
      <FormGroup
        title={text('Title', 'Her kan du styre maks antall kolonner')}
        legend={text('Legend', 'Antallet er basert på hvor mange som har plass')}
        mode={modes}
        variant={select('Variant', FormVariant, FormVariant.normal)}
        name={'radiogroup1'}
      >
        <FormLayout maxColumns={select('maxColumns', FormLayoutColumns, FormLayoutColumns.two)} colMinWidth={number('colMinWidth', 300)}>
          <RadioButton inputId={'RadioButton1'} label={'RadioButton 1'} />
          <RadioButton inputId={'RadioButton2'} label={'RadioButton 2'} />
          <RadioButton inputId={'RadioButton3'} label={'RadioButton 3'} />
        </FormLayout>
      </FormGroup>
      <FormGroup
        legend={text('Legend', 'Radio radio hello!')}
        mode={modes}
        variant={select('Variant', FormVariant, FormVariant.normal)}
        name={'radiogroup2'}
      >
        <FormLayout maxColumns={select('maxColumns', FormLayoutColumns, FormLayoutColumns.one)} colMinWidth={number('colMinWidth', 300)}>
          <RadioButton inputId={'RadioButton4'} label={'RadioButton 4'} />
          <RadioButton inputId={'RadioButton5'} label={'RadioButton 5'} />
          <RadioButton inputId={'RadioButton6'} label={'RadioButton 6'} />
        </FormLayout>
      </FormGroup>
    </div>
  );
});
