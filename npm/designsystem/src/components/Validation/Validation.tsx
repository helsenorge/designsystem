import React from 'react';

import classNames from 'classnames';

import { ValidationErrors } from './types';
import ValidationSummary from './ValidationSummary';
import { AnalyticsId, FormSize } from '../../constants';
import { isComponent } from '../../utils/component';
import FormGroup, { FormGroupProps } from '../FormGroup/FormGroup';

import styles from './styles.module.scss';

interface ValidationProps {
  /** Error summary title */
  errorTitle?: string;
  /** Validation errors. If errors include references to HTML elements, the errors will be rendered as links with an onClick handler to focus the element. */
  errors?: ValidationErrors;
  /**
   * Summary of form errors
   * @deprecated Use errorTitle and errors instead
   * */
  errorSummary?: string;
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
  const hasErrors = props.errors || props.errorSummary;
  const formGroupClasses = hasErrors ? styles['form-group-wrapper--error-sibling'] : '';
  const errorClasses = classNames(styles['validation-errors'], props.errorSummary && styles['validation-errors--visible']);

  return (
    <>
      <div data-testid={props.testId} data-analyticsid={AnalyticsId.Validation} className={props.className} ref={ref}>
        {React.Children.map(props.children, (child: React.ReactNode) => {
          if (isComponent<FormGroupProps>(child, FormGroup)) {
            return React.cloneElement(child, {
              className: formGroupClasses,
            });
          }

          return child;
        })}
      </div>
      <ValidationSummary errorTitle={props.errorTitle} errors={props.errors}>
        {props.errorSummary && <div className={errorClasses}>{props.errorSummary}</div>}
      </ValidationSummary>
    </>
  );
});

Validation.displayName = 'Validation';

export default Validation;
