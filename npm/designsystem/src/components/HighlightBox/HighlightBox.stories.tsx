import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import HighlightBox, { HighlightBoxSize } from './HighlightBox';
import { withA11y } from '@storybook/addon-a11y';

import PdfFile from '../Icons/PdfFile';

import '../../scss/typography.module.scss';

const stories = storiesOf('HighlightBox', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => (
  <div>
    <HighlightBox
      color={select('Color', ['white', 'blueberry', 'cherry', 'neutral', 'kiwi', 'plum'], 'white')}
      size={select('Size', HighlightBoxSize, HighlightBoxSize.medium)}
      htmlMarkup={select('HtmlMarkup', ['div', 'nav', 'section', 'article', 'span'], 'div')}
    >
      {text(
        'Text',
        'Risiko for alvorleg sjukdom aukar med alderen og underliggande sjukdomar, og menn har høgare risiko enn kvinner. Unge personar utan kjende risikofaktorar kan også få eit alvorleg forløp av sjukdomen. Det er meir sannsynleg at dette skjer dersom dei har underliggande sjukdomar.'
      )}
    </HighlightBox>
  </div>
));
stories.add('With icon', () => (
  <div>
    <HighlightBox
      color={select('Color', ['white', 'blueberry', 'cherry', 'neutral', 'kiwi', 'plum'], 'white')}
      size={select('Size', HighlightBoxSize, HighlightBoxSize.medium)}
      htmlMarkup={select('HtmlMarkup', ['div', 'nav', 'section', 'article', 'span'], 'div')}
      svgIcon={PdfFile}
    >
      {text(
        'Text',
        'Risiko for alvorleg sjukdom aukar med alderen og underliggande sjukdomar, og menn har høgare risiko enn kvinner. Unge personar utan kjende risikofaktorar kan også få eit alvorleg forløp av sjukdomen. Det er meir sannsynleg at dette skjer dersom dei har underliggande sjukdomar.'
      )}
    </HighlightBox>
  </div>
));
