import React, { useState, useRef, useEffect } from 'react';

import { Locale, format, isValid, parse } from 'date-fns';
import { nb } from 'date-fns/locale';
import { ActiveModifiers, DayOfWeek, DayPickerSingleProps, SelectSingleEventHandler } from 'react-day-picker';

import Button from '@helsenorge/designsystem-react/components/Button';
import Icon from '@helsenorge/designsystem-react/components/Icon';
import Calendar from '@helsenorge/designsystem-react/components/Icons/Calendar';
import Input from '@helsenorge/designsystem-react/components/Input';
import { KeyboardEventKey, ZIndex } from '@helsenorge/designsystem-react/constants';
import { useKeyboardEvent } from '@helsenorge/designsystem-react/hooks/useKeyboardEvent';
import { useOutsideEvent } from '@helsenorge/designsystem-react/hooks/useOutsideEvent';
import { usePseudoClasses } from '@helsenorge/designsystem-react/hooks/usePseudoClasses';
import { isMobileUA } from '@helsenorge/designsystem-react/utils/mobile';
import { isMutableRefObject, mergeRefs } from '@helsenorge/designsystem-react/utils/refs';

import DatePickerPopup from './DatePickerPopup';

import styles from './styles.module.scss';

export type DateFormat = 'dd.MM.yyyy';

export interface DatePickerProps
  extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'aria-describedby' | 'onBlur' | 'autoComplete'>,
    Pick<DayPickerSingleProps, 'dir' | 'initialFocus'> {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets aria-label on the button that opens the datepicker dialogue */
  dateButtonAriaLabel?: string;
  /** Sets the format of the date - only applies for desktop use. Native mobile date fields base their formats on the device */
  dateFormat?: DateFormat;
  /** Sets the date of the component */
  dateValue?: Date;
  /** Sets the current month */
  defaultMonth?: Date;
  /** Disables the datepicker */
  disabled?: boolean;
  /** Disables the days in the datepicker */
  disableDays?: Date[];
  /** Disables weekends in the datepicker */
  disableWeekends?: boolean;
  /** Activates Error style for the input */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Error text id */
  errorTextId?: string;
  /** Content to be rendered in the footer of the datepicker popup */
  footerContent?: React.ReactNode;
  /** Label of the input */
  label?: React.ReactNode;
  /** Input element id */
  inputId?: string;
  /** Sets the locale of the datepicker */
  locale?: Locale;
  /** Maximum date allowed to be selected */
  maxDate?: Date;
  /** Minimum date allowed to be selected */
  minDate?: Date;
  /** onChange callback triggered by change in chosen date */
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<Element, MouseEvent>, date: Date | string | undefined) => void;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Overrides the default z-index of DatePicker */
  zIndex?: number;
}

