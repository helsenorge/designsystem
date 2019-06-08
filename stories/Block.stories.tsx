import React from 'react';

import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const stories = storiesOf('Uncategorized', module);
stories.addDecorator(withKnobs);

import Block from '../src/components/finished/Block';

stories.add('Block', (): JSX.Element => (
  <Block
    isNew={boolean('isNew', false)}
    noPadding={boolean('noPadding', false)}>
    <h1>{text('text', 'Block')}</h1>
  </Block>
));