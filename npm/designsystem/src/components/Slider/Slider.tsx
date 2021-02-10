import React, { useEffect, useState, useRef, useMemo } from 'react';

import styles from './styles.module.scss';

interface SliderProps {
  /** Tekst som vises til venstre i feltet */
  optionLeft: string;
  /** Tekst som vises til høyre i feltet */
  optionRight: string;
  /** Step value som brukes når verdien endres på slider'en */
  step?: number;
  /** Om feltet er disabled */
  disabled?: boolean;
  /** Om verdien skal vises ved slideren */
  showValue?: boolean;
  /** Function som kalles når verdien i feltet endres */
  onChange?: (value: number) => void;
  /** Function som kalles når fokus går bort fra feltet */
  onBlur?: (value: number) => void;
}

interface Style {
  left: string;
}

const Slider = React.forwardRef(function SliderForwardedRef(props: SliderProps, ref: React.ForwardedRef<HTMLElement>) {
  const { optionLeft, optionRight, disabled = false, step = 0, onChange, onBlur } = props;
  const [value, setValue] = useState(50);
  const [mouseDown, setMouseDown] = useState(false);
  const [tempXPos, setTempXPos] = useState(0);
  const [width, setWidth] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderXPos, setSliderXPos] = useState(0);
  const trackerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLButtonElement>(null);
  const isFirstRun = useRef(true);
  const min = 0;
  const max = 100;

  useEffect(() => {
    /** to calculate the initial position of the slider we have to get
     * the width of html container element this can only be done after
     * render, and to save the value we have to put in state and trigger rerender
     */
    window.setTimeout(() => {
      /* setTimeout of 0 gives element enough time to have assumed its size */
      const trackWidth: number = trackerRef.current ? trackerRef.current.offsetWidth : 0;
      const sliderWidth: number = sliderRef.current ? sliderRef.current.offsetWidth : 0;
      setSliderXPos(calculateSliderPositionBasedOnValue(value, trackWidth, sliderWidth));
    }, 0);
  }, []);

  useEffect(() => {
    console.log('value-------' + value);
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const trackWidth: number = trackerRef.current ? trackerRef.current.offsetWidth : 0;
    const sliderWidth: number = sliderRef.current ? sliderRef.current.offsetWidth : 0;
    let newSliderXPos = calculateSliderPositionBasedOnValue(value, trackWidth, sliderWidth);

    setValue(value);
    setSliderXPos(newSliderXPos);
  }, [value]);

  function onMouseDown(e: MouseEvent | React.MouseEvent<{}>): void {
    if (disabled) {
      return;
    }
    const width: number = trackerRef.current ? trackerRef.current.offsetWidth : 0;
    const sliderWidth: number = sliderRef.current ? sliderRef.current.offsetWidth : 0;

    setMouseDown(true);
    setTempXPos(getMousePosition(e));
    setWidth(width);
    setSliderWidth(sliderWidth);
    addMouseListeners();
    stopEvent(e);
  }

  function onTouchDown(e: TouchEvent | React.TouchEvent<{}>): void {
    if (disabled) {
      return;
    }
    const width: number = trackerRef.current ? trackerRef.current.offsetWidth : 0;
    const sliderWidth: number = sliderRef.current ? sliderRef.current.offsetWidth : 0;

    setMouseDown(true);
    setTempXPos(getMousePosition(e));
    setWidth(width);
    setSliderWidth(sliderWidth);
    addTouchListeners();
    stopEvent(e);
  }

  function onMouseUp(e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): void {
    if (disabled) {
      return;
    }

    setMouseDown(false);
    removeMouseListeners();
    removeTouchListeners();
    notifyBlur();
    stopEvent(e);
  }

  function onMouseMove(e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): void {
    if (disabled || !mouseDown) {
      return;
    }

    console.log('test2');

    const newXpos: number = getMousePosition(e);
    const diff: number = newXpos - tempXPos;
    moveSlider(diff);
    stopEvent(e);
  }

  function getMousePosition(e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): number {
    if (isTouchEvent(e)) {
      const touch: Touch = (e as TouchEvent).touches[0];
      return touch.pageX;
    }
    return (e as MouseEvent).pageX;
  }

  function moveSlider(diff: number): void {
    let newSliderPos: number = sliderXPos + diff;
    if (newSliderPos < 0) {
      newSliderPos = 0;
    }
    if (newSliderPos > width - sliderWidth) {
      newSliderPos = width - sliderWidth;
    }

    setSliderXPos(newSliderPos);
    setTempXPos(newSliderPos + diff);
    setValue(calculateValueBasedOnSliderPosition(newSliderPos));
    notifyMove();
  }

  function isTouchEvent(e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): boolean {
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
  }

  function notifyMove(): void {
    if (onChange) {
      onChange(value);
    }
  }

  function notifyBlur(): void {
    if (onBlur) {
      onBlur(value);
    }
  }

  function calculateSliderPositionBasedOnValue(value: number, trackWidth: number, sliderWidth: number): number {
    const size: number = max - min;
    const pixelPerSize: number = (trackWidth - sliderWidth) / size;
    return pixelPerSize * value;
  }

  function alignValue(value: number): number {
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
  }

  function calculateValueBasedOnSliderPosition(sliderPosition: number): number {
    const size: number = max - min;
    const pixelPerSize: number = (width - sliderWidth) / size;
    const newValue: number = Math.round(sliderPosition / pixelPerSize);
    return alignValue(newValue);
  }

  function addMouseListeners(): void {
    document.addEventListener(
      'mousemove',
      (evt: MouseEvent) => {
        onMouseMove(evt);
      },
      false
    );
    document.addEventListener(
      'mouseup',
      (evt: MouseEvent) => {
        onMouseUp(evt);
      },
      false
    );
  }

  function removeMouseListeners(): void {
    document.removeEventListener(
      'mousemove',
      (evt: MouseEvent) => {
        onMouseMove(evt);
      },
      false
    );
    document.removeEventListener(
      'mouseup',
      (evt: MouseEvent) => {
        onMouseUp(evt);
      },
      false
    );
  }

  function addTouchListeners(): void {
    document.addEventListener(
      'touchmove',
      (evt: TouchEvent) => {
        onMouseMove(evt);
      },
      false
    );
    document.addEventListener(
      'touchend',
      (evt: TouchEvent) => {
        onMouseUp(evt);
      },
      false
    );
  }

  function removeTouchListeners(): void {
    document.removeEventListener(
      'touchmove',
      (evt: TouchEvent) => {
        onMouseMove(evt);
      },
      false
    );
    document.removeEventListener(
      'touchend',
      (evt: TouchEvent) => {
        onMouseUp(evt);
      },
      false
    );
  }

  function stopEvent(e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): boolean {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
  }

  const sliderStyle: Style = {
    left: `${sliderXPos}px`,
  };

  return (
    <div className={styles.slider}>
      <div ref={trackerRef} className={styles.slider__track} />
      <button
        ref={sliderRef}
        style={sliderStyle}
        type="button"
        className={styles.slider__trigger}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchDown}
      />
      <span className={styles.slider__options}>
        <p>{optionLeft}</p>
        <p>{optionRight}</p>
      </span>
    </div>
  );
});

export default Slider;
