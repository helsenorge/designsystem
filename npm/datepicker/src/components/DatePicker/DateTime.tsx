import React, { useEffect, useState } from 'react';

import Input from '@helsenorge/designsystem-react/components/Input';
import { TemporaryErrorWrapperClassNameProps } from '@helsenorge/designsystem-react/components/TemporaryErrorWrapper';
import { usePseudoClasses } from '@helsenorge/designsystem-react/hooks/usePseudoClasses';
import { isMutableRefObject, mergeRefs } from '@helsenorge/designsystem-react/utils/refs';

import styles from './styles.module.scss';

export type TimeUnit = 'hours' | 'minutes';

export interface DateTimeProps
  extends TemporaryErrorWrapperClassNameProps,
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      'name' | 'aria-describedby' | 'aria-labelledby' | 'onBlur' | 'onChange' | 'disabled' | 'autoComplete'
    > {
  /** Default value that is set on the input field */
  defaultValue?: number;
  /** Activates Error style for the input */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Error text id */
  errorTextId?: string;
  /** input id of the checkbox */
  inputId?: string;
  /** Label of the input */
  label?: React.ReactNode;
  /** Sets the unit of time for the input field */
  timeUnit: TimeUnit;
  /** Value that is set on the input field */
  value?: number;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const formatAsTwoDigits = (value: string | number): string => {
  const stringValue = String(value);
  return stringValue.length === 1 ? '0' + stringValue : stringValue;
};

const isNumericString = (str: string): boolean => {
  return !str || (/^\d+$/.test(str) && str.length <= 2);
};

export const DateTime = React.forwardRef((props: DateTimeProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    error,
    errorText,
    errorTextId,
    errorWrapperClassName,
    label,
    onBlur,
    onChange,
    timeUnit,
    testId,
    inputId,
    value,
    autoComplete = 'off',
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState<number | string | undefined>(
    typeof value !== 'undefined' ? formatAsTwoDigits(value) : undefined
  );
  const { refObject } = usePseudoClasses<HTMLInputElement>(isMutableRefObject(ref) ? ref : null);
  const mergedRefs = mergeRefs([ref, refObject]);

  useEffect(() => {
    setInputValue(value ? formatAsTwoDigits(value) : undefined);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    if (isNumericString(value)) {
      setInputValue(value);
      onChange && onChange(event);
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    const formattedValue = formatAsTwoDigits(event.target.value);
    setInputValue(formattedValue);
    onChange && onChange(event);
    onBlur && onBlur(event);
  };

  /** Firefox stopper ikke vanlige characters fra å skrives til input type number - derfor håndterer vi det selv her */
  const handleInputOnKeyDown = (event: React.KeyboardEvent): void => {
    const validChars = /[0-9]/;
    const allowedKeys = ['Backspace', ' ', 'Enter', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (!validChars.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const renderTimeSeparator = (): React.ReactNode => {
    return timeUnit === 'hours' && <span className={styles['time-separator']}>{':'}</span>;
  };

  return (
    <div data-testid={testId}>
      <Input
        inputId={inputId}
        error={error}
        errorText={errorText}
        errorTextId={errorTextId}
        errorWrapperClassName={errorWrapperClassName}
        label={label}
        max={timeUnit === 'hours' ? 23 : 59}
        min={0}
        type="number"
        ref={mergedRefs}
        value={inputValue}
        width={5}
        defaultValue={typeof props.defaultValue !== 'undefined' ? formatAsTwoDigits(props.defaultValue) : undefined}
        {...rest}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        rightOfInput={renderTimeSeparator()}
        onKeyDown={handleInputOnKeyDown}
        autoComplete={autoComplete ? autoComplete : undefined}
      />
    </div>
  );
});

DateTime.displayName = 'DateTime';

export default DateTime;
