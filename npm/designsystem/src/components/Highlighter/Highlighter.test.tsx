import { render, screen } from '@testing-library/react';

import Highlighter from './Highlighter';

describe('Gitt at Highlighter skal vises', (): void => {
  describe('Når Highlighter brukes', (): void => {
    test('Så rendres Highlighter', (): void => {
      render(<Highlighter searchText="string">{'This is a test string'}</Highlighter>);

      const word = screen.getByText('string');
      expect(word).toBeInTheDocument();
    });

    test('Så blir searchtext markert', (): void => {
      render(<Highlighter searchText="test">{'This is a test string'}</Highlighter>);
      const highlightedText = screen.getByText('test');
      expect(highlightedText.tagName).toBe('MARK');
    });
  });

  describe('Når searchText er tom', (): void => {
    test('Så rendres children direkte', (): void => {
      render(
        <Highlighter searchText="">
          <h1>{'This is a test string'}</h1>
        </Highlighter>
      );
      const text = screen.getByText('This is a test string');
      expect(text).toBeInTheDocument();
      expect(text.tagName).toBe('H1');
    });
  });
});
