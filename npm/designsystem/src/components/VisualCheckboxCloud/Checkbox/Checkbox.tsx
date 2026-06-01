import { useState } from 'react';

import classNames from 'classnames';

import type { ErrorWrapperClassNameProps } from '../../ErrorWrapper';

import { AnalyticsId } from '../../../constants';
import { useIdWithFallback } from '../../../hooks/useIdWithFallback';
import { getAriaDescribedBy } from '../../../utils/accessibility';
import ErrorWrapper from '../../ErrorWrapper';

import styles from './styles.module.scss';

export interface CheckboxProps
  extends ErrorWrapperClassNameProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'id' | 'className' | 'children' | 'size'> {
  /** Adds custom classes to the root element. */
  className?: string;
  /** Label text shown inside the pill. */
  children: React.ReactNode;
  /** input id of the underlying checkbox */
  inputId?: string;
  /** Activates error styling. Can be true while errorText is empty (e.g. when used in a FormGroup). */
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

const Checkbox: React.FC<CheckboxProps> = props => {
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
          styles['visual-checkbox'],
          {
            [styles['visual-checkbox--checked']]: isChecked,
            [styles['visual-checkbox--invalid']]: error,
          },
          className
        )}
        htmlFor={inputId}
        data-testid={testId}
        data-analyticsid={AnalyticsId.Checkbox}
      >
        <input
          {...rest}
          id={inputId}
          ref={ref}
          className={styles['visual-checkbox__input']}
          type="checkbox"
          checked={isChecked}
          aria-invalid={error}
          aria-describedby={getAriaDescribedBy(props, errorTextId)}
          onChange={handleChange}
        />
        <span className={styles['visual-checkbox__pill']}>
          {isChecked && (
            <span className={styles['visual-checkbox__icon']} aria-hidden="true">
              <svg width="16" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m14.754.165 1.08 1.074.166.164-.16.17L6.13 12 .159 5.59 0 5.42l.166-.164 1.08-1.075.165-.164.16.17 4.558 4.896 8.3-8.913.16-.17.165.165Z" />
              </svg>
            </span>
          )}
          <span className={styles['visual-checkbox__label']}>{children}</span>
        </span>
      </label>
    </ErrorWrapper>
  );
};

export default Checkbox;
