import React from 'react';
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Textarea from './Textarea';
import { withA11y } from '@storybook/addon-a11y';
import { mapToBackgoundColor } from '../../../.storybook/StoryBackground';

import { FormMode } from '../../constants';
import Hospital from '../Icons/Hospital';
import Icon, { IconSize } from '../Icons';

const stories = storiesOf('Textarea', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Skeleton', () => (
  <div style={{ width: '20rem' }}>
    <Textarea
      placeholder="Dette er en placeholder"
      maxCharacters={150}
      maxText={'chars'}
      defaultValue={`It is not the fart that kills you, it's the smell \n \n
  - Petter Solberg`}
      testId="123-test"
      transparent={boolean('transparent', false)}
      disabled={boolean('disabled', false)}
      label="Skriv inn din tekst"
      minRows={number('minRows', 3)}
      maxRows={number('maxRows', 15)}
      grow={boolean('grow', true)}
      errorText={text('errorText', '')}
    />
  </div>
));

stories.add('All props', () => {
  const modes = select('background', FormMode, FormMode.onwhite);

  return (
    <div style={{ width: '80vw', background: mapToBackgoundColor(modes), padding: 20 }}>
      <Textarea
        maxCharacters={150}
        maxText={'chars'}
        defaultValue={`It is not the fart that kills you, it's the smell \n \n
  - Petter Solberg`}
        testId="123-test"
        transparent={boolean('transparent', false)}
        mode={modes}
        disabled={boolean('disabled', false)}
        label="Skriv inn din tekst"
        minRows={number('minRows', 3)}
        maxRows={number('maxRows', 15)}
        grow={boolean('grow', true)}
        errorText={text('errorText', '')}
      />
    </div>
  );
});

stories.add('Max characters', () => (
  <div style={{ paddingTop: 50 }}>
    <div style={{ display: 'flex', width: '50rem' }}>
      <Textarea maxCharacters={10} marginBottom />
    </div>

    <div style={{ display: 'flex', width: '40rem' }}>
      <Textarea maxCharacters={100} />
    </div>

    <div style={{ width: '20rem' }}>
      <Textarea maxCharacters={100} defaultValue="test" />
    </div>
  </div>
));

stories.add('Disabled', () => (
  <>
    <div style={{ width: '20rem' }}>
      <Textarea disabled placeholder={'This is a placeholder'} marginBottom />
    </div>
    <div style={{ width: '20rem' }}>
      <Textarea disabled defaultValue={`This is a default value`}></Textarea>
    </div>
  </>
));

stories.add('Transparent', () => (
  <div style={{ width: '25rem', background: '#e4f7f9' }}>
    <Textarea
      maxCharacters={150}
      transparent
      defaultValue={`It is not the fart that kills you, it's the smell
- Petter Solberg`}
    />
  </div>
));

stories.add('Children after label', () => (
  <div style={{ width: '25rem', background: '#e4f7f9' }}>
    <Textarea
      label={'Here is a child next to me'}
      maxCharacters={150}
      defaultValue={`It is not the fart that kills you, it's the smell
- Petter Solberg`}
      afterLabelChildren={<Icon size={IconSize.XSmall} svgIcon={Hospital}></Icon>}
    />
  </div>
));
