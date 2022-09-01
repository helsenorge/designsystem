import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';

import Title from '../Title';

import {
  stopEvent,
  getMousePosition,
  getElementWidth,
  calculateSliderPositionBasedOnValue,
  calculateValueBasedOnSliderPosition,
  calculateChangeOfPosition,
  calculateSliderTranslate,
  addMouseListeners,
  addTouchListeners,
  removeMouseListeners,
  removeTouchListeners,
} from './SliderUtils';

import SliderStyles from './styles.module.scss';
import { AnalyticsId } from '../../constants';
import { useSize } from '../../hooks/useSize';

interface SliderProps {
  /**	Sets the title of the slider. */
  title?: string;
  /** Adds the left hand label to the element. */
  labelLeft?: string;
  /** Adds the right hand label to the element. */
  labelRight?: string;
  /**	Decides the number of steps for each movement of the slider. */
  step?: number;
  /** Disables the slider element. */
  disabled?: boolean;
  /** Function to be called when the value state has changed. */
  onChange?: (value: number) => void;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const Slider = React.forwardRef(function SliderForwardedRef(props: SliderProps, ref: React.ForwardedRef<HTMLElement>) {
  const { title, labelLeft, labelRight, disabled = false, step = 1, onChange, testId } = props;
  const [value, setValue] = useState(50);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const [sliderXPos, setSliderXPos] = useState(0);
  const [sliderTemporaryXPos, setSliderTemporaryXPos] = useState(0);
  const trackerRef = ref ? (ref as React.RefObject<HTMLDivElement>) : useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { width: trackerWidth } = useSize(trackerRef) || { width: 0 };
  const { width: sliderWidth } = useSize(sliderRef) || { width: 0 };
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
    setSliderXPos(calculateSliderPositionBasedOnValue(value, trackerWidth, sliderWidth, min, max));
  }, [value, trackerWidth, sliderWidth]);

  useEffect(() => {
    if (isMouseDown) {
      addMouseListeners(moveMouseEvent, mouseUpEvent);
      addTouchListeners(moveTouchEvent, touchUpEvent);
    }
  }, [isMouseDown]);

  useEffect(() => {
    if (!disabled && onChange) {
      onChange(value);
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
    sliderRef.current?.focus();
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
    const updatedSliderPos: number = calculateChangeOfPosition(diff, trackerWidth, sliderWidth, sliderXPos);
    setSliderXPos(updatedSliderPos);
    setSliderTemporaryXPos(updatedSliderPos + diff);
    setValue(calculateValueBasedOnSliderPosition(updatedSliderPos, trackerWidth, sliderWidth, step, min, max));
  };

  return (
    <div className={SliderStyles.slider} data-testid={testId} data-analyticsid={AnalyticsId.Slider}>
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
