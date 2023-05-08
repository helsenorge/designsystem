import React, { FunctionComponent } from 'react';

import cn from 'classnames';

import { Sublabel, SublabelProps } from './SubLabel';
import { AnalyticsId, FormMode } from '../../constants';
import { isComponent } from '../../utils/component';
import Spacer from '../Spacer';
import StatusDot, { StatusDotProps } from '../StatusDot';

import styles from './styles.module.scss';

export type LabelText = {
  hideFromScreenReader?: boolean;
  text: string;
  type: 'semibold' | 'normal';
};

export interface LabelProps {
  /** Adds custom classes to the element. */
  className?: string;
  /** Id that is put on the "for" attribute of the label */
  htmlFor?: string;
  /** Array of main label strings. Can be of type semibold or normal */
  labelTexts: LabelText[];
  /** Array of sublabel strings. Can be of type semibold or normal */
  mode?: FormMode;
  /** StatusDot placed underneath the last sublabel */
  statusDot?: React.ReactNode;
  /** Sublabel component */
  sublabel?: React.ReactNode;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Label: FunctionComponent<LabelProps> = ({ className, htmlFor, labelTexts, mode, statusDot, sublabel, testId }) => {
  const labelWrapperClasses = cn(styles['label-wrapper'], className);

  const mapLabels = (): React.ReactNode => {
    return labelTexts.map((labelText, index) => {
      const labelClasses = cn(styles.label, {
        [styles['label--semibold']]: labelText.type === 'semibold',
        [styles['label--on-dark']]: mode === FormMode.ondark,
      });
      return (
        <span aria-hidden={labelText.hideFromScreenReader} className={labelClasses} key={index}>
          {labelText.text}
        </span>
      );
    });
  };

  return (
    <div className={labelWrapperClasses}>
      <label htmlFor={htmlFor} data-testid={testId} data-analyticsid={AnalyticsId.Label}>
        {mapLabels()}
      </label>
      {sublabel &&
        isComponent<SublabelProps>(sublabel, Sublabel) &&
        React.cloneElement(sublabel, {
          mode,
        })}
      {statusDot && isComponent<StatusDotProps>(statusDot, StatusDot) && (
        <>
          <Spacer size={'3xs'} />
          {React.cloneElement(statusDot, {
            mode: mode === FormMode.ondark ? 'ondark' : 'onwhite',
          })}
        </>
      )}
    </div>
  );
};

export default Label;
