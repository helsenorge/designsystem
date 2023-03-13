import React from 'react';

import { render, screen } from '@testing-library/react';

import HorizontalScroll from './HorizontalScroll';

describe('Gitt at HorizontalScroll skal rendres', (): void => {
  describe('Når HorizontalScroll skal vises vanlig', (): void => {
    test('Så rendres HorizontalScroll riktig', (): void => {
      const { container } = render(<HorizontalScroll>{'Teksten sin'}</HorizontalScroll>);

      const text = screen.getByText('Teksten sin');
      expect(text).toBeVisible();

      expect(container).toMatchSnapshot();
    });
  });
});
