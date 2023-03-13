import React, { useEffect, useState, useRef } from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { useSize } from '../../hooks/useSize';
import { useUuid } from '../../hooks/useUuid';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import Title from '../Title';

import styles from './styles.module.scss';

const useSafeNumberValue = (initial: number, min: number, max: number): [number, (value: number) => void] => {
  const [value, setValue] = useState(initial);

  const setSafeValue = (newValue: number): void => {
    if (newValue > max) {
      setValue(max);
    } else if (newValue < min) {
      setValue(min);
    } else {
      setValue(newValue);
    }
  };

  return [value, setSafeValue];
};

interface SliderProps {
  /**	Sets the title of the slider. */
  title?: string;
  /** Adds the left hand label to the element. */
  labelLeft?: string;
  /** Adds the right hand label to the element. */
  labelRight?: string;
  /**	Sets aria-label of the slider. */
  ariaLabel?: string;
  /** Disables the slider element. */
  disabled?: boolean;
  /** Function to be called when the value state has changed. */
  onChange?: (value: number) => void;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const MAX_VALUE = 100;
const MIN_VALUE = 0;
const STEP = 1;
const LARGE_STEP = 10;

export const Slider: React.FC<SliderProps> = ({ title, ariaLabel, labelLeft, labelRight, disabled = false, onChange, testId }) => {
  const [isMoving, setIsMoving] = useState(false);
  const [value, setValue] = useSafeNumberValue((MAX_VALUE - MIN_VALUE) / 2, MIN_VALUE, MAX_VALUE);
  const titleId = useUuid();
  const labelLeftId = useUuid();
  const labelRightId = useUuid();
  const trackRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const { width: trackWidth } = useSize(trackRef) || { width: 0 };
  const { width: markerWidth } = useSize(markerRef) || { width: 0 };

  useEffect(() => {
    const handlePointerUp = (): void => {
      setIsMoving(false);
    };

    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  const getValueBasedOnMarkerPosition = (markerPosition: number): number => {
    const trackPosition = trackRef.current?.getBoundingClientRect().x ?? 0;

    return Math.round(((markerPosition - trackPosition) / trackWidth) * (MAX_VALUE - MIN_VALUE));
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent): void => {
      if (!disabled && isMoving) {
        const newValue = getValueBasedOnMarkerPosition(e.clientX);
        setValue(newValue);
      }
    };

    document.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
    };
  }, [isMoving]);

  useEffect(() => {
    if (!disabled && onChange) {
      onChange(value);
    }
  }, [value]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = e => {
    if (disabled) return;

    let flag = false;

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        setValue(value - STEP);
        flag = true;
        break;
      case 'PageDown':
        setValue(value - LARGE_STEP);
        flag = true;
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        setValue(value + STEP);
        flag = true;
        break;
      case 'PageUp':
        setValue(value + LARGE_STEP);
        flag = true;
        break;
      case 'Home':
        setValue(MIN_VALUE);
        flag = true;
        break;
      case 'End':
        setValue(MAX_VALUE);
        flag = true;
        break;
      default:
        break;
    }

    if (flag) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleTrackClick: React.MouseEventHandler<HTMLDivElement> = e => {
    if (disabled) return;

    const newValue = getValueBasedOnMarkerPosition(e.clientX);
    setValue(newValue);
    markerRef.current?.focus();
  };

  const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = e => {
    if (disabled) return;

    setIsMoving(true);

    e.preventDefault();
    e.stopPropagation();

    markerRef.current?.focus();
  };

  const markerXPos = ((trackWidth - markerWidth) / (MAX_VALUE - MIN_VALUE)) * value;

  const getAriaLabeledById = (): string | undefined => {
    if (title && labelLeft && labelRight) {
      return [titleId, labelLeftId, labelRightId].join(' ');
    }
    if (title && labelLeft) {
      return [titleId, labelLeftId].join(' ');
    }
    if (title && labelRight) {
      return [titleId, labelRightId].join(' ');
    }
    if (title) {
      return titleId;
    }
  };

  const ariaLabelAttributes = getAriaLabelAttributes({
    label: ariaLabel,
    id: getAriaLabeledById(),
    prefer: 'label',
  });

  return (
    <div className={styles.slider} data-testid={testId} data-analyticsid={AnalyticsId.Slider}>
      {title && (
        <Title htmlMarkup={'h3'} margin={1.5} appearance={'title3'} id={titleId}>
          {title}
        </Title>
      )}
      <div
        ref={trackRef}
        className={classNames(styles['slider__track-wrapper'], disabled && styles['slider__track-wrapper--disabled'])}
        onClick={handleTrackClick}
        onPointerDown={handlePointerDown}
      >
        <div className={classNames(styles.slider__track, disabled && styles['slider__track--disabled'])} />
        <div
          role={'slider'}
          ref={markerRef}
          className={classNames(styles.slider__marker, disabled && styles['slider__marker--disabled'])}
          style={{
            left: `${markerXPos}px`,
          }}
          onKeyDown={handleKeyDown}
          aria-valuenow={value}
          aria-valuemin={MIN_VALUE}
          aria-valuemax={MAX_VALUE}
          tabIndex={disabled ? undefined : 0}
          aria-disabled={disabled}
          {...ariaLabelAttributes}
        />
      </div>
      {(labelLeft || labelRight) && (
        <span className={styles.slider__options}>
          <span id={labelLeftId}>{labelLeft}</span>
          <span id={labelRightId}>{labelRight}</span>
        </span>
      )}
    </div>
  );
};

export default Slider;
