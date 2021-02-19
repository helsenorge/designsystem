import React from 'react';
import { fireEvent, render, screen, createEvent } from '@testing-library/react';
import { Slider } from './Slider';

import * as utils from './SliderUtils';

type FakeMouseEventInit = {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  altKey?: boolean;
  button?: 0 | 1 | 2 | 3 | 4;
  buttons?: number;
  clientX?: number;
  clientY?: number;
  ctrlKey?: boolean;
  metaKey?: boolean;
  movementX?: number;
  movementY?: number;
  offsetX?: number;
  offsetY?: number;
  pageX?: number;
  pageY?: number;
  screenX?: number;
  screenY?: number;
  shiftKey?: boolean;
  x?: number;
  y?: number;
  touches?: Array<Object>;
};

class FakeMouseEvent extends MouseEvent {
  offsetX: number;
  offsetY: number;
  pageX: number;
  pageY: number;
  x: number;
  y: number;

  constructor(type: string, values: FakeMouseEventInit) {
    const { touches, pageX, pageY, offsetX, offsetY, x, y, ...mouseValues } = values;
    super(type, mouseValues);

    Object.assign(this, {
      touches: touches || [],
      offsetX: offsetX || 0,
      offsetY: offsetY || 0,
      pageX: pageX || 0,
      pageY: pageY || 0,
      x: x || 0,
      y: y || 0,
    });
  }
}

