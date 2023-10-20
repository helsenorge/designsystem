import React, { useState } from 'react';

import Input from '@helsenorge/designsystem-react/components/Input';
import { usePseudoClasses } from '@helsenorge/designsystem-react/hooks/usePseudoClasses';
import { isMutableRefObject, mergeRefs } from '@helsenorge/designsystem-react/utils/refs';

import styles from './styles.module.scss';

export type TimeUnit = 'hours' | 'minutes';

export interface DateTimeProps
  extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'aria-describedby' | 'aria-labelledby' | 'onChange' | 'disabled'> {
  defaultValue?: number;
  /** Activates Error style for the input */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Label of the input */
  label?: React.ReactNode;
  /** Sets the unit of time for the input field */
  timeUnit: TimeUnit;
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
  const { defaultValue, error, errorText, label, onChange, timeUnit, testId, ...rest } = props;

  const [inputValue, setInputValue] = useState<number | string | undefined>(
    typeof defaultValue !== 'undefined' ? formatAsTwoDigits(defaultValue) : ''
  );
  const { refObject } = usePseudoClasses<HTMLInputElement>(isMutableRefObject(ref) ? ref : null);
  const mergedRefs = mergeRefs([ref, refObject]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    if (isNumericString(value)) {
      setInputValue(value);
      onChange && onChange(event);
    }
  };

  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const formattedValue = formatAsTwoDigits(event.target.value);
    setInputValue(formattedValue);
    onChange && onChange(event);
  };

  /** Firefox stopper ikke vanlige characters fra å skrives til input type number - derfor håndterer vi det selv her */
  const handleInputOnKeyDown = (event: React.KeyboardEvent) => {
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
        error={error}
        errorText={errorText}
        label={label}
        max={timeUnit === 'hours' ? 23 : 59}
        min={0}
        type="number"
        ref={mergedRefs}
        value={inputValue}
        width={5}
        {...rest}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        rightOfInput={renderTimeSeparator()}
        onKeyDown={handleInputOnKeyDown}
      />
    </div>
  );
});

DateTime.displayName = 'DateTime';

export default DateTime;
