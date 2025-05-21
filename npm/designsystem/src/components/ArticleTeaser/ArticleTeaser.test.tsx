import { render, screen } from '@testing-library/react';

import ArticleTeaser from './ArticleTeaser';

describe('Gitt at ArticleTeaser skal vises', (): void => {
  describe('Når ArticleTeaser vises', (): void => {
    test('Så vises ArticleTeaser', (): void => {
      render(
        <ArticleTeaser onExpand={() => null} expanded={false} contentId="content" testId="articleteaser">
          <div id="content"></div>
        </ArticleTeaser>
      );
      const teaserElement = screen.getByTestId('articleteaser');
      expect(teaserElement).toBeInTheDocument();
    });

    test('Så vises ArticleTeaser med gitt html tag', (): void => {
      render(
        <ArticleTeaser htmlMarkup="article" contentId="content" expanded={false} onExpand={() => null} testId="articleteaser">
          <div id="content">{'Tekst'}</div>
        </ArticleTeaser>
      );
      const teaserElement = screen.getByTestId('articleteaser');
      expect(teaserElement.tagName.toLowerCase()).toBe('article');
    });
  });
});
