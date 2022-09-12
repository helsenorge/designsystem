/** Stopper MouseEvent eller TouchEvent parameter e som sendes inn fra å nå videre.*/
export const stopEvent = (e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): boolean => {
  if (e.stopPropagation) e.stopPropagation();
  if (e.preventDefault) e.preventDefault();
  return false;
};

/** Henter ut x posisjon til MouseEvent eller TouchEvent e */
export const getMousePosition = (e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): number => {
  if (isTouchEvent(e)) {
    const touch: Touch = (e as TouchEvent).touches[0];
    return touch.pageX;
  }
  return (e as MouseEvent).pageX;
};

/** Returnerer en boolean på om innsendte event e er en TouchEvent */
export const isTouchEvent = (e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): boolean => {
  if (
    e.type === 'touchcancel' ||
    e.type === 'touchend' ||
    e.type === 'touchenter' ||
    e.type === 'touchleave' ||
    e.type === 'touchmove' ||
    e.type === 'touchstart'
  ) {
    return !((e as TouchEvent).touches.length === 0);
  }
  return false;
};

/** Kalkulerer x posisjonen til slideren basert på value som sendes inn,
 *  trackerWidth - bredden til trackeren, sliderWidth - bredden på slideren,
 *  og min og max verdier som er satt på slider komponentet. */
export const calculateSliderPositionBasedOnValue = (
  value: number,
  trackerWidth: number,
  sliderWidth: number,
  min: number,
  max: number
): number => {
  const size: number = max - min;
  const pixelPerSize: number = (trackerWidth - sliderWidth) / size;
  return pixelPerSize * value;
};

/** Kalkulerer verdi basert på sliderPosition som sendes inn,
 *  trackerWidth - bredden til trackeren, sliderWidth - bredden på slideren,
 *  og min og max verdier som er satt på slider komponentet. */
export const calculateValueBasedOnSliderPosition = (
  sliderPosition: number,
  trackerWidth: number,
  sliderWidth: number,
  step: number,
  min: number,
  max: number
): number => {
  const size: number = max - min;
  const pixelPerSize: number = (trackerWidth - sliderWidth) / size;
  const newValue: number = Math.round(sliderPosition / pixelPerSize);
  return alignValue(newValue, step, max);
};

/** Kalkulerer modifisert value basert på step parameteret,
 * med hensyn til max verdi til slideren.
 * Med en step på 10 vil da value gå fra 0 til 10 til 20 osv. */
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

/** Kalkulerer ny x posisjon til slider basert på innsendt differanse diff,
 *  nåværende sliderXPos, bredden til tracker - TrackerWidth og bredden til
 *  slider - sliderWidth. */
export const calculateChangeOfPosition = (diff: number, trackerWidth: number, sliderWidth: number, sliderXPos: number): number => {
  let newSliderPos: number = sliderXPos + diff;
  if (newSliderPos < 0) {
    newSliderPos = 0;
  }
  if (newSliderPos > trackerWidth - sliderWidth) {
    newSliderPos = trackerWidth - sliderWidth;
  }
  return newSliderPos;
};

/** Kalkulerer posisjon til slider basert på xPos, nåværende sliderELement og
 *  bredden til slider - sliderWidth */
export const calculateSliderTranslate = (
  xPos: number,
  sliderElement: HTMLDivElement | null,
  sliderWidth: number,
  cb: (a: number) => void
) => {
  const elementViewportPosition = sliderElement ? sliderElement.getBoundingClientRect() : undefined;
  const sliderPageXPos = elementViewportPosition ? elementViewportPosition.left : 0;
  const diff: number = sliderPageXPos ? xPos - (sliderPageXPos + sliderWidth / 2) : 0;
  cb(diff);
};

/** Legger til mousemove og mouseup event listeners,
 *  basert på moveMouseEvent og mouseUpEvent eventene */
export const addMouseListeners = (moveMouseEvent: (evt: MouseEvent) => void, mouseUpEvent: (evt: MouseEvent) => void): void => {
  document.addEventListener('mousemove', moveMouseEvent, false);
  document.addEventListener('mouseup', mouseUpEvent, false);
};

/** Fjerner mousemove og mouseup event listeners,
 *  basert på moveMouseEvent og mouseUpEvent eventene */
export const removeMouseListeners = (moveMouseEvent: (evt: MouseEvent) => void, mouseUpEvent: (evt: MouseEvent) => void): void => {
  document.removeEventListener('mousemove', moveMouseEvent, false);
  document.removeEventListener('mouseup', mouseUpEvent, false);
};

/** Legger til touchmove og touchend event listeners,
 *  basert på moveTouchEvent og touchUpEvent eventene */
export const addTouchListeners = (moveTouchEvent: (evt: TouchEvent) => void, touchUpEvent: (evt: TouchEvent) => void): void => {
  document.addEventListener('touchmove', moveTouchEvent, false);
  document.addEventListener('touchend', touchUpEvent, false);
};

/** Fjerner touchmove og touchup event listeners,
 *  basert på moveTouchEvent og touchUpEvent eventene */
export const removeTouchListeners = (moveTouchEvent: (evt: TouchEvent) => void, touchUpEvent: (evt: TouchEvent) => void): void => {
  document.removeEventListener('touchmove', moveTouchEvent, false);
  document.removeEventListener('touchend', touchUpEvent, false);
};
