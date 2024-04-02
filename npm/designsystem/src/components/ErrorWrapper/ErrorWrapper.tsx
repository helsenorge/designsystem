import React from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

export interface ErrorWrapperProps {
  /** Form component */
  children?: React.ReactNode;
  /** Error message */
  errorText?: string;
  /** Error text id */
  errorTextId?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const ErrorWrapper: React.FC<ErrorWrapperProps> = props => {
  const errorWrapperClasses = cn(styles['error-wrapper'], props.errorText && styles[`error-wrapper--with-error`], props.className);

  return (
    <div className={errorWrapperClasses} data-testid={props.testId}>
      {props.errorText && (
        <p className={styles['error-wrapper__errors']} id={props.errorTextId}>
          {props.errorText}
        </p>
      )}
      {props.children}
    </div>
  );
};

export default ErrorWrapper;
