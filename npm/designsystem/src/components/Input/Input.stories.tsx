import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Input, { InputTypes } from './Input';
import { withA11y } from '@storybook/addon-a11y';
import { mapToBackgoundColor } from '../../../.storybook/StoryBackground';

import { FormMode, FormVariant } from '../../constants';
import Hospital from '../Icons/Hospital';
import Icon, { IconSize } from '../Icons';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => {
  const modes = select('background', FormMode, FormMode.onwhite);

  return (
    <div style={{ width: '80vw', background: mapToBackgoundColor(modes), padding: 20 }}>
      <Input
        defaultValue={text('defaultValue', '')}
        placeholder={text('placeholdertext', 'Skriv inn tekst her')}
        testId={'123-test'}
        variant={select('Variant', FormVariant, FormVariant.normal)}
        transparent={boolean('transparent', false)}
        type={select('type', InputTypes, InputTypes.text)}
        disabled={boolean('disabled', false)}
        mode={modes}
        label={'Skriv inn din tekst'}
        icon={boolean('icon', true) ? Hospital : undefined}
        iconRight={boolean('iconRight', false)}
        readOnly={boolean('readOnly', false)}
      />
    </div>
  );
});

stories.add('Multiple examples', () => {
  const modes = select('background', FormMode, FormMode.onwhite);

  return (
    <div style={{ width: '80vw', background: mapToBackgoundColor(modes), padding: 20 }}>
      <Input
        defaultValue={text('defaultValue', '')}
        placeholder={text('placeholdertext', 'Skriv inn tekst her')}
        testId={'123-test'}
        variant={select('Variant', FormVariant, FormVariant.normal)}
        transparent={boolean('transparent', false)}
        type={select('type', InputTypes, InputTypes.text)}
        disabled={boolean('disabled', false)}
        mode={modes}
        label={'Skriv inn din tekst'}
        icon={boolean('icon', true) ? Hospital : undefined}
        iconRight={boolean('iconRight', false)}
        readOnly={boolean('readOnly', false)}
      />

      <Input
        defaultValue={text('defaultValue', '')}
        placeholder={text('placeholdertext', 'Skriv inn tekst her')}
        testId={'123-test'}
        variant={select('Variant', FormVariant, FormVariant.normal)}
        transparent={boolean('transparent', false)}
        type={select('type', InputTypes, InputTypes.text)}
        disabled={boolean('disabled', false)}
        mode={modes}
        label={'Skriv inn din tekst'}
        icon={boolean('icon', true) ? Hospital : undefined}
        iconRight={boolean('iconRight', false)}
        readOnly={boolean('readOnly', false)}
      />

      <Input
        defaultValue={text('defaultValue', '')}
        placeholder={text('placeholdertext', 'Skriv inn tekst her')}
        testId={'123-test'}
        variant={select('Variant', FormVariant, FormVariant.normal)}
        transparent={boolean('transparent', false)}
        type={select('type', InputTypes, InputTypes.text)}
        disabled={boolean('disabled', false)}
        mode={modes}
        label={'Skriv inn din tekst'}
        icon={boolean('icon', true) ? Hospital : undefined}
        iconRight={boolean('iconRight', false)}
        readOnly={boolean('readOnly', false)}
      />
    </div>
  );
});

stories.add('Children after label', () => {
  const modes = select('background', FormMode, FormMode.onwhite);

  return (
    <div style={{ width: '80vw', background: mapToBackgoundColor(modes), padding: 20 }}>
      <Input
        defaultValue={text('defaultValue', '')}
        placeholder={text('placeholdertext', 'Skriv inn tekst her')}
        testId={'123-test'}
        variant={select('Variant', FormVariant, FormVariant.normal)}
        transparent={boolean('transparent', false)}
        type={select('type', InputTypes, InputTypes.text)}
        disabled={boolean('disabled', false)}
        mode={modes}
        label={'Skriv inn din tekst'}
        icon={boolean('icon', true) ? Hospital : undefined}
        iconRight={boolean('iconRight', false)}
        readOnly={boolean('readOnly', false)}
        afterLabelChildren={<Icon size={IconSize.XSmall} svgIcon={Hospital}></Icon>}
      />
    </div>
  );
});
