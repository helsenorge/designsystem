import { render, screen } from '@testing-library/react';

import FilterButtonAndChipsWrapper from './FilterButtonAndChipsWrapper';
import Chip from '../../Chip';

describe('Gitt at FilterButtonAndChipsWrapper skal vises', (): void => {
  describe('Når filterButtonComponent er satt', (): void => {
    test('Så vises filterknappen', (): void => {
      render(<FilterButtonAndChipsWrapper filterButtonComponent={<button>{'Filter'}</button>} filterChips={[]} />);

      expect(screen.getByRole('button', { name: /Filter/i })).toBeVisible();
    });
  });

  describe('Når filterChips er satt', (): void => {
    test('Så vises alle chipsene', (): void => {
      const chips = [<Chip>{'Chip 1'}</Chip>, <Chip>{'Chip 2'}</Chip>, <Chip>{'Chip 3'}</Chip>];

      render(<FilterButtonAndChipsWrapper filterButtonComponent={<button>{'Filter'}</button>} filterChips={chips} />);

      expect(screen.getByText('Chip 1')).toBeVisible();
      expect(screen.getByText('Chip 2')).toBeVisible();
      expect(screen.getByText('Chip 3')).toBeVisible();
    });
  });

  describe('Når testId er satt', (): void => {
    test('Så kan wrapperen finnes med testId', (): void => {
      render(<FilterButtonAndChipsWrapper filterButtonComponent={<button>{'Filter'}</button>} filterChips={[]} testId="wrapper-test" />);

      expect(screen.getByTestId('wrapper-test')).toBeVisible();
    });
  });
});
