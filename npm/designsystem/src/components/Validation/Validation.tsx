import React from 'react';

import classNames from 'classnames';

import FormGroup, { FormGroupProps, FormVariant } from '../FormGroup/FormGroup';

import validationStyles from './styles.module.scss';

interface ValidationProps {
  /** text placed in the legend tag of the fieldset */
  errorSummary?: string;
  /** Items in the Validation compontent */
  children?: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the visuals of the formgroup */
  variant?: FormVariant;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const Validation = React.forwardRef((props: ValidationProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { errorSummary, className } = props;
  const bigform = props.variant === 'bigform';
  const validationClasses = classNames(validationStyles['validation'], className);

  return (
    <>
      <div data-testid={props.testId} className={validationClasses}>
        {React.Children.map(props.children, (child: React.ReactNode) => {
          if ((child as React.ReactElement<FormGroupProps>).type === FormGroup) {
            return React.cloneElement(child as React.ReactElement<FormGroupProps>, {
              className: errorSummary ? validationStyles['form-group-wrapper--error-sibling'] : '',
            });
          }
          return child;
        })}
      </div>
      {errorSummary && <p className={validationStyles['validation__errors']}>{errorSummary}</p>}
    </>
  );
});

export default Validation;
