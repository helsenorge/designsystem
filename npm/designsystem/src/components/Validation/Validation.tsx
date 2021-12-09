import React from 'react';

import classNames from 'classnames';

import { FormVariant } from '../FormGroup/FormGroup';

import validationStyles from './styles.module.scss';

interface ValidationProps {
  /** text placed in the legend tag of the fieldset */
  errorSummary?: string;
  /** Items in the ExpanderList */
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
  const errorClasses = classNames(validationStyles['validation__errors'], {
    [validationStyles['validation__errors--bigform']]: bigform,
  });

  return (
    <>
      <div data-testid={props.testId} className={validationClasses}>
        {props.children}
      </div>
      {errorSummary && <p className={errorClasses}>{errorSummary}</p>}
    </>
  );
});

export default Validation;
