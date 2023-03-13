import React from 'react';

import { render, screen } from '@testing-library/react';

import ErrorWrapper from './ErrorWrapper';

describe('Gitt at det skal vises en valideringsfeil', (): void => {
  describe('Når ErrorWrapper rendres', (): void => {
    it('Så vises Valideringsfeilen', (): void => {
      const { container } = render(<ErrorWrapper errorText="Dette er en feil" />);

      expect(container).toMatchSnapshot();
      const errorText = screen.getByRole('alert');
      expect(errorText).toBeVisible();
      expect(errorText.className).toBe('error-wrapper__errors');
      expect(errorText.textContent).toBe('Dette er en feil');

      expect(errorText.parentElement.className).toBe('error-wrapper error-wrapper--with-error');
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
