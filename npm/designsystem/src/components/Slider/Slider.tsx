import React, { useEffect, useState, useRef, useId } from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { useIdWithFallback } from '../../hooks/useIdWithFallback';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { useSize } from '../../hooks/useSize';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { isMutableRefObject, mergeRefs } from '../../utils/refs';
import ErrorWrapper, { ErrorWrapperClassNameProps } from '../ErrorWrapper';
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
    setSafeValue(initial);
  }, [min, max]);

  return [value, setSafeValue];
};

export type SliderStep = {
  label?: number | string;
  emojiUniCode?: string;
};

export interface SliderProps
  extends ErrorWrapperClassNameProps,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'onChange' | 'onBlur'> {
  /** Activates Error style for the input */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Error text id */
  errorTextId?: string;
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
  /** If set to false will only trigger onChange once a user interaction has been made, updates to this prop will be taken into account - true by default */
  selected?: boolean;
  /** Sets the steps data for the slider */
  steps?: SliderStep[];
  /** Sets the step to move per point in the slider */
  step?: number;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets the value of the slider */
  value?: number;
}

export const Slider = React.forwardRef((props: SliderProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    title,
    ariaLabel,
    error,
    errorText,
    errorTextId: errorTextIdProp,
    errorWrapperClassName,
    labelLeft,
    labelRight,
    disabled = false,
    onChange,
    steps,
    step = 1,
    minValue = 0,
    maxValue = steps ? steps.length - 1 : 100,
    selected = true,
    testId,
    value,
    ...rest
  } = props;

  const [isMoving, setIsMoving] = useState(false);
  const [selectedState, setSelectedState] = useState(typeof value === 'undefined' ? selected : true);
  const [valueState, setValueState] = useSafeNumberValue(
    typeof value === 'undefined' ? (maxValue - minValue) / 2 + minValue : value,
    minValue,
    maxValue
  );

  const errorTextId = useIdWithFallback(errorTextIdProp);
  const baseId = useId();
  const titleId = 'title-' + baseId;
  const labelLeftId = 'label-' + baseId;
  const labelRightId = 'label-right-' + baseId;
  const trackRef = useRef<HTMLDivElement>(null);
  const { refObject, isFocused } = usePseudoClasses<HTMLInputElement>(isMutableRefObject(ref) ? ref : null);
  const mergedRefs = mergeRefs([ref, refObject]);

  const { width: trackWidth } = useSize(trackRef) || { width: 0 };
  const largeStep = maxValue / 10;
  const invalid = !!errorText || !!error;

  useEffect(() => {
    const handlePointerUp = (): void => {
      setIsMoving(false);
    };

    document.addEventListener('pointerup', handlePointerUp);

    return (): void => {
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
        setValueState(newValue);
      }
    };

    document.addEventListener('pointermove', handlePointerMove);

    return (): void => {
      document.removeEventListener('pointermove', handlePointerMove);
    };
  }, [isMoving]);

  useEffect(() => {
    if (value !== valueState && typeof value !== 'undefined') {
      handleSelected();
      setValueState(value);
    }
  }, [value]);

  useEffect(() => {
    if (typeof value === 'undefined' && selected !== selectedState) {
      setSelectedState(selected);
    }
  }, [selected]);

  const handleSelected = (): void => {
    if (selectedState === false) {
      setSelectedState(true);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = e => {
    if (disabled) return;

    let flag = false;

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        setValueState(valueState - step);
        flag = true;
        break;
      case 'PageDown':
        setValueState(valueState - largeStep);
        flag = true;
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        setValueState(valueState + step);
        flag = true;
        break;
      case 'PageUp':
        setValueState(valueState + largeStep);
        flag = true;
        break;
      case 'Home':
        setValueState(minValue);
        flag = true;
        break;
      case 'End':
        setValueState(maxValue);
        flag = true;
        break;
      default:
        break;
    }

    if (flag) {
      handleSelected();
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleTrackClick: React.MouseEventHandler<HTMLDivElement> = e => {
    if (disabled) return;

    const newValue = getValueBasedOnMarkerPosition(e.clientX);
    setValueState(newValue);
    refObject.current?.focus();
  };

  const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = e => {
    if (disabled) return;

    handleTrackClick(e);
    setIsMoving(true);
    handleSelected();

    e.preventDefault();
    e.stopPropagation();

    refObject.current?.focus();
  };

  const markerXPos = maxValue !== minValue ? (trackWidth / (maxValue - minValue)) * (valueState - minValue) : 0;

  const getAriaValueText = (): string | undefined => {
    const stepIndex = steps ? Math.round((valueState - minValue) / step) : null;

    if (steps && stepIndex !== null && stepIndex >= 0 && stepIndex < steps.length) {
      const step = steps[stepIndex];
      const emojiCode = step.emojiUniCode;
      const label = typeof step.label !== 'undefined' ? step.label.toString() : undefined;

      return emojiCode && label ? `${emojiCode} ${label}` : emojiCode || label;
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

  const getXPositionStyling = (index: number, stepsLength: number): { left: string } => {
    return { left: `${(index / (stepsLength - 1)) * 100}%` };
  };

  useEffect(() => {
    if (selectedState && onChange) {
      onChange({
        target: {
          name: props.name,
          value: valueState,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  }, [valueState, selectedState]);

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
                style={getXPositionStyling(index, steps.length)}
              >
                {step.emojiUniCode}
              </div>
            )
          );
        })}
      </div>
    );
  };

  const renderSteps = (): React.ReactNode => {
    return steps?.map((_step, index) => {
      return <div key={'step' + index} className={styles['slider__track__step']} style={getXPositionStyling(index, steps.length)} />;
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
                style={getXPositionStyling(index, steps.length)}
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
    <ErrorWrapper className={errorWrapperClassName} errorText={errorText} errorTextId={errorTextId}>
      <input
        aria-valuetext={getAriaValueText()}
        className={styles['sr-only-slider']}
        disabled={disabled}
        min={minValue}
        max={maxValue}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        value={valueState}
        ref={mergedRefs}
        type="range"
        {...rest}
        {...ariaLabelAttributes}
      />
      <div className={styles.slider} data-testid={testId} data-analyticsid={AnalyticsId.Slider}>
        {title && (
          <Title className={styles['slider__title']} htmlMarkup={'h3'} margin={0} appearance={'title3'} id={titleId}>
            {title}
          </Title>
        )}
        <div className={styles['slider__content-container']}>
          {renderEmojies()}
          {/* Slider streken er klikkbar med mus/touch */}
          <div
            ref={trackRef}
            className={classNames(styles['slider__track-wrapper'], disabled && styles['slider__track-wrapper--disabled'])}
            onPointerDown={handlePointerDown}
          >
            <div className={classNames(styles.slider__track, disabled && styles['slider__track--disabled'])}>{renderSteps()}</div>
            <div
              className={classNames(styles.slider__marker, {
                [styles['slider__marker--disabled']]: disabled,
                [styles['slider__marker--selected']]: selectedState,
                [styles['slider__marker--invalid']]: invalid,
                [styles['slider__marker--focused']]: !disabled && isFocused,
              })}
              style={{
                left: `${markerXPos}px`,
              }}
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
    </ErrorWrapper>
  );
});

Slider.displayName = 'Slider';

export default Slider;
