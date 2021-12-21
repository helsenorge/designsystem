import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Lukkekryss from './Lukkekryss';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Lukkekryss', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <Lukkekryss
    onClick={action('button-click')}
    testId={text('testId', '')}
    ariaLabel={text('aria-label', '')}
  />
));
