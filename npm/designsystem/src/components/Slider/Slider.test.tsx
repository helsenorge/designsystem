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

  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      const title = 'This is a title';
      const optionLeft = 'left';
      const optionRight = 'right';
      render(<Slider title={title} labelLeft={optionLeft} labelRight={optionRight} testId="bare-tester" />);

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });
});
