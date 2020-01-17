import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import List from './List';

const stories = storiesOf('List', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <List>
    <h1>Tjeneste 1</h1>
    <h1>Tjeneste 2</h1>
    <h1>Tjeneste 3</h1>
    <h1>Tjeneste 4</h1>
  </List>
));
