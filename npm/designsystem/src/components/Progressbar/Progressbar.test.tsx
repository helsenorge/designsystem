import React from 'react';
import { render, screen } from '@testing-library/react';
import Progressbar from './Progressbar';
import { useSize } from '../../hooks/useSize';

jest.mock('../../hooks/useSize', () => ({
  useSize: jest.fn(),
}));

describe('Progressbar', (): void => {
  describe('Gitt at Progressbar har standard verdier', (): void => {
    describe('Når testId-prop er satt', (): void => {
      test('Så kan komponenten finnes ved hjelp av testId', (): void => {
        render(<Progressbar testId="bare-tester" />);

        const progressbar = screen.getByTestId('bare-tester');
        expect(progressbar).toBeVisible();
      });
    });
    describe('Når komponenten vises', (): void => {
      describe('Når ariaLabel er satt', (): void => {
        test('Så har den riktig rolle og label', (): void => {
          render(<Progressbar ariaLabel="Steg for steg" />);

          const progressbar = screen.getByRole('progressbar', { name: 'Steg for steg' });
          expect(progressbar).toBeVisible();
        });
      });
      describe('Når ariaLabelledById er satt', (): void => {
        test('Så har den riktig rolle og label', (): void => {
          render(
            <>
              <h2 id="custom-id">Steg for steg</h2>
              <Progressbar ariaLabelledById="custom-id" />
            </>
          );

          const progressbar = screen.getByRole('progressbar', { name: 'Steg for steg' });
          expect(progressbar).toBeVisible();
        });
      });
      test('Så har den riktig analyticsid', (): void => {
        render(<Progressbar ariaLabel="Steg for steg" />);

        const progressbar = screen.getByLabelText('Steg for steg');
        expect(progressbar).toHaveAttribute('data-analyticsid', 'progressbar');
      });
      test('Så har den riktige defaultverdier', (): void => {
        render(<Progressbar ariaLabel="Steg for steg" />);

        const progressbar = screen.getByLabelText('Steg for steg');

        expect(progressbar).toHaveAttribute('aria-valuenow', '0');
        expect(progressbar).toHaveAttribute('aria-valuemin', '0');
        expect(progressbar).toHaveAttribute('aria-valuemax', '2');
      });
    });
    describe('Når progressbar har plass til tre prikker', (): void => {
      test('Så vises tre prikker', (): void => {
        useSize.mockReturnValue({ width: 84 });
        render(<Progressbar ariaLabel="Steg for steg" />);

        const dots = screen.getAllByTestId('dot');
        expect(dots).toHaveLength(3);
      });
    });
    describe('Når progressbar ikke har plass til tre prikker', (): void => {
      test('Så vises tall i stedet for prikker', (): void => {
        useSize.mockReturnValue({ width: 83 });
        render(<Progressbar ariaLabel="Steg for steg" />);

        const number = screen.getByText('0/2');
        expect(number).toBeVisible();

        const dots = screen.queryByTestId('dot');
        expect(dots).not.toBeInTheDocument();
      });
    });
  });
  describe('Gitt at Progressbar har custom value, min og max', (): void => {
    describe('Når value er innenfor min og max', (): void => {
      test('Så har den riktige verdier', (): void => {
        render(<Progressbar ariaLabel="Steg for steg" value={5} min={3} max={7} />);

        const progressbar = screen.getByLabelText('Steg for steg');

        expect(progressbar).toHaveAttribute('aria-valuenow', '5');
        expect(progressbar).toHaveAttribute('aria-valuemin', '3');
        expect(progressbar).toHaveAttribute('aria-valuemax', '7');
      });
    });
    describe('Når value er lavere enn min', (): void => {
      test('Så har den riktige verdier', (): void => {
        render(<Progressbar ariaLabel="Steg for steg" value={1} min={3} max={7} />);

        const progressbar = screen.getByLabelText('Steg for steg');

        expect(progressbar).toHaveAttribute('aria-valuenow', '3');
        expect(progressbar).toHaveAttribute('aria-valuemin', '3');
        expect(progressbar).toHaveAttribute('aria-valuemax', '7');
      });
    });
    describe('Når value er større enn max', (): void => {
      test('Så har den riktige verdier', (): void => {
        render(<Progressbar ariaLabel="Steg for steg" value={8} min={3} max={7} />);

        const progressbar = screen.getByLabelText('Steg for steg');

        expect(progressbar).toHaveAttribute('aria-valuenow', '7');
        expect(progressbar).toHaveAttribute('aria-valuemin', '3');
        expect(progressbar).toHaveAttribute('aria-valuemax', '7');
      });
    });
    describe('Når progressbar har plass til ti prikker', (): void => {
      test('Så vises ti prikker', (): void => {
        useSize.mockReturnValue({ width: 280 });
        render(<Progressbar ariaLabel="Steg for steg" min={1} max={10} />);

        const dots = screen.getAllByTestId('dot');
        expect(dots).toHaveLength(10);
      });
    });
    describe('Når progressbar ikke har plass til ti prikker', (): void => {
      test('Så vises tall i stedet for prikker', (): void => {
        useSize.mockReturnValue({ width: 279 });
        render(<Progressbar ariaLabel="Steg for steg" min={1} max={10} />);

        const number = screen.getByText('1/10');
        expect(number).toBeVisible();

        const dots = screen.queryByTestId('dot');
        expect(dots).not.toBeInTheDocument();
      });
    });
  });
});
