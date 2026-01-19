import type React from 'react';

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
  errorMessageRef?: React.Ref<HTMLDivElement>;
  /** Renders the error component (Default: true) */
  renderError?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const ErrorWrapper: React.FC<ErrorWrapperProps> = props => {
  const { renderError = true } = props;

  const errorWrapperClasses = cn(props.errorText && renderError && styles[`error-wrapper--with-error`], props.className);

  return (
    <div className={errorWrapperClasses} data-testid={props.testId}>
      <span ref={props.errorMessageRef} tabIndex={-1}>
        {props.errorText && (
          <p className={styles['error-wrapper__errors']} id={props.errorTextId}>
            {props.errorText}
          </p>
        )}
      </span>
      {props.children}
    </div>
  );
};

export default ErrorWrapper;
