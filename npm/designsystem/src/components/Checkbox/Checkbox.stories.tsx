import React from 'react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { FormMode, FormVariant } from '../../constants';
import Checkbox from './Checkbox';
import { mapToBackgoundColor } from '../../../.storybook/StoryBackground';

const stories = storiesOf('Checkbox', module);
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
      <Checkbox
        label={'Jeg er frisk!'}
        checked={boolean('Checked', false)}
        disabled={boolean('Disabled', false)}
        mode={modes}
        variant={select('Variant', FormVariant, FormVariant.normal)}
      />
    </div>
  );
});
