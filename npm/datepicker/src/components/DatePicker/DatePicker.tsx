import React, { useState, useRef } from 'react';

import { format, isValid, parse } from 'date-fns';
import { nb } from 'date-fns/locale';
import { ActiveModifiers, DayOfWeek, DayPickerSingleProps, SelectSingleEventHandler } from 'react-day-picker';

import Button from '@helsenorge/designsystem-react/components/Button';
import Icon from '@helsenorge/designsystem-react/components/Icons';
import Calendar from '@helsenorge/designsystem-react/components/Icons/Calendar';
import Input from '@helsenorge/designsystem-react/components/Input';
import { KeyboardEventKey } from '@helsenorge/designsystem-react/constants';
import { useKeyboardEvent } from '@helsenorge/designsystem-react/hooks/useKeyboardEvent';
import { useOutsideEvent } from '@helsenorge/designsystem-react/hooks/useOutsideEvent';
import { usePseudoClasses } from '@helsenorge/designsystem-react/hooks/usePseudoClasses';
import { isMobileUA } from '@helsenorge/designsystem-react/utils/mobile';
import { isMutableRefObject, mergeRefs } from '@helsenorge/designsystem-react/utils/refs';

import DatePickerPopup from './DatePickerPopup';

import styles from './styles.module.scss';

export type DateFormat = 'dd.MM.yyyy';

export interface DatePickerProps
  extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'aria-describedby' | 'onBlur'>,
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
  /** Disables the days in the datepicker */
  disableDays?: Date[];
  /** Disables weekends in the datepicker */
  disableWeekends?: boolean;
  /** Activates Error style for the input */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Content to be rendered in the footer of the datepicker popup */
  footerContent?: React.ReactNode;
  /** Label of the input */
  label?: React.ReactNode;
  /** Sets the locale of the datepicker */
  locale?: Locale;
  /** Maximum date allowed to be selected */
  maxDate?: Date;
  /** Minimum date allowed to be selected */
  minDate?: Date;
  /** onChange callback trigges ved endring i valgt dato */
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<Element, MouseEvent>, date: Date | string | undefined) => void;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const DatePicker = React.forwardRef((props: DatePickerProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    className,
    dateButtonAriaLabel,
    dateFormat = 'dd.MM.yyyy',
    dateValue,
    defaultMonth,
    dir,
    disableDays = [],
    disableWeekends,
    error,
    errorText,
    footerContent,
    label,
    locale = nb,
    maxDate,
    minDate,
    onBlur,
    onChange,
    testId,
    ...rest
  } = props;

  const [dateState, setDateState] = useState<Date | undefined>(dateValue);
  const [inputValue, setInputValue] = useState<string>(dateState ? format(dateState, dateFormat) : '');
  const [month, setMonth] = useState<Date | undefined>(defaultMonth);
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const [returnInputFocus, setReturnInputFocus] = useState<boolean>(false);
  const weekendMatcher: DayOfWeek = {
    dayOfWeek: [0, 6],
  };
  const disabledDays: (Date | DayOfWeek)[] = disableWeekends ? [...disableDays, weekendMatcher] : disableDays;
  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const datepickerWrapperRef = useRef<HTMLDivElement>(null);
  const { refObject } = usePseudoClasses<HTMLInputElement>(isMutableRefObject(ref) ? ref : null);
  const mergedRefs = mergeRefs([ref, refObject]);
  useOutsideEvent(datepickerWrapperRef, e => {
    const targetAsNode = e.target as Node;
    if (!inputWrapperRef?.current?.contains(targetAsNode)) {
      setDatePickerOpen(false);
    }
  });

  React.useEffect(() => {
    setInputValue(dateValue ? format(dateValue, dateFormat) : '');

    if (isValid(dateValue)) {
      setDateState(dateValue);
      setMonth(dateValue);
    }
  }, [dateValue]);

  React.useEffect(() => {
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
  };

  const handleInputFocus = (): void => {
    if (!returnInputFocus) {
      setDatePickerOpen(true);
    } else {
      setReturnInputFocus(false);
    }
  };

  const handleSingleDatePickerSelect: SelectSingleEventHandler = (
    date: Date | undefined,
    selectedDay: Date,
    activeModifiers: ActiveModifiers,
    e: React.MouseEvent<Element, MouseEvent>
  ): void => {
    setReturnInputFocus(true);

    if (!date) {
      setDatePickerOpen(false);
      return;
    }

    setDateState(date);

    if (refObject.current) {
      setInputValue(format(date, dateFormat));
      setDatePickerOpen(false);
    }

    onChange && onChange(e, date);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!datepickerWrapperRef.current?.contains(e.relatedTarget as Node)) {
      setDatePickerOpen(false);
    }
    onBlur && onBlur(e);
  };

  const handleButtonClick = (
    e?: React.MouseEvent<HTMLElement, MouseEvent> | React.FormEvent<{}> | React.KeyboardEvent<HTMLUListElement> | null | undefined
  ): void => {
    e?.stopPropagation();
    setDatePickerOpen(!datePickerOpen);
  };

  const renderMobile = (
    <Input
      error={error}
      errorText={errorText}
      label={label}
      max={maxDate ? format(maxDate, 'yyyy-MM-dd') : ''}
      min={minDate ? format(minDate, 'yyyy-MM-dd') : ''}
      type="date"
      ref={mergedRefs}
      value={inputValue}
      width={14}
      {...rest}
      onBlur={e => {
        onBlur && onBlur(e);
      }}
      onChange={e => handleInputChange(e, 'yyyy-MM-dd')}
    />
  );

  const renderDesktop = (
    <>
      <div className={styles['date-input-wrapper']}>
        <Input
          error={error}
          errorText={errorText}
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
              ariaLabel={dateButtonAriaLabel ?? 'Velg dato'}
              onClick={handleButtonClick}
              tabIndex={datePickerOpen ? -1 : 0}
              variant={'borderless'}
              wrapperClassName={styles['date-button']}
            >
              {<Icon color={'black'} svgIcon={Calendar} />}
            </Button>
          }
        />
      </div>
      {datePickerOpen && (
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
