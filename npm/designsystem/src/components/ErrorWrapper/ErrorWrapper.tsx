import React from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

export interface ErrorWrapperProps {
  /** Error message */
  errorText?: string;
  /** Form component */
  children?: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const ErrorWrapper: React.FC<ErrorWrapperProps> = props => {
  const { errorText, className, testId } = props;

  const withErrorStyle = cn(styles['error-wrapper'], className, { [styles[`error-wrapper--with-error`]]: errorText });

  const errorStyles = cn(styles['error-wrapper__errors']);

  return (
    <div className={withErrorStyle} data-testid={testId || 'error-wrapper-testid'}>
      {errorText && (
        <p role="alert" className={errorStyles}>
          {errorText}
        </p>
      )}
      {props.children}
    </div>
  );
};

export default ErrorWrapper;
