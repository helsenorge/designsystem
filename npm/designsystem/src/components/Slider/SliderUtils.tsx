// TO-DO: beskrive hver methode i utils, både formål og parametrene

export const stopEvent = (e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): boolean => {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
};

export const getMousePosition = (e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): number => {
  if (isTouchEvent(e)) {
    const touch: Touch = (e as TouchEvent).touches[0];
    return touch.pageX;
  }
  return (e as MouseEvent).pageX;
};

export const getElementWidth = (el: HTMLDivElement | null): number => {
  const elementViewportPosition = el ? el.getBoundingClientRect() : undefined;
  return elementViewportPosition ? elementViewportPosition.right - elementViewportPosition.left : 0;
};

export const isTouchEvent = (e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): boolean => {
  if (
    e.type === 'touchcancel' ||
    e.type === 'touchend' ||
    e.type === 'touchenter' ||
    e.type === 'touchleave' ||
    e.type === 'touchmove' ||
    e.type === 'touchstart'
  ) {
    if ((e as TouchEvent).touches.length === 0) {
      return false;
    } else {
      return true;
    }
  }
  return false;
};

export const notifyMove = (value: number, onChange?: (value: number) => void): void => {
  if (onChange) {
    onChange(value);
  }
};

// TO-DO min kommer alltid før max, bytt gjerne rekkefølge på dem. Gjelder flere.
export const calculateSliderPositionBasedOnValue = (
  value: number,
  trackerWidth: number,
  sliderWidth: number,
  max: number,
  min: number
): number => {
  const size: number = max - min;
  const pixelPerSize: number = (trackerWidth - sliderWidth) / size;
  return pixelPerSize * value;
};

export const calculateValueBasedOnSliderPosition = (
  sliderPosition: number,
  max: number,
  min: number,
  trackerWidth: number,
  sliderWidth: number,
  step: number
): number => {
  const size: number = max - min;
  const pixelPerSize: number = (trackerWidth - sliderWidth) / size;
  const newValue: number = Math.round(sliderPosition / pixelPerSize);
  return alignValue(newValue, step, max);
};

export const alignValue = (value: number, step: number, max: number): number => {
  const valModStep: number = value % step;
  let alignedValue: number = value - valModStep;

  const possibleMaxValueWithCurrentStep: number = Math.floor(max / step) * step;
  if (value > possibleMaxValueWithCurrentStep) {
    const diff: number = max - possibleMaxValueWithCurrentStep;
    if (value > possibleMaxValueWithCurrentStep + diff / 2) {
      alignedValue = max;
    }
  }

  return Math.round(alignedValue);
};

export const calculateChangeOfPosition = (diff: number, sliderXPos: number, trackerWidth: number, sliderWidth: number): number => {
  let newSliderPos: number = sliderXPos + diff;
  if (newSliderPos < 0) {
    newSliderPos = 0;
  }
  if (newSliderPos > trackerWidth - sliderWidth) {
    newSliderPos = trackerWidth - sliderWidth;
  }
  return newSliderPos;
};

export const calculateSliderTranslate = (
  XPos: number,
  sliderElement: HTMLDivElement | null,
  sliderWidth: number,
  cb: (a: number) => void
) => {
  const sliderPageXPos = sliderElement ? sliderElement.getBoundingClientRect().left : 0;
  const diff: number = sliderPageXPos ? XPos - (sliderPageXPos + sliderWidth / 2) : 0;
  cb(diff);
};

export const addMouseListeners = (moveMouseEvent: any, mouseUpEvent: any): void => {
  document.addEventListener('mousemove', moveMouseEvent, false);
  document.addEventListener('mouseup', mouseUpEvent, false);
};

export const removeMouseListeners = (moveMouseEvent: any, mouseUpEvent: any): void => {
  document.removeEventListener('mousemove', moveMouseEvent, false);
  document.removeEventListener('mouseup', mouseUpEvent, false);
};

export const addTouchListeners = (moveTouchEvent: any, touchUpEvent: any): void => {
  document.addEventListener('touchmove', moveTouchEvent, false);
  document.addEventListener('touchend', touchUpEvent, false);
};

export const removeTouchListeners = (moveTouchEvent: any, touchUpEvent: any): void => {
  document.removeEventListener('touchmove', moveTouchEvent, false);
  document.removeEventListener('touchend', touchUpEvent, false);
};