export const DatePicker = React.forwardRef((props: DatePickerProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    className,
    dateButtonAriaLabel,
    dateFormat = 'dd.MM.yyyy',
    dateValue,
    defaultMonth,
    dir,
    disabled,
    disableDays = [],
    disableWeekends,
    error,
    errorText,
    errorTextId,
    footerContent,
    label,
    inputId,
    locale = nb,
    maxDate,
    minDate,
    onBlur,
    onChange,
    testId,
    autoComplete = 'off',
    zIndex = ZIndex.PopOver,
    ...rest
  } = props;

  const [dateState, setDateState] = useState<Date | undefined>(dateValue);
  const [inputValue, setInputValue] = useState<string>(dateState ? format(dateState, dateFormat) : '');
  const [month, setMonth] = useState<Date | undefined>(defaultMonth);
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const [returnInputFocus, setReturnInputFocus] = useState<boolean>(false);
  const [syntheticBlurTriggered, setSyntheticBlurTriggered] = useState<boolean>(false);

  const weekendMatcher: DayOfWeek = {
    dayOfWeek: [0, 6],
  };
  const disabledDays: (Date | DayOfWeek)[] = disableWeekends ? [...disableDays, weekendMatcher] : disableDays;

  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const datepickerWrapperRef = useRef<HTMLDivElement>(null);
  const { refObject } = usePseudoClasses<HTMLInputElement>(isMutableRefObject(ref) ? ref : null);
  const mergedRefs = mergeRefs([ref, refObject]);
  const isTyping = useRef<boolean>(false);

  useOutsideEvent(inputContainerRef, e => {
    const targetAsNode = e.target as Node;
    if (!inputContainerRef.current?.contains(targetAsNode) && !datepickerWrapperRef.current?.contains(targetAsNode)) {
      setDatePickerOpen(false);
    }
  });

  useEffect(() => {
    if (isValid(dateValue)) {
      setInputValue(dateValue ? format(dateValue, dateFormat) : '');
      setDateState(dateValue);
      setMonth(dateValue);
    } else {
      setInputValue('');
      setDateState(undefined);
      setMonth(undefined);
    }
  }, [dateValue, dateFormat]);

  useEffect(() => {
    if (returnInputFocus && refObject.current) {
      refObject.current.focus();
    }
  }, [returnInputFocus]);

  const handleEscapeKeyDown = (): void => {
    refObject?.current && refObject.current.focus();
    setDatePickerOpen(false);
  };

  useKeyboardEvent(datepickerWrapperRef, handleEscapeKeyDown, [KeyboardEventKey.Escape]);
  useKeyboardEvent(inputWrapperRef, handleEscapeKeyDown, [KeyboardEventKey.Escape]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, inputFormat: string): void => {
    setInputValue(event.currentTarget.value);
    const newDate = parse(event.currentTarget.value, inputFormat, new Date());

    if (isValid(newDate)) {
      setDateState(newDate);
      setMonth(newDate);
    } else {
      setDateState(undefined);
    }

    onChange && onChange(event, event.currentTarget.value);
    setSyntheticBlurTriggered(false);
  };

  const handleInputFocus = (): void => {
    if (!returnInputFocus) {
      setDatePickerOpen(true);
    } else {
      setReturnInputFocus(false);
    }
  };

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const handleSingleDatePickerSelect: SelectSingleEventHandler = (
    date: Date | undefined,
    _selectedDay: Date,
    _activeModifiers: ActiveModifiers,
    _e: React.MouseEvent<Element, MouseEvent>
  ): void => {
    setReturnInputFocus(true);

    if (!date) {
      setDatePickerOpen(false);
      return;
    }

    const formattedDate = format(date, dateFormat);
    setDateState(date);
    setInputValue(formattedDate);
    setDatePickerOpen(false);

    triggerSyntheticInputEvents(refObject, formattedDate, date, onChange, onBlur);
  };
  /* eslint-enable @typescript-eslint/no-unused-vars */

  // We do this to make sure selecting from the DatePickerPopup triggers the onBlur events properly, and works with react-hook-form
  const triggerSyntheticInputEvents = (
    inputRef: React.RefObject<HTMLInputElement>,
    value: string,
    date: Date,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, date: Date) => void,
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  ): void => {
    if (inputRef.current) {
      inputRef.current.value = value;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const inputEvent = new Event('input', { bubbles: true }) as any;
      inputRef.current.dispatchEvent(inputEvent);

      if (onChange) {
        onChange(inputEvent as unknown as React.ChangeEvent<HTMLInputElement>, date);
      }

      const blurEvent = new FocusEvent('blur', { bubbles: true });
      inputRef.current.dispatchEvent(blurEvent);

      if (onBlur) {
        onBlur(blurEvent as unknown as React.FocusEvent<HTMLInputElement>);
      }

      setSyntheticBlurTriggered(true);
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement, Element>): void => {
    if (!datepickerWrapperRef.current?.contains(e.relatedTarget as Node)) {
      setDatePickerOpen(false);
    }

    if (!syntheticBlurTriggered) {
      onBlur && onBlur(e);
    } else {
      setSyntheticBlurTriggered(false);
    }
  };

  const handleButtonClick = (
    e?: React.MouseEvent<HTMLElement, MouseEvent> | React.FormEvent<{}> | React.KeyboardEvent<HTMLUListElement> | null | undefined
  ): void => {
    e?.stopPropagation();
    setDatePickerOpen(!datePickerOpen);
  };

  useEffect(() => {
    const handleKeyDown = (): void => {
      isTyping.current = true;
    };
    const handleKeyUp = (): void => {
      isTyping.current = false;
    };

    const inputElement = refObject.current;
    if (inputElement) {
      inputElement.addEventListener('keydown', handleKeyDown);
      inputElement.addEventListener('keyup', handleKeyUp);
    }

    return (): void => {
      if (inputElement) {
        inputElement.removeEventListener('keydown', handleKeyDown);
        inputElement.removeEventListener('keyup', handleKeyUp);
      }
    };
  }, [refObject]);

  const handleMobileInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handleInputChange(e, 'yyyy-MM-dd');

    if (!isTyping.current) {
      triggerSyntheticInputEvents(refObject, e.currentTarget.value, new Date(e.currentTarget.value), onChange, onBlur);
    }

    isTyping.current = false;
  };

  const renderMobile = (
    <Input
      disabled={disabled}
      error={error}
      errorText={errorText}
      errorTextId={errorTextId}
      inputId={inputId}
      label={label}
      max={maxDate ? format(maxDate, 'yyyy-MM-dd') : ''}
      min={minDate ? format(minDate, 'yyyy-MM-dd') : ''}
      type="date"
      ref={mergedRefs}
      value={inputValue}
      width={14}
      {...rest}
      onBlur={handleInputBlur}
      onChange={handleMobileInputChange}
      autoComplete={autoComplete ? autoComplete : undefined}
    />
  );

  const renderDesktop = (
    <>
      <div>
        <Input
          disabled={disabled}
          error={error}
          errorText={errorText}
          errorTextId={errorTextId}
          inputId={inputId}
          inputContainerRef={inputContainerRef}
          inputWrapperRef={inputWrapperRef}
          label={label}
          onFocus={handleInputFocus}
          type="text"
          ref={mergedRefs}
          value={inputValue}
          width={12}
          {...rest}
          onBlur={handleInputBlur}
          onChange={e => handleInputChange(e, dateFormat)}
          rightOfInput={
            <Button
              disabled={disabled}
              ariaLabel={dateButtonAriaLabel ?? 'Velg dato'}
              onClick={handleButtonClick}
              tabIndex={datePickerOpen ? -1 : 0}
              variant={'borderless'}
              wrapperClassName={styles['date-button']}
              className={styles['date-button__inner']}
            >
              <Icon color={'black'} svgIcon={Calendar} />
            </Button>
          }
          autoComplete={autoComplete ? autoComplete : undefined}
        />
      </div>
      {datePickerOpen && !disabled && (
        <DatePickerPopup
          dir={dir}
          disabled={disabledDays}
          datepickerWrapperRef={datepickerWrapperRef}
          footer={footerContent}
          fromDate={minDate}
          toDate={maxDate}
          inputRef={refObject}
          locale={locale}
          month={month}
          selected={dateState}
          onSelect={handleSingleDatePickerSelect}
          onMonthChange={setMonth}
          zIndex={zIndex}
        />
      )}
    </>
  );

  return (
    <div className={className} data-testid={testId}>
      {isMobileUA() ? renderMobile : renderDesktop}
    </div>
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
