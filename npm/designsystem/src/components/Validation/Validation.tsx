import React from 'react';

import classNames from 'classnames';

import { AnalyticsId, FormSize } from '../../constants';
import FormGroup, { FormGroupProps } from '../FormGroup/FormGroup';

import validationStyles from './styles.module.scss';

interface ValidationProps {
  /** Summary of form errors. Every change will be announced by screen readers. */
  errorSummary?: React.ReactNode;
  /** Items in the Validation compontent */
  children?: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the visuals of the formgroup */
  size?: keyof typeof FormSize;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const Validation = React.forwardRef((props: ValidationProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const validationClasses = classNames(validationStyles['validation'], props.className);

  return (
    <>
      <div data-testid={props.testId} data-analyticsid={AnalyticsId.Validation} className={validationClasses} ref={ref}>
        {React.Children.map(props.children, (child: React.ReactNode) => {
          if ((child as React.ReactElement<FormGroupProps>).type === FormGroup) {
            return React.cloneElement(child as React.ReactElement<FormGroupProps>, {
              className: props.errorSummary ? validationStyles['form-group-wrapper--error-sibling'] : '',
            });
          }
          return child;
        })}
      </div>
      <div
        role="alert"
        className={classNames(validationStyles.validation__summary, props.errorSummary && validationStyles['validation__summary--visible'])}
      >
        {props.errorSummary}
      </div>
    </>
  );
});

Validation.displayName = 'Validation';

export default Validation;
