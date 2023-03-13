import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Slider } from './Slider';

// Slider er aria-labelledby flere IDer og trenger derfor en unik, stabil ID under test
let mocktestid = 0;
jest.mock('../../hooks/useUuid', () => ({
  useUuid: jest.fn().mockImplementation(() => {
    mocktestid++;
    return 'slider-test-' + mocktestid;
  }),
}));

describe('Gitt at Slider skal vises', (): void => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Når slider rendres', (): void => {
    test('Så vises slider riktig', (): void => {
      const { container } = render(<Slider title={'Hvor viktig er det for deg?'} labelLeft={'Ikke viktig'} labelRight={'Viktig'} />);
      expect(container).toMatchSnapshot();

      const heading = screen.getByRole('heading', { name: 'Hvor viktig er det for deg?' });
      expect(heading).toBeVisible();

      const optionLeft = screen.getByText('Ikke viktig');
      expect(optionLeft).toBeVisible();

      const optionRight = screen.getByText('Viktig');
      expect(optionRight).toBeVisible();

      const slider = screen.getByRole('slider', { name: 'Hvor viktig er det for deg? Ikke viktig Viktig' });
      expect(slider).toHaveClass('slider__marker');
    });
  });

  describe('Når title ikke settes', (): void => {
    test('Så rendres ikke title elementet', (): void => {
      render(<Slider />);

      const title = screen.queryByRole('heading');
      expect(title).not.toBeInTheDocument();
    });
  });

  describe('Når title og aria-label er satt', (): void => {
    test('Så bruker slider aria-label som label', (): void => {
      render(<Slider title="Dette er tittel" ariaLabel="Dette er aria-label" />);

      const title = screen.getByRole('heading', { name: 'Dette er tittel' });
      expect(title).toBeVisible();

      const slider = screen.getByRole('slider', { name: 'Dette er aria-label' });
      expect(slider).toBeVisible();
    });
  });

  describe('Når title, labelLeft og labelRight ikke settes', (): void => {
    test('Så har ikke  slider noe accessible name (buuuu)', (): void => {
      render(<Slider />);

      const slider = screen.getByRole('slider');
      expect(slider).toHaveAccessibleName('');
    });
  });

  describe('Når disabled settes til true', (): void => {
    test('Så deaktiveres slideren', (): void => {
      render(<Slider disabled={true} />);

      const slider = screen.getByRole('slider');
      expect(slider).toHaveAttribute('aria-disabled', 'true');
      expect(slider).toHaveClass('slider__marker--disabled');
    });
  });

  describe('Når onChange settes', (): void => {
    test('Så kalles funksjonen som den ble satt til', async (): Promise<void> => {
      const mockOnChange = jest.fn();
      render(<Slider onChange={mockOnChange} />);

      const slider = screen.getByRole('slider');

      await userEvent.click(slider);

      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<Slider testId="bare-tester" />);

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });

  describe('Når piltaster brukes for å bevege trackeren', (): void => {
    test('Så settes verdien riktig', async () => {
      render(<Slider />);

      const slider = screen.getByRole('slider');

      await userEvent.click(slider);
      expect(slider).toHaveAttribute('aria-valuenow', '50');

      await userEvent.keyboard('{ArrowRight}');
      await userEvent.keyboard('{ArrowUp}');
      expect(slider).toHaveAttribute('aria-valuenow', '52');

      await userEvent.keyboard('{ArrowLeft}');
      await userEvent.keyboard('{ArrowDown}');
      await userEvent.keyboard('{ArrowLeft}');
      await userEvent.keyboard('{ArrowDown}');
      expect(slider).toHaveAttribute('aria-valuenow', '48');
    });
  });

  describe('Når pageup/pagedown brukes for å bevege trackeren', (): void => {
    test('Så settes verdien riktig', async () => {
      render(<Slider />);

      const slider = screen.getByRole('slider');

      await userEvent.click(slider);
      expect(slider).toHaveAttribute('aria-valuenow', '50');

      await userEvent.keyboard('{PageUp}');
      expect(slider).toHaveAttribute('aria-valuenow', '60');

      await userEvent.keyboard('{PageDown}');
      await userEvent.keyboard('{PageDown}');
      expect(slider).toHaveAttribute('aria-valuenow', '40');
    });
  });

  describe('Når home/end brukes for å bevege trackeren', (): void => {
    test('Så settes verdien riktig', async () => {
      render(<Slider />);

      const slider = screen.getByRole('slider');

      await userEvent.click(slider);
      expect(slider).toHaveAttribute('aria-valuenow', '50');

      await userEvent.keyboard('{Home}');
      expect(slider).toHaveAttribute('aria-valuenow', '0');

      await userEvent.keyboard('{End}');
      expect(slider).toHaveAttribute('aria-valuenow', '100');
    });
  });
});
