import React from 'react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import RadioButton from './RadioButton';
import { FormMode, FormVariant } from '../../constants';
import { mapToBackgoundColor } from '../../../.storybook/StoryBackground';

const stories = storiesOf('RadioButton', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => {
  const modes = select('background', FormMode, FormMode.onwhite);

  return (
    <div
      style={{
        width: '40rem',
        background: mapToBackgoundColor(modes),
        padding: '1rem',
      }}
    >
      <RadioButton
        label={'RadioButton label'}
        defaultChecked={boolean('Checked', false)}
        disabled={boolean('Disabled', false)}
        mode={modes}
        variant={select('Variant', FormVariant, FormVariant.normal)}
      />
    </div>
  );
});
