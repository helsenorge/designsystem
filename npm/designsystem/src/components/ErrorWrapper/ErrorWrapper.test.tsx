import React from 'react';

import { render, screen } from '@testing-library/react';

import ErrorWrapper from './ErrorWrapper';

describe('Gitt at det skal vises en valideringsfeil', (): void => {
  describe('Når ErrorWrapper rendres', (): void => {
    it('Så vises Valideringsfeilen', (): void => {
      render(<ErrorWrapper errorText="Dette er en feil" />);

      const errorText = screen.getByText('Dette er en feil');
      expect(errorText).toBeVisible();
    });

    it('Så settes id på feilmeldingen når errorTextId er satt', (): void => {
      render(<ErrorWrapper errorText="Har id" errorTextId="min-feil-id" />);

      const errorText = screen.getByText('Har id');
      expect(errorText).toHaveAttribute('id', 'min-feil-id');
    });

    it('Så settes data-testid når testId er satt', (): void => {
      render(<ErrorWrapper errorText="Har testid" testId="error-wrapper" />);

      const wrapper = screen.getByTestId('error-wrapper');
      expect(wrapper).toBeInTheDocument();
    });

    it('Så settes ref på feilmeldingen når errorMessageRef er satt', (): void => {
      const ref = React.createRef<HTMLDivElement>();
      render(<ErrorWrapper errorText="Ref mål" errorMessageRef={ref} />);

      expect(ref.current).not.toBeNull();
      expect(ref.current?.textContent).toBe('Ref mål');
      expect(ref.current).toHaveAttribute('tabindex', '-1');
    });
  });

  describe('Når ErrorWrapper rendres uten feiltekst', (): void => {
    it('Så vises ikke feilmeldings-elementet', (): void => {
      const { container } = render(
        <ErrorWrapper>
          <span>Ingen feil</span>
        </ErrorWrapper>
      );

      expect(container.querySelector('p')).toBeNull();
      expect(screen.getByText('Ingen feil')).toBeVisible();
    });
  });
});
