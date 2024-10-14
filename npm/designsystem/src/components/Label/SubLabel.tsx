import React from 'react';

import cn from 'classnames';

import { LabelText } from './Label';
import { AnalyticsId, FormOnColor } from '../../constants';
import Spacer from '../Spacer';

import styles from './styles.module.scss';

export interface SublabelProps {
  /** Adds custom classes to the element. */
  className?: string;
  /** id that is placed on the wrapper */
  id: string;
  /** Array of sublabel strings. Can be of type semibold or normal */
  onColor?: FormOnColor;
  /** Array of sublabel strings. Can be of type semibold or normal */
  sublabelTexts?: LabelText[];
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const Sublabel: React.FC<SublabelProps> = ({ className, id, onColor, sublabelTexts, testId }) => {
  const mapSublabels = (hideFromScreenReader?: boolean): React.ReactNode => {
    return (
      sublabelTexts &&
      sublabelTexts.map((sublabelText, index) => {
        const labelClasses = cn(styles.label, styles['label--sublabel'], {
          [styles['label--semibold']]: sublabelText.type === 'semibold',
          [styles['label--on-dark']]: onColor === FormOnColor.ondark,
        });
        return (
          hideFromScreenReader === sublabelText.hideFromScreenReader && (
            <span className={labelClasses} key={index}>
              {sublabelText.text}
            </span>
          )
        );
      })
    );
  };

  const subLabels = mapSublabels();
  const ariaHiddenSublabels = mapSublabels(true);

  return (
    <>
      <Spacer size={'3xs'} />
      {subLabels && (
        <div className={className} id={id} data-testid={testId} data-analyticsid={AnalyticsId.Sublabel}>
          {subLabels}
        </div>
      )}
      {ariaHiddenSublabels && (
        <div className={className} data-testid={testId}>
          {ariaHiddenSublabels}
        </div>
      )}
    </>
  );
};
