import { useState } from 'react';

import classNames from 'classnames';

import type { ErrorWrapperClassNameProps } from '../../ErrorWrapper';

import { useIdWithFallback } from '../../../hooks/useIdWithFallback';
import { useIsMobileBreakpoint } from '../../../hooks/useIsMobileBreakpoint';
import { getAriaDescribedBy } from '../../../utils/accessibility';
import ErrorWrapper from '../../ErrorWrapper';

import styles from './styles.module.scss';

export interface RadioProps
  extends
    ErrorWrapperClassNameProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'id' | 'className' | 'children' | 'size' | 'value'> {
  /** Adds custom classes to the root element. */
  className?: string;
  /** Label text shown inside the pill. */
  children: React.ReactNode;
  /** Value identifying this radio inside its group. Required. */
  value: string;
  /** input id of the underlying radio */
  inputId?: string;
  /** Activates error styling. Can be true while errorText is empty (e.g. when used in a cloud). */
  error?: boolean;
  /** Error text to show above the component. */
  errorText?: string;
  /** Error text id */
  errorTextId?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Ref forwarded to the underlying input element. */
  ref?: React.Ref<HTMLInputElement | null>;
}

const Radio: React.FC<RadioProps> = props => {
  const {
    className,
    checked,
    defaultChecked,
    children,
    inputId: inputIdProp,
    errorText,
    error = !!errorText,
    errorTextId: errorTextIdProp,
    errorWrapperClassName,
    testId,
    onChange,
    ref,
    ...rest
  } = props;

  const inputId = useIdWithFallback(inputIdProp);
  const errorTextId = useIdWithFallback(errorTextIdProp);
  const isMobile = useIsMobileBreakpoint();
  const [isChecked, setIsChecked] = useState<boolean>(!!(checked ?? defaultChecked));
  const [prevChecked, setPrevChecked] = useState<boolean | undefined>(checked);
  if (prevChecked !== checked) {
    setPrevChecked(checked);
    if (checked !== undefined && checked !== isChecked) {
      setIsChecked(checked);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <ErrorWrapper className={errorWrapperClassName} errorText={errorText} errorTextId={errorTextId}>
      <label
        className={classNames(
          styles['visual-radio'],
          {
            [styles['visual-radio--checked']]: isChecked,
            [styles['visual-radio--invalid']]: error,
          },
          className
        )}
        htmlFor={inputId}
        data-testid={testId}
      >
        <input
          {...rest}
          id={inputId}
          ref={ref}
          className={styles['visual-radio__input']}
          type="radio"
          checked={isChecked}
          aria-describedby={getAriaDescribedBy(props, errorTextId)}
          onChange={handleChange}
        />
        <span className={styles['visual-radio__pill']}>
          {isChecked && (
            <span className={styles['visual-radio__icon']} aria-hidden="true">
              {isMobile ? (
                <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                </svg>
              ) : (
                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12A6 6 0 1 0 6 0a6 6 0 0 0 0 12Z" />
                </svg>
              )}
            </span>
          )}
          <span className={styles['visual-radio__label']}>{children}</span>
        </span>
      </label>
    </ErrorWrapper>
  );
};

export default Radio;