export function getMouseEvent(type: string, values: FakeMouseEventInit = {}): FakeMouseEvent {
  values = {
    bubbles: true,
    cancelable: true,
    ...values,
  };
  return new FakeMouseEvent(type, values);
}

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

  describe('Når tastaturet brukes for å bevege trackeren', (): void => {
    test('Så settes verdien riktig', () => {
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

  describe('Når musen brukes for å bevege trackeren', (): void => {
    test('Så sjekker den mousePosition og beregner riktig verdi', () => {
      const original = global.document['window'];

      const calculateSliderTranslateMock = jest.spyOn(utils, 'calculateSliderTranslate');
      const getMousePositionMock = jest.spyOn(utils, 'getMousePosition');

      const getBoundingClientRect = jest
        .fn()
        .mockReturnValueOnce({ left: 100, right: 900 })
        .mockReturnValueOnce({ left: 150, right: 850 })
        .mockReturnValueOnce({ left: 100, right: 900 })
        .mockReturnValueOnce({ left: 150, right: 850 })
        .mockReturnValueOnce({ left: 30, right: 900 });
      window.HTMLDivElement.prototype.getBoundingClientRect = getBoundingClientRect;

      const step = 10;
      render(<Slider step={step} />);

      const sliderElement = screen.getByRole('slider');
      expect(sliderElement).toHaveAttribute('aria-valuenow', '50');
      expect(sliderElement).toHaveAttribute('style', 'left: 50px;');
      const trackerElement = screen.getByTestId('tracker');

      const mouseDown = getMouseEvent('mousedown', {
        pageX: 400,
      });

      fireEvent(trackerElement, mouseDown);
      // sjekker at getMousePosition kalles
      expect(getMousePositionMock).toHaveBeenCalled();
      // sjekker at funksjonen kalles med riktig mousePosition: 400
      expect(calculateSliderTranslateMock.mock.calls[0][0]).toBe(400);
      // sjekker at funksjonen kalles med riktig slider størrelse: 700px
      expect(calculateSliderTranslateMock.mock.calls[0][2]).toBe(700);
      // sjekker at verdien er beregnet riktig
      expect(sliderElement).toHaveAttribute('aria-valuenow', '70');
      expect(sliderElement).toHaveAttribute('style', 'left: 70px;');

      global.document['window'] = original;
    });
  });

  describe('Når musen brukes for å bevege trackeren', (): void => {
    test('Så er posisjonen uendret så lenge musen ikke er trykket', () => {
      const original = global.document['window'];
      const stopEventMock = jest.spyOn(utils, 'stopEvent');

      const getBoundingClientRect = jest
        .fn()
        .mockReturnValueOnce({ left: 100, right: 900 })
        .mockReturnValueOnce({ left: 150, right: 850 })
        .mockReturnValueOnce({ left: 100, right: 900 })
        .mockReturnValueOnce({ left: 150, right: 850 })
        .mockReturnValueOnce({ left: 30, right: 900 });
      window.HTMLDivElement.prototype.getBoundingClientRect = getBoundingClientRect;

      const step = 10;
      render(<Slider step={step} />);

      const sliderElement = screen.getByRole('slider');
      expect(sliderElement).toHaveAttribute('aria-valuenow', '50');
      expect(sliderElement).toHaveAttribute('style', 'left: 50px;');
      const trackerElement = screen.getByTestId('tracker');

      const mouseMove = getMouseEvent('mousemove', {
        pageX: 400,
      });

      fireEvent(trackerElement, mouseMove);
      expect(stopEventMock).toHaveBeenCalled();

      expect(sliderElement).toHaveAttribute('aria-valuenow', '50');
      expect(sliderElement).toHaveAttribute('style', 'left: 50px;');

      global.document['window'] = original;
    });
  });

  describe('Når musen er ferdig brukt etter bevegelse av trackeren', (): void => {
    test('Så stoppes det eventene og posisjonen er uendret', () => {
      const original = global.document['window'];
      const stopEventMock = jest.spyOn(utils, 'stopEvent');
      const removeMouseListenersMock = jest.spyOn(utils, 'removeMouseListeners');
      const removeTouchListenersMock = jest.spyOn(utils, 'removeTouchListeners');

      const getBoundingClientRect = jest
        .fn()
        .mockReturnValueOnce({ left: 100, right: 900 })
        .mockReturnValueOnce({ left: 150, right: 850 })
        .mockReturnValueOnce({ left: 100, right: 900 })
        .mockReturnValueOnce({ left: 150, right: 850 })
        .mockReturnValueOnce({ left: 30, right: 900 });
      window.HTMLDivElement.prototype.getBoundingClientRect = getBoundingClientRect;

      const step = 10;
      render(<Slider step={step} />);

      const sliderElement = screen.getByRole('slider');
      expect(sliderElement).toHaveAttribute('aria-valuenow', '50');
      expect(sliderElement).toHaveAttribute('style', 'left: 50px;');
      const trackerElement = screen.getByTestId('tracker');

      const mouseUp = getMouseEvent('mouseup', {
        pageX: 400,
      });

      fireEvent(trackerElement, mouseUp);
      expect(stopEventMock).toHaveBeenCalled();
      expect(removeMouseListenersMock).toHaveBeenCalled();
      expect(removeTouchListenersMock).toHaveBeenCalled();
      expect(sliderElement).toHaveAttribute('aria-valuenow', '50');
      expect(sliderElement).toHaveAttribute('style', 'left: 50px;');

      global.document['window'] = original;
    });
  });

  describe('Når touch brukes for å bevege trackeren', (): void => {
    test('Så sjekker den touch position og beregner riktig verdi', () => {
      const original = global.document['window'];

      const calculateSliderTranslateMock = jest.spyOn(utils, 'calculateSliderTranslate');
      const getMousePositionMock = jest.spyOn(utils, 'getMousePosition');

      const getBoundingClientRect = jest
        .fn()
        .mockReturnValueOnce({ left: 100, right: 900 })
        .mockReturnValueOnce({ left: 150, right: 850 })
        .mockReturnValueOnce({ left: 100, right: 900 })
        .mockReturnValueOnce({ left: 150, right: 850 })
        .mockReturnValueOnce({ left: 30, right: 900 });
      window.HTMLDivElement.prototype.getBoundingClientRect = getBoundingClientRect;

      const step = 10;
      render(<Slider step={step} />);

      const sliderElement = screen.getByRole('slider');
      expect(sliderElement).toHaveAttribute('aria-valuenow', '50');
      expect(sliderElement).toHaveAttribute('style', 'left: 50px;');
      const trackerElement = screen.getByTestId('tracker');

      const touchStart = getMouseEvent('touchstart', {
        touches: [{ pageX: 400 }],
      });

      fireEvent(trackerElement, touchStart);
      // sjekker at getMousePosition kalles
      expect(getMousePositionMock).toHaveBeenCalled();
      // sjekker at funksjonen kalles med riktig mousePosition: 400
      expect(calculateSliderTranslateMock.mock.calls[1][0]).toBe(400);
      // sjekker at funksjonen kalles med riktig slider størrelse: 700px
      expect(calculateSliderTranslateMock.mock.calls[1][2]).toBe(700);
      // sjekker at verdien er beregnet riktig
      expect(sliderElement).toHaveAttribute('aria-valuenow', '70');
      expect(sliderElement).toHaveAttribute('style', 'left: 70px;');

      global.document['window'] = original;
    });
  });
});

describe('Gitt at SliderUtils funksjoner skal kjøres', (): void => {
  describe('Når stopEvent funksjonen blir kalt', (): void => {
    test('Så har stopPropagation og preventDefault blitt kalt på eventet', () => {
      const mouseDown = getMouseEvent('mousedown');
      mouseDown.stopPropagation = jest.fn();
      mouseDown.preventDefault = jest.fn();

      utils.stopEvent(mouseDown);

      expect(mouseDown.stopPropagation).toHaveBeenCalledTimes(1);
      expect(mouseDown.preventDefault).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når getMousePosition funksjonen blir kalt', (): void => {
    test('Så kan musens posisjon hentes', () => {
      const mouseDown = getMouseEvent('mousedown', {
        pageX: 400,
      });
      const touchStart = getMouseEvent('touchstart', {
        touches: [{ pageX: 800 }],
      });

      const mouseX = utils.getMousePosition(mouseDown);
      const touchX = utils.getMousePosition(touchStart);

      expect(mouseX).toBe(400);
      expect(touchX).toBe(800);
    });
  });

  describe('Når getElementWidth funksjonen blir kalt', (): void => {
    test('Så får vi ut elementets bredde', () => {
      const original = global.document['window'];

      const getBoundingClientRect = jest.fn().mockReturnValueOnce({ left: 100, right: 900 });
      window.HTMLDivElement.prototype.getBoundingClientRect = getBoundingClientRect;

      const divElement = document.createElement('div');

      const elementWidth = utils.getElementWidth(divElement);
      expect(elementWidth).toBe(800);

      global.document['window'] = original;
    });
  });

  describe('Når isTouchEvent funksjonen blir kalt', (): void => {
    test('Så får vi riktig svar tilbake', () => {
      const mouseDown = getMouseEvent('mousedown');
      const touchStart = getMouseEvent('touchstart', {
        touches: [0],
      });

      const mouseIsTouch = utils.isTouchEvent(mouseDown);
      const touchIsTouch = utils.isTouchEvent(touchStart);

      expect(mouseIsTouch).toBe(false);
      expect(touchIsTouch).toBe(true);
    });
  });

  describe('Når calculateSliderPositionBasedOnValue funksjonen blir kalt', (): void => {
    test('Så får vi riktig slider posisjon tilbake', () => {
      const sliderPos = utils.calculateSliderPositionBasedOnValue(50, 100, 10, 0, 100);
      expect(sliderPos).toBe(45);
    });
  });

  describe('Når calculateValueBasedOnSliderPosition funksjonen blir kalt', (): void => {
    test('Så får vi riktig value tilbake', () => {
      const value = utils.calculateValueBasedOnSliderPosition(50, 100, 10, 10, 0, 100);
      expect(value).toBe(50);
    });
  });

  describe('Når alignValue funksjonen blir kalt', (): void => {
    test('Så får vi riktig justert value tilbake', () => {
      let value = utils.alignValue(55, 10, 100);
      expect(value).toBe(50);

      value = utils.alignValue(50, 10, 100);
      expect(value).toBe(50);

      value = utils.alignValue(99, 5, 100);
      expect(value).toBe(95);
    });
  });

  describe('Når calculateChangeOfPosition funksjonen blir kalt', (): void => {
    test('Så får vi riktig slider posisjon tilbake', () => {
      const trackerWidth = 100;
      const sliderWidth = 10;
      const maxWidth = trackerWidth - sliderWidth;
      let sliderPos = utils.calculateChangeOfPosition(-100, trackerWidth, sliderWidth, 10);

      expect(sliderPos).toBe(0);

      sliderPos = utils.calculateChangeOfPosition(30, trackerWidth, sliderWidth, 50);
      expect(sliderPos).toBe(80);

      sliderPos = utils.calculateChangeOfPosition(100, trackerWidth, sliderWidth, 90);
      expect(sliderPos).toBe(maxWidth);
    });
  });

  describe('Når calculateSliderTranslate funksjonen blir kalt', (): void => {
    test('Så får vi riktig slider posisjon tilbake', () => {
      const original = global.document['window'];

      const getBoundingClientRect = jest.fn().mockReturnValueOnce({ left: 100, right: 900 });
      window.HTMLDivElement.prototype.getBoundingClientRect = getBoundingClientRect;

      const mockCallBack = jest.fn();
      const divElement = document.createElement('div');
      utils.calculateSliderTranslate(50, divElement, 10, mockCallBack);

      expect(mockCallBack).toHaveBeenCalledTimes(1);
      expect(mockCallBack).toHaveBeenCalledWith(-55);

      global.document['window'] = original;
    });
  });
});
