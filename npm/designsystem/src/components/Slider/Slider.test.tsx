import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Slider } from './Slider';

describe('Gitt at Slider skal vises', (): void => {
  describe('Når slider rendres', (): void => {
    test('Så vises slider riktig', (): void => {
      const title = 'This is a title';
      const optionLeft = 'left';
      const optionRight = 'right';
      const { container } = render(<Slider title={title} optionLeft={optionLeft} optionRight={optionRight} />);
      expect(container).toMatchSnapshot();

      const titleElement = screen.getByText(title);
      expect(titleElement).toBeTruthy();

      const optionLeftElement = screen.getByText(optionLeft);
      expect(optionLeftElement).toBeTruthy();

      const optionRightElement = screen.getByText(optionRight);
      expect(optionRightElement).toBeTruthy();

      const sliderElement = screen.getByRole('slider');
      expect(sliderElement.className).toBe('slider__trigger');
    });
  });
  describe('Når title ikke settes', (): void => {
    test('Så rendres ikke title elementet', (): void => {
      const { container } = render(<Slider />);

      const titleElement = container.getElementsByTagName('h3');
      expect(titleElement.length).toBe(0);
    });
  });
  describe('Når optionLeft og optionRight ikke settes', (): void => {
    test('Så rendres ikke options tekst', (): void => {
      const { container } = render(<Slider />);

      const titleElement = container.getElementsByTagName('p');
      expect(titleElement.length).toBe(0);
    });
  });
  describe('Når disabled settes til true', (): void => {
    test('Så deaktiveres slideren', (): void => {
      const { container } = render(<Slider disabled={true} />);

      const sliderElement = screen.getByRole('slider');
      expect(sliderElement.className).toBe('slider__trigger slider__trigger--disabled');
    });
  });
  describe('Når onChange settes', (): void => {
    test('Så kalles funksjonen som den ble satt til', (): void => {
      const mockFunction = jest.fn();
      render(<Slider onChange={mockFunction} />);

      const sliderElement = screen.getByRole('slider');
      fireEvent(
        sliderElement,
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(mockFunction).toHaveBeenCalledTimes(1);
    });
  });
  describe('Når step settes', (): void => {
    test('Så settes verdi riktig ved bevegelse av slider triggeren', () => {
      // Begynt å se på en løsning rundt window mocking:
      /* Object.defineProperties(window.HTMLElement.prototype, {
        offsetLeft: {
          get: function() {
            return parseFloat(window.getComputedStyle(this).marginLeft) || 0;
          },
        },
        offsetTop: {
          get: function() {
            return parseFloat(window.getComputedStyle(this).marginTop) || 0;
          },
        },
        offsetHeight: {
          get: function() {
            return parseFloat(window.getComputedStyle(this).height) || 0;
          },
        },
        offsetWidth: {
          get: function() {
            return parseFloat(window.getComputedStyle(this).width) || 0;
          },
        },
      }); */

      const step = 10;
      const { container } = render(
        <div style={{ width: '300px' }}>
          <Slider step={step} />
        </div>
      );

      const sliderElement = screen.getByRole('slider');
      fireEvent.keyDown(sliderElement, { key: 'ArrowRight', code: 'ArrowRight' });
      expect(sliderElement).toHaveAttribute('style', 'left: 233px;');
      expect(sliderElement).toHaveAttribute('aria-valuenow', '60');

      // fireEvent.keyDown(trackerElement, { key: 'ArrowRight', code: 'ArrowRight' });
      // await waitFor(() => {
      //   expect(sliderElement).toHaveAttribute('aria-valuenow', '60');
      // });
    });
  });
});
