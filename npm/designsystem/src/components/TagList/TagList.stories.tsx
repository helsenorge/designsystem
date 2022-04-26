import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import TagList from './TagList';
import Tag from '../Tag';

const stories = storiesOf('TagList', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div style={{ width: '20rem' }}>
    <TagList>
      <Tag>{'Læring'}</Tag>
      <Tag>{'Psykisk helse'}</Tag>
      <Tag>{'Fysisk helse'}</Tag>
      <Tag>{'Livsstil'}</Tag>
    </TagList>
  </div>
));
