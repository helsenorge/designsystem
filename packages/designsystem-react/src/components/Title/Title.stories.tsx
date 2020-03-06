import React from 'react';
import {withKnobs, text, select, number, boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import Title from './Title';
import {withA11y} from '@storybook/addon-a11y';
import {allTitleTags, allTitleAppearances} from '../../../.storybook/knobs';

const stories = storiesOf('Title', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <Title
    htmlMarkup={select('HtmlMarkup', allTitleTags, 'h1')}
    margin={number('Margin (rem)', 0)}
    appearance={select('Apperance', allTitleAppearances, 'title1')}>
    {text('Text', 'Title')}
  </Title>
));

stories.add('All appearances', () => (
  <div>
    <Title
      htmlMarkup={select('HtmlMarkup', allTitleTags, 'h1')}
      margin={number('Margin (rem)', 0)}
      appearance="titleFeature">
      {`${text('Text', 'Title')} (feature)`}
    </Title>
    <Title htmlMarkup={select('HtmlMarkup', allTitleTags, 'h1')} margin={number('Margin (rem)', 0)} appearance="title1">
      {`${text('Text', 'Title')} (title1)`}
    </Title>
    <Title htmlMarkup={select('HtmlMarkup', allTitleTags, 'h1')} margin={number('Margin (rem)', 0)} appearance="title2">
      {`${text('Text', 'Title')} (title2)`}
    </Title>
    <Title htmlMarkup={select('HtmlMarkup', allTitleTags, 'h1')} margin={number('Margin (rem)', 0)} appearance="title3">
      {`${text('Text', 'Title')} (title3)`}
    </Title>
    <Title htmlMarkup={select('HtmlMarkup', allTitleTags, 'h1')} margin={number('Margin (rem)', 0)} appearance="title4">
      {`${text('Text', 'Title')} (title4)`}
    </Title>
    <Title htmlMarkup={select('HtmlMarkup', allTitleTags, 'h1')} margin={number('Margin (rem)', 0)} appearance="title5">
      {`${text('Text', 'Title')} (title5)`}
    </Title>
  </div>
));
