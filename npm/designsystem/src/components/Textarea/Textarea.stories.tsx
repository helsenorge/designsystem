import React from 'react';
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Textarea from './Textarea';
import { withA11y } from '@storybook/addon-a11y';
import { ModeVariant } from '../../constants';
import { palette } from '../../theme/palette';

const stories = storiesOf('Textarea', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Skeleton', () => (
  <div style={{ width: '20rem' }}>
    <Textarea
      placeholder="Dette er en placeholder"
      max={150}
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
  const modes = select('background', ModeVariant, ModeVariant.onWhite);

  const mapToBackgoundColor = (mode: ModeVariant): string => {
    switch (mode) {
      case ModeVariant.onBlueberry:
        return palette.blueberry50;
      case ModeVariant.onDark:
        return palette.blueberry800;
      case ModeVariant.onGrey:
        return palette.neutral50;
      case ModeVariant.onError:
        return palette.cherry50;
      default:
        return palette.white;
    }
  };

  return (
    <div style={{ width: '80vw', background: mapToBackgoundColor(modes), padding: 20 }}>
      <Textarea
        max={150}
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
      <Textarea max={10} gutterBottom />
    </div>

    <div style={{ display: 'flex', width: '40rem' }}>
      <Textarea max={100} />
    </div>

    <div style={{ width: '20rem' }}>
      <Textarea max={100} defaultValue="test" />
    </div>
  </div>
));

stories.add('Disabled', () => (
  <>
    <div style={{ width: '20rem' }}>
      <Textarea disabled placeholder={'This is a placeholder'} gutterBottom />
    </div>
    <div style={{ width: '20rem' }}>
      <Textarea disabled defaultValue={`This is a default value`}></Textarea>
    </div>
  </>
));

stories.add('Transparent', () => (
  <div style={{ width: '25rem', background: '#e4f7f9' }}>
    <Textarea
      max={150}
      transparent
      defaultValue={`It is not the fart that kills you, it's the smell
- Petter Solberg`}
    />
  </div>
));
