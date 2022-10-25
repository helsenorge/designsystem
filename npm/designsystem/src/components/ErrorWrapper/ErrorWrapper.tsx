import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export interface ErrorWrapperProps {
  /** Error message */
  errorText?: string;
  /** Form component */
  children?: React.ReactNode;
}

export const ErrorWrapper: React.FC<ErrorWrapperProps> = props => {
  const { errorText } = props;

  const withErrorStyle = cn(styles['error-wrapper'], { [styles[`error-wrapper--with-error`]]: errorText });

  const errorStyles = cn(styles['error-wrapper__errors']);

  return (
    <div className={withErrorStyle}>
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
