import { render, screen } from '@testing-library/react';

import Tag from './Tag';

describe('Gitt at Tag skal vises', (): void => {
  describe('Når Tagen vises vanlig', (): void => {
    test('Så er teksten synlig', (): void => {
      render(<Tag>{'Tekst'}</Tag>);

      const tag = screen.getByText('Tekst');

      expect(tag).toBeVisible();
    });
  });
});
