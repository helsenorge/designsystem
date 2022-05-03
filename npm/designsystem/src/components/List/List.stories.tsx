import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './List';

export default {
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

export const Default: ComponentStory<typeof List> = () => (
  <List>
    <h1>Tjeneste 1</h1>
    <h1>Tjeneste 2</h1>
    <h1>Tjeneste 3</h1>
    <h1>Tjeneste 4</h1>
  </List>
);
