import React from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

export interface ErrorWrapperClassNameProps {
  errorWrapperClassName?: string;
}

export interface ErrorWrapperProps {
  /** Form component */
  children?: React.ReactNode;
  /** Error message */
  errorText?: string;
  /** Error text id */
  errorTextId?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Adds a ref to the error message p tag */
  errorMessageRef?: React.ForwardedRef<HTMLDivElement>;
  /** Renders the error component (Default: true) */
  renderError?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const ErrorWrapper: React.FC<ErrorWrapperProps> = props => {
  const errorWrapperClasses = cn(props.errorText && styles[`error-wrapper--with-error`], props.className);
  const errorWrapperTextClasses = cn(styles['error-wrapper__errors'], {
    [styles['error-wrapper__errors--hidden']]: !props.errorText || !props.renderError,
  });

  return (
    <div className={errorWrapperClasses} data-testid={props.testId}>
      <p className={errorWrapperTextClasses} id={props.errorTextId} ref={props.errorMessageRef} tabIndex={-1}>
        {props.errorText}
      </p>
      {props.children}
    </div>
  );
};

export default ErrorWrapper;
