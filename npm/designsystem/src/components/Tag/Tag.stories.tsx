import React from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import Tag, { TagAction, TagSize, TagVariant } from './Tag';
import LawBook from '../Icons/LawBook';

const stories = storiesOf('Tag', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div style={{ width: '40rem' }}>
    <Tag
      size={select('Size', TagSize, TagSize.medium)}
      color={select('Color', ['blueberry', 'neutral', 'cherry', 'banana', 'kiwi', 'plum'], 'blueberry')}
      variant={select('Variant', TagVariant, TagVariant.normal)}
    >
      {text('Label', 'Tekst')}
    </Tag>
  </div>
));

stories.add('With icon', () => (
  <div style={{ width: '40rem' }}>
    <Tag
      size={select('Size', TagSize, TagSize.medium)}
      color={select('Color', ['blueberry', 'neutral', 'cherry', 'banana', 'kiwi', 'plum'], 'blueberry')}
      variant={select('Variant', TagVariant, TagVariant.normal)}
      svgIcon={LawBook}
    >
      {text('Label', 'Tekst')}
    </Tag>
  </div>
));

stories.add('Action', () => (
  <div style={{ width: '40rem' }}>
    <Tag
      size={select('Size', TagSize, TagSize.medium)}
      color={select('Color', ['blueberry', 'neutral', 'cherry', 'banana', 'kiwi', 'plum'], 'blueberry')}
      variant={select('Variant', TagVariant, TagVariant.normal)}
      action={select('Action', TagAction, TagAction.remove)}
      onClick={() => console.log('Tag clicked')}
    >
      {text('Label', 'Tekst')}
    </Tag>
  </div>
));
