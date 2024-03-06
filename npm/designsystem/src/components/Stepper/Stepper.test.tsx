import React from 'react';

import { render, screen } from '@testing-library/react';
import { vi as jest } from 'vitest';

import Stepper from './Stepper';
import { useSize } from '../../hooks/useSize';

jest.mock('../../hooks/useSize', () => ({
  useSize: jest.fn(),
}));

describe('Stepper', (): void => {
  describe('Gitt at Stepper har standard verdier', (): void => {
    describe('Når testId-prop er satt', (): void => {
      test('Så kan komponenten finnes ved hjelp av testId', (): void => {
        render(<Stepper testId="bare-tester" />);

        const stepper = screen.getByTestId('bare-tester');
        expect(stepper).toBeVisible();
      });
    });
    describe('Når komponenten vises', (): void => {
      describe('Når ariaLabel er satt', (): void => {
        test('Så har den riktig rolle og label', (): void => {
          render(<Stepper ariaLabel="Steg for steg" />);

          const stepper = screen.getByRole('progressbar', { name: 'Steg for steg' });
          expect(stepper).toBeVisible();
        });
      });
      describe('Når ariaLabelledById er satt', (): void => {
        test('Så har den riktig rolle og label', (): void => {
          render(
            <>
              <h2 id="custom-id">{'Steg for steg'}</h2>
              <Stepper ariaLabelledById="custom-id" />
            </>
          );

          const stepper = screen.getByRole('progressbar', { name: 'Steg for steg' });
          expect(stepper).toBeVisible();
        });
      });
      test('Så har den riktig analyticsid', (): void => {
        render(<Stepper ariaLabel="Steg for steg" />);

        const stepper = screen.getByLabelText('Steg for steg');
        expect(stepper).toHaveAttribute('data-analyticsid', 'stepper');
      });
      test('Så har den riktige defaultverdier', (): void => {
        render(<Stepper ariaLabel="Steg for steg" />);

        const stepper = screen.getByLabelText('Steg for steg');

        expect(stepper).toHaveAttribute('aria-valuenow', '0');
        expect(stepper).toHaveAttribute('aria-valuemin', '0');
        expect(stepper).toHaveAttribute('aria-valuemax', '2');
      });
    });
    describe('Når stepper har plass til tre prikker', (): void => {
      test('Så vises tre prikker', (): void => {
        useSize.mockReturnValue({ width: 84 });
        render(<Stepper ariaLabel="Steg for steg" />);

        const dots = screen.getAllByTestId('dot');
        expect(dots).toHaveLength(3);
      });
    });
    describe('Når stepper ikke har plass til tre prikker', (): void => {
      test('Så vises tall og to prikker', (): void => {
        useSize.mockReturnValue({ width: 83 });
        render(<Stepper ariaLabel="Steg for steg" />);

        const number = screen.getByText('0/2');
        expect(number).toBeVisible();

        const dots = screen.getAllByTestId('dot');
        expect(dots).toHaveLength(2);
      });
    });
  });
  describe('Gitt at Stepper har custom value, min og max', (): void => {
    describe('Når value er innenfor min og max', (): void => {
      test('Så har den riktige verdier', (): void => {
        render(<Stepper ariaLabel="Steg for steg" value={5} min={3} max={7} />);

        const stepper = screen.getByLabelText('Steg for steg');

        expect(stepper).toHaveAttribute('aria-valuenow', '5');
        expect(stepper).toHaveAttribute('aria-valuemin', '3');
        expect(stepper).toHaveAttribute('aria-valuemax', '7');
      });
    });
    describe('Når value er lavere enn min', (): void => {
      test('Så har den riktige verdier', (): void => {
        render(<Stepper ariaLabel="Steg for steg" value={1} min={3} max={7} />);

        const stepper = screen.getByLabelText('Steg for steg');

        expect(stepper).toHaveAttribute('aria-valuenow', '3');
        expect(stepper).toHaveAttribute('aria-valuemin', '3');
        expect(stepper).toHaveAttribute('aria-valuemax', '7');
      });
    });
    describe('Når value er større enn max', (): void => {
      test('Så har den riktige verdier', (): void => {
        render(<Stepper ariaLabel="Steg for steg" value={8} min={3} max={7} />);

        const stepper = screen.getByLabelText('Steg for steg');

        expect(stepper).toHaveAttribute('aria-valuenow', '7');
        expect(stepper).toHaveAttribute('aria-valuemin', '3');
        expect(stepper).toHaveAttribute('aria-valuemax', '7');
      });
    });
    describe('Når stepper har plass til ti prikker', (): void => {
      test('Så vises ti prikker', (): void => {
        useSize.mockReturnValue({ width: 280 });
        render(<Stepper ariaLabel="Steg for steg" min={1} max={10} />);

        const dots = screen.getAllByTestId('dot');
        expect(dots).toHaveLength(10);
      });
    });
    describe('Når stepper ikke har plass til ti prikker', (): void => {
      test('Så vises tall og to prikker', (): void => {
        useSize.mockReturnValue({ width: 279 });
        render(<Stepper ariaLabel="Steg for steg" min={1} max={10} />);

        const number = screen.getByText('1/10');
        expect(number).toBeVisible();

        const dots = screen.getAllByTestId('dot');
        expect(dots).toHaveLength(2);
      });
    });
  });
});
