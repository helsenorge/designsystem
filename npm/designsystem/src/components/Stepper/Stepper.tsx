import type React from 'react';
import { useRef } from 'react';

import Dot from './Dot';
import DotList from './DotList';
import { getMaximumDots, getDistanceBetweenDots, getMarkerPosition, getAllowedValues, getValidatedProps } from './utils';
import { AnalyticsId } from '../../constants';
import { useSize } from '../../hooks/useSize';
import { getAriaLabelAttributes } from '../../utils/accessibility';

import styles from './styles.module.scss';

export interface StepperProps {
  /**
   * Sets aria-label of the stepper. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabel?: string;
  /**
   * Sets aria-labelledby of the stepper. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabelledById?: string;
  /**
   * Current value. Must be between min and max
   */
  value?: number;
  /**
   * Minimum value
   */
  min?: number;
  /**
   * Maximum value
   */
  max?: number;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Stepper: React.FC<StepperProps> = ({ ariaLabelledById, ariaLabel, value, min = 0, max = 2, testId }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const { width: wrapperWidth = 0 } = useSize(wrapperRef) || {};
  const { width: stepperWidth = 0 } = useSize(ref) || {};

  const { validatedValue, validatedMin, validatedMax } = getValidatedProps(value, min, max);
  const allowedValues = getAllowedValues(validatedMin, validatedMax);
  const index = allowedValues.indexOf(validatedValue);
  const maximumDots = getMaximumDots(wrapperWidth);
  const distanceBetweenDots = getDistanceBetweenDots(stepperWidth, allowedValues.length);
  const markerPosition = getMarkerPosition(distanceBetweenDots, index);

  const showAllDots = allowedValues.length <= maximumDots;
  const isCompleted = validatedValue === validatedMax;

  const ariaLabelAttributes = getAriaLabelAttributes({ label: ariaLabel, id: ariaLabelledById });

  return (
    <div className={styles['stepper-wrapper']} ref={wrapperRef}>
      <span
        role="progressbar"
        {...ariaLabelAttributes}
        aria-valuenow={validatedValue}
        aria-valuemin={validatedMin}
        aria-valuemax={validatedMax}
        className={styles.stepper}
        style={{
          backgroundPositionX: `${isCompleted ? stepperWidth : markerPosition}px`,
        }}
        ref={ref}
        data-testid={testId}
        data-analyticsid={AnalyticsId.Stepper}
      >
        {showAllDots && <DotList allowedValues={allowedValues} currentValue={validatedValue} distanceBetweenDots={distanceBetweenDots} />}
        {!showAllDots && (
          <>
            <Dot completed={validatedValue > validatedMin} position="left" />
            <Dot completed={validatedValue === validatedMax} position="right" />
          </>
        )}
        <span className={styles.stepper__marker} style={{ left: `${markerPosition}px` }} />
      </span>
      {!showAllDots && <span className={styles.stepper__number}>{`${validatedValue}/${validatedMax}`}</span>}
    </div>
  );
};

export default Stepper;
