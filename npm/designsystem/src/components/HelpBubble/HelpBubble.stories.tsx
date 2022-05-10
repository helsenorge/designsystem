import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import HelpBubble from './HelpBubble';

const stories = storiesOf('HelpBubble', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div style={{ width: '40rem' }}>
    <HelpBubble linkUrl={'/'}>
      {text(
        'Children',
        'Fugiat sit amet aute velit adipisicing et irure ullamco excepteur. Exercitation dolore quis nulla proident officia veniam adipisicing irure deserunt excepteur. Sit est non tempor nulla. Dolor commodo minim ea veniam.'
      )}
    </HelpBubble>
  </div>
));
