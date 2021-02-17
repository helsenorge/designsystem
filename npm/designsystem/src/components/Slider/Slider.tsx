import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';

import Title from '../Title';

import {
  stopEvent,
  getMousePosition,
  getElementWidth,
  notifyMove,
  calculateSliderPositionBasedOnValue,
  calculateValueBasedOnSliderPosition,
  addMouseListeners,
  removeMouseListeners,
  addTouchListeners,
  removeTouchListeners,
} from './SliderUtils';

import SliderStyles from './styles.module.scss';

interface SliderProps {
  /** Tekst som vises til over feltet */
  title?: string;
  /** Tekst som vises til venstre i feltet TO-DO renames til labelLeft */
  optionLeft?: string;
  /** Tekst som vises til høyre i feltet TO-DO renames til labelRight */
  optionRight?: string;
  /** Step value som brukes når verdien endres på slider'en */
  step?: number;
  /** Om feltet er disabled */
  disabled?: boolean;
  /** Function som kalles når verdien i feltet endres */
  onChange?: (value: number) => void;
}

export const Slider = React.forwardRef(function SliderForwardedRef(props: SliderProps, ref: React.ForwardedRef<HTMLElement>) {
  const { title, optionLeft, optionRight, disabled = false, step = 1, onChange } = props;
  const [value, setValue] = useState(50);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [trackerWidth, setTrackerWidth] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderXPos, setSliderXPos] = useState(0);
  const [sliderTemporaryXPos, setSliderTemporaryXPos] = useState(0);
  const trackerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const min = 0;
  const max = 100;
  const moveMouseEvent = (evt: MouseEvent) => {
    onMouseMove(evt);
  };
  const mouseUpEvent = (evt: MouseEvent) => {
    onMouseUp(evt);
  };
  const moveTouchEvent = (evt: TouchEvent) => {
    onMouseMove(evt);
  };
  const touchUpEvent = (evt: TouchEvent) => {
    onMouseUp(evt);
  };

  useEffect(() => {
    console.log('>>> UseEffect');
    /** to calculate the initial position of the slider we have to get
     * the width of html container element this can only be done after
     * render, and to save the value we have to put in state and trigger rerender
     */
    console.log('trackerRef.current ', trackerRef.current ? trackerRef.current.getBoundingClientRect() : 'NULL');
    console.log('sliderRef.current ', sliderRef.current ? sliderRef.current.getBoundingClientRect() : 'NULL');
    // const trackerPosition = trackerRef.current ? trackerRef.current.getBoundingClientRect() : undefined;
    // const trackerWidth: number = trackerPosition ? trackerPosition.right - trackerPosition.left : 0;
    // const sliderPosition = sliderRef.current ? sliderRef.current.getBoundingClientRect() : undefined;
    //const sliderWidth: number = sliderPosition ? sliderPosition.right - sliderPosition.left : 0;
    const trackerWidth = getElementWidth(trackerRef.current);
    const sliderWidth = getElementWidth(sliderRef.current);
    setSliderXPos(calculateSliderPositionBasedOnValue(value, trackerWidth, sliderWidth, max, min));
    setTrackerWidth(trackerWidth);
    setSliderWidth(sliderWidth);
  }, []);

  useEffect(() => {
    if (isMouseDown) {
      addMouseListeners(moveMouseEvent, mouseUpEvent);
      addTouchListeners(moveTouchEvent, touchUpEvent);
    }
  }, [isMouseDown]);

  useEffect(() => {
    if (!disabled) {
      notifyMove(value, onChange);
    }
  }, [value]);

  const handleKeyPress = (evt: any) => {
    if (disabled) {
      return;
    }

    const size: number = max - min;
    const pixelPerSize: number = (trackerWidth - sliderWidth) / size;

    if (evt.key === 'ArrowRight' || evt.key === 'ArrowDown') {
      moveSlider(step * pixelPerSize);
    }
    if (evt.key === 'ArrowLeft' || evt.key === 'ArrowUp') {
      moveSlider(-step * pixelPerSize);
    }
  };

  const onMouseDown = (e: MouseEvent | React.MouseEvent<{}>): void => {
    if (disabled) {
      return;
    }
    //const newTrackerWidth: number = trackerRef.current ? trackerRef.current.offsetWidth : 0;
    //const newSliderWidth: number = sliderRef.current ? sliderRef.current.offsetWidth : 0;
    const trackerWidth = getElementWidth(trackerRef.current);
    const sliderWidth = getElementWidth(sliderRef.current);
    const updatedMousePosition: number = getMousePosition(e);
    calculateSliderTranslate(updatedMousePosition, sliderWidth);
    setIsMouseDown(true);
    setSliderTemporaryXPos(updatedMousePosition);
    setTrackerWidth(trackerWidth);
    setSliderWidth(sliderWidth);
    stopEvent(e);
  };

  const onTouchDown = (e: TouchEvent | React.TouchEvent<{}>): void => {
    if (disabled) {
      return;
    }
    //const newTrackerWidth: number = trackerRef.current ? trackerRef.current.offsetWidth : 0;
    //const newSliderWidth: number = sliderRef.current ? sliderRef.current.offsetWidth : 0;
    const trackerWidth = getElementWidth(trackerRef.current);
    const sliderWidth = getElementWidth(sliderRef.current);
    const updatedMousePosition: number = getMousePosition(e);
    calculateSliderTranslate(updatedMousePosition, sliderWidth);

    setIsMouseDown(true);
    setSliderTemporaryXPos(updatedMousePosition);
    setTrackerWidth(trackerWidth);
    setSliderWidth(sliderWidth);
    stopEvent(e);
  };

  const onMouseUp = (e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): void => {
    if (disabled) {
      return;
    }

    setIsMouseDown(false);
    removeMouseListeners(moveMouseEvent, mouseUpEvent);
    removeTouchListeners(moveTouchEvent, touchUpEvent);
    stopEvent(e);
  };

  const onMouseMove = (e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): void => {
    if (disabled || !isMouseDown) {
      return;
    }

    const updatedMousePosition: number = getMousePosition(e);
    const diff: number = updatedMousePosition - sliderTemporaryXPos;

    moveSlider(diff);
    stopEvent(e);
  };

  // TO-DO Flytt business logikk til utils og behold bare state håndteringen.
  // Oppdateres til "updateSlidePosition"
  const moveSlider = (diff: number): void => {
    if (diff === 0) {
      return;
    }
    let newSliderPos: number = sliderXPos + diff;
    if (newSliderPos < 0) {
      newSliderPos = 0;
    }
    if (newSliderPos > trackerWidth - sliderWidth) {
      newSliderPos = trackerWidth - sliderWidth;
    }

    setSliderXPos(newSliderPos);
    setSliderTemporaryXPos(newSliderPos + diff);
    setValue(calculateValueBasedOnSliderPosition(newSliderPos, max, min, trackerWidth, sliderWidth, step));
  };

  // TO-DO: flyttes til utils
  function calculateSliderTranslate(XPos: number, newSliderWidth: number) {
    const sliderPageXPos = sliderRef.current?.getBoundingClientRect().left;
    const diff: number = sliderPageXPos ? XPos - (sliderPageXPos + newSliderWidth / 2) : 0;
    moveSlider(diff);
  }

  return (
    <div className={SliderStyles.slider}>
      {title && (
        <Title htmlMarkup={'h3'} margin={1.5} appearance={'title3'}>
          {title}
        </Title>
      )}
      <div
        ref={trackerRef}
        className={classNames(SliderStyles['slider__track-wrapper'], disabled ? SliderStyles['slider__track-wrapper--disabled'] : '')}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchDown}
        data-testid={'tracker'}
      >
        <div className={classNames(SliderStyles.slider__track, disabled ? SliderStyles['slider__track--disabled'] : '')} />
        <div
          ref={sliderRef}
          className={classNames(SliderStyles.slider__trigger, disabled ? SliderStyles['slider__trigger--disabled'] : '')}
          style={{
            left: `${sliderXPos}px`,
          }}
          onKeyDown={handleKeyPress}
          role={'slider'}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-label={`${title ? title + ' ' : ''}${optionLeft ? optionLeft + ' ' : ''}${optionRight ? optionRight + ' ' : ''}`}
          tabIndex={disabled ? -1 : 0}
        >
          <div
            className={classNames(SliderStyles['slider__trigger-inner'], disabled ? SliderStyles['slider__trigger-inner--disabled'] : '')}
          />
        </div>
      </div>
      {(optionLeft || optionRight) && (
        <span className={SliderStyles.slider__options}>
          <p className={SliderStyles.slider__text} aria-hidden={true}>
            {optionLeft}
          </p>
          <p className={SliderStyles.slider__text} aria-hidden={true}>
            {optionRight}
          </p>
        </span>
      )}
    </div>
  );
});

export default Slider;
