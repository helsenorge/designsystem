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
  calculateChangeOfPosition,
  calculateSliderTranslate,
  addMouseListeners,
  removeMouseListeners,
  addTouchListeners,
  removeTouchListeners,
} from './SliderUtils';

import SliderStyles from './styles.module.scss';

interface SliderProps {
  /** Tekst som vises til over feltet */
  title?: string;
  /** Tekst som vises til venstre i feltet */
  labelLeft?: string;
  /** Tekst som vises til høyre i feltet */
  labelRight?: string;
  /** Step value som brukes når verdien endres på slider'en */
  step?: number;
  /** Om feltet er disabled */
  disabled?: boolean;
  /** Function som kalles når verdien i feltet endres */
  onChange?: (value: number) => void;
}

export const Slider = React.forwardRef(function SliderForwardedRef(props: SliderProps, ref: React.ForwardedRef<HTMLElement>) {
  const { title, labelLeft, labelRight, disabled = false, step = 1, onChange } = props;
  const [value, setValue] = useState(50);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [trackerWidth, setTrackerWidth] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderXPos, setSliderXPos] = useState(0);
  const [sliderTemporaryXPos, setSliderTemporaryXPos] = useState(0);
  const trackerRef = ref ? (ref as React.RefObject<HTMLDivElement>) : useRef<HTMLDivElement>(null);
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

  const onKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    const size: number = max - min;
    const pixelPerSize: number = (trackerWidth - sliderWidth) / size;
    if (evt.key === 'ArrowRight' || evt.key === 'ArrowDown') {
      updateSliderPosition(step * pixelPerSize);
    }
    if (evt.key === 'ArrowLeft' || evt.key === 'ArrowUp') {
      updateSliderPosition(-step * pixelPerSize);
    }
  };

  const onMouseOrTouchDown = (e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): void => {
    if (disabled) return;
    const trackerWidth = getElementWidth(trackerRef.current);
    const sliderWidth = getElementWidth(sliderRef.current);
    const updatedMousePosition: number = getMousePosition(e);
    calculateSliderTranslate(updatedMousePosition, sliderRef.current, sliderWidth, updateSliderPosition);
    setIsMouseDown(true);
    setSliderTemporaryXPos(updatedMousePosition);
    setTrackerWidth(trackerWidth);
    setSliderWidth(sliderWidth);
    stopEvent(e);
  };

  const onMouseUp = (e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): void => {
    if (disabled) return;
    setIsMouseDown(false);
    removeMouseListeners(moveMouseEvent, mouseUpEvent);
    removeTouchListeners(moveTouchEvent, touchUpEvent);
    stopEvent(e);
  };

  const onMouseMove = (e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): void => {
    if (disabled || !isMouseDown) return;
    const updatedMousePosition: number = getMousePosition(e);
    const diff: number = updatedMousePosition - sliderTemporaryXPos;
    updateSliderPosition(diff);
    stopEvent(e);
  };

  const updateSliderPosition = (diff: number): void => {
    if (diff === 0) return;
    const updatedSliderPos: number = calculateChangeOfPosition(diff, sliderXPos, trackerWidth, sliderWidth);
    setSliderXPos(updatedSliderPos);
    setSliderTemporaryXPos(updatedSliderPos + diff);
    setValue(calculateValueBasedOnSliderPosition(updatedSliderPos, max, min, trackerWidth, sliderWidth, step));
  };

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
        onMouseDown={onMouseOrTouchDown}
        onTouchStart={onMouseOrTouchDown}
        data-testid={'tracker'}
      >
        <div className={classNames(SliderStyles.slider__track, disabled ? SliderStyles['slider__track--disabled'] : '')} />
        <div
          ref={sliderRef}
          className={classNames(SliderStyles.slider__trigger, disabled ? SliderStyles['slider__trigger--disabled'] : '')}
          style={{
            left: `${sliderXPos}px`,
          }}
          onKeyDown={onKeyDown}
          role={'slider'}
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-label={`${title ? title + ' ' : ''}${labelLeft ? labelLeft + ' ' : ''}${labelRight ? labelRight + ' ' : ''}`}
          tabIndex={disabled ? -1 : 0}
        >
          <div
            className={classNames(SliderStyles['slider__trigger-inner'], disabled ? SliderStyles['slider__trigger-inner--disabled'] : '')}
          />
        </div>
      </div>
      {(labelLeft || labelRight) && (
        <span className={SliderStyles.slider__options}>
          <p className={SliderStyles.slider__text} aria-hidden={true}>
            {labelLeft}
          </p>
          <p className={SliderStyles.slider__text} aria-hidden={true}>
            {labelRight}
          </p>
        </span>
      )}
    </div>
  );
});

export default Slider;
