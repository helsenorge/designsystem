import { render, screen } from '@testing-library/react';

import ErrorWrapper from './ErrorWrapper';

describe('Gitt at det skal vises en valideringsfeil', (): void => {
  describe('Når ErrorWrapper rendres', (): void => {
    it('Så vises Valideringsfeilen', (): void => {
      const { container } = render(<ErrorWrapper errorText="Dette er en feil" />);

      expect(container).toMatchSnapshot();
      const errorText = screen.getByText('Dette er en feil');
      expect(errorText).toBeVisible();
    });
  });
});

describe('Gitt at det skal ikke vises en valideringsfeil', (): void => {
  describe('Når ErrorWrapper rendres', (): void => {
    it('Så vises ikke valideringsfeil', (): void => {
      const { container } = render(<ErrorWrapper />);

      expect(container).toMatchSnapshot();
    });
  });
});
