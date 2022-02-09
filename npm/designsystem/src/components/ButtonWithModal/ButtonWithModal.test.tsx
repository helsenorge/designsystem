import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonWithModal from './ButtonWithModal';

describe('Gitt at ButtonWithModal skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(
        <ButtonWithModal testId="bare-tester" buttonText="Klikk" title="Tittel">
          123
        </ButtonWithModal>
      );

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });
});
