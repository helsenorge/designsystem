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
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const ErrorWrapper: React.FC<ErrorWrapperProps> = props => {
  const { errorText, errorTextId, children, className, testId } = props;
  const errorWrapperClasses = cn({ [styles[`error-wrapper--with-error`]]: props.errorText }, className);

  return (
    <div className={errorWrapperClasses} data-testid={testId}>
      <span role="status" aria-live="polite" aria-atomic={true} aria-relevant="text additions">
        <p aria-hidden={true} className={cn(styles['error-wrapper__errors'], { [styles['error-wrapper__errors--hidden']]: !errorText })}>
          {errorText}
        </p>
        <p id={errorTextId} className={styles['error-wrapper__errors--hidden']}>
          {errorText}
        </p>
      </span>
      {children}
    </div>
  );
};

export default ErrorWrapper;
