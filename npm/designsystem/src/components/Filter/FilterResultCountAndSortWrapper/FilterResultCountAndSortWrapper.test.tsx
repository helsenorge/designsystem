import { render, screen } from '@testing-library/react';

import FilterResultCountAndSortWrapper from './FilterResultCountAndSortWrapper';

describe('Gitt at FilterResultCountAndSortWrapper skal vises', (): void => {
  describe('Når begge props er satt', (): void => {
    test('Så vises både antall treff og sortering', (): void => {
      render(
        <FilterResultCountAndSortWrapper resultCount={<span>{'10 treff'}</span>} sortComponent={<span>{'Sorter etter dato'}</span>} />
      );

      expect(screen.getByText('10 treff')).toBeVisible();
      expect(screen.getByText('Sorter etter dato')).toBeVisible();
    });
  });
});
