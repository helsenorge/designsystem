import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Slider } from './Slider';

describe('Gitt at Slider skal vises', (): void => {
  describe('Når slider rendres', (): void => {
    test('Så vises slider riktig', (): void => {
      const title = 'This is a title';
      const optionLeft = 'left';
      const optionRight = 'right';
      const { container } = render(<Slider title={title} labelLeft={optionLeft} labelRight={optionRight} />);
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

    test('Så er sliderElement posisjonert riktig', () => {
      const original = global.document['window'];
      const getBoundingClientRect = jest
        .fn()
        .mockReturnValueOnce({ left: 100, right: 500 })
        .mockReturnValueOnce({ left: 150, right: 450 });
      window.HTMLDivElement.prototype.getBoundingClientRect = getBoundingClientRect;

      const step = 10;
      render(<Slider step={step} />);

      const sliderElement = screen.getByRole('slider');
      expect(sliderElement).toHaveAttribute('style', 'left: 50px;');
      global.document['window'] = original;
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
      render(<Slider disabled={true} />);

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

  describe('Når keyDown kalles', (): void => {
    test('Så settes verdi riktig ved bevegelse av slider triggeren', () => {
      const original = global.document['window'];

      const getBoundingClientRect = jest
        .fn()
        .mockReturnValueOnce({ left: 100, right: 900 })
        .mockReturnValueOnce({ left: 150, right: 850 });
      window.HTMLDivElement.prototype.getBoundingClientRect = getBoundingClientRect;

      const step = 10;
      render(<Slider step={step} />);

      const sliderElement = screen.getByRole('slider');
      expect(sliderElement).toHaveAttribute('aria-valuenow', '50');
      expect(sliderElement).toHaveAttribute('style', 'left: 50px;');

      fireEvent.keyDown(sliderElement, { key: 'ArrowRight', code: 'ArrowRight' });
      expect(sliderElement).toHaveAttribute('aria-valuenow', '60');
      expect(sliderElement).toHaveAttribute('style', 'left: 60px;');

      fireEvent.keyDown(sliderElement, { key: 'ArrowLeft', code: 'ArrowLeft' });
      fireEvent.keyDown(sliderElement, { key: 'ArrowLeft', code: 'ArrowLeft' });
      expect(sliderElement).toHaveAttribute('aria-valuenow', '40');
      expect(sliderElement).toHaveAttribute('style', 'left: 40px;');
      global.document['window'] = original;
    });
  });
});
