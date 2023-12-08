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

  useEffect(() => {
    setValue((max - min) / 2 + min);
  }, [min, max]);

  return [value, setSafeValue];
};

export type SliderStep = {
  label?: number | string;
  emojiUniCode?: string;
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
  /** Sets the minimum allowed value on the slider - this overrides the use of steps prop for minValue/maxValue. */
  minValue?: number;
  /** Sets the maximum allowed value on the slider - this overrides the use of steps prop for minValue/maxValue. */
  maxValue?: number;
  /** Function to be called when the value state has changed. */
  onChange?: (value: number) => void;
  /** Sets the steps data for the slider*/
  steps?: SliderStep[];
  /** Sets the step to move per point in the slider */
  step?: number;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const Slider: React.FC<SliderProps> = ({
  title,
  ariaLabel,
  labelLeft,
  labelRight,
  disabled = false,
  onChange,
  steps,
  step = 1,
  minValue = 0,
  maxValue = steps ? steps.length - 1 : 100,
  testId,
}) => {
  const [isMoving, setIsMoving] = useState(false);
  const [value, setValue] = useSafeNumberValue((maxValue - minValue) / 2 + minValue, minValue, maxValue);

  const titleId = useUuid();
  const labelLeftId = useUuid();
  const labelRightId = useUuid();
  const trackRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const { width: trackWidth } = useSize(trackRef) || { width: 0 };
  const largeStep = maxValue / 10;

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

    // Calculate the normalized position (0 to 1) of the marker along the track
    const normalizedPosition = (markerPosition - trackPosition) / trackWidth;
    const valueRange = maxValue - minValue;
    // Calculate the value without considering the step
    let value = normalizedPosition * valueRange + minValue;
    // Adjust the value to account for the step increment
    const stepCount = Math.round(value / step);
    value = stepCount * step;
    value = Math.max(minValue, Math.min(maxValue, value));

    return value;
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
        setValue(value - step);
        flag = true;
        break;
      case 'PageDown':
        setValue(value - largeStep);
        flag = true;
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        setValue(value + step);
        flag = true;
        break;
      case 'PageUp':
        setValue(value + largeStep);
        flag = true;
        break;
      case 'Home':
        setValue(minValue);
        flag = true;
        break;
      case 'End':
        setValue(maxValue);
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

  const markerXPos = maxValue !== minValue ? (trackWidth / (maxValue - minValue)) * (value - minValue) : 0;

  const getAriaValueText = (): string | undefined => {
    const stepIndex = steps ? Math.round((value - minValue) / step) : null;

    if (steps && stepIndex !== null && stepIndex >= 0 && stepIndex < steps.length) {
      const step = steps[stepIndex];
      const emojiCode = step.emojiUniCode;
      const emojiAsText = emojiCode ? safelyReturnEmoji(emojiCode) : undefined;
      const label = typeof step.label !== 'undefined' ? step.label.toString() : undefined;

      return emojiAsText && label ? `${emojiAsText} ${label}` : emojiAsText || label;
    }

    return undefined;
  };

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

  const getXPostionStyling = (index: number, stepsLength: number): { left: string } => {
    return { left: `${(index / (stepsLength - 1)) * 100}%` };
  };

  const safelyReturnEmoji = (code: string): string => {
    try {
      return String.fromCodePoint(parseInt(code, 16));
    } catch (e) {
      return code;
    }
  };

  const renderEmojies = (): React.ReactNode => {
    return (
      <div className={styles['slider__emoji-container']}>
        {steps?.map((step, index) => {
          return (
            step.emojiUniCode && (
              <div
                aria-hidden={true}
                key={'emoji' + index}
                className={styles['slider__emoji']}
                style={getXPostionStyling(index, steps.length)}
              >
                {safelyReturnEmoji(step.emojiUniCode)}
              </div>
            )
          );
        })}
      </div>
    );
  };

  const renderSteps = (): React.ReactNode => {
    return steps?.map((_step, index) => {
      return <div key={'step' + index} className={styles['slider__track__step']} style={getXPostionStyling(index, steps.length)} />;
    });
  };

  const renderStepLabels = (): React.ReactNode => {
    return (
      <div className={styles['slider__value-container']}>
        {steps?.map((step, index) => {
          return (
            typeof step.label !== 'undefined' && (
              <div
                aria-hidden={true}
                key={'label' + index}
                className={styles['slider__value']}
                style={getXPostionStyling(index, steps.length)}
              >
                {step.label}
              </div>
            )
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.slider} data-testid={testId} data-analyticsid={AnalyticsId.Slider}>
      {title && (
        <Title className={styles['slider__title']} htmlMarkup={'h3'} margin={0} appearance={'title3'} id={titleId}>
          {title}
        </Title>
      )}
      <div className={styles['slider__content-container']}>
        {renderEmojies()}
        {/* Komponenten er tilgjengelig for mus/keyboard gjennom bruk av slideren */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
        <div
          ref={trackRef}
          className={classNames(styles['slider__track-wrapper'], disabled && styles['slider__track-wrapper--disabled'])}
          onClick={handleTrackClick}
          onPointerDown={handlePointerDown}
        >
          <div className={classNames(styles.slider__track, disabled && styles['slider__track--disabled'])}>{renderSteps()}</div>
          <div
            role={disabled ? undefined : 'slider'}
            ref={markerRef}
            className={classNames(styles.slider__marker, disabled && styles['slider__marker--disabled'])}
            style={{
              left: `${markerXPos}px`,
            }}
            onKeyDown={handleKeyDown}
            aria-valuenow={value}
            aria-valuetext={getAriaValueText()}
            aria-valuemin={minValue}
            aria-valuemax={maxValue}
            tabIndex={disabled ? undefined : 0}
            aria-disabled={disabled}
            {...ariaLabelAttributes}
          />
        </div>
        {renderStepLabels()}
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
