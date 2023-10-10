import React, { useState, useRef } from 'react';

import { format, isValid, parse } from 'date-fns';
import { nb } from 'date-fns/locale';
import { DayOfWeek, DayPickerSingleProps, SelectSingleEventHandler } from 'react-day-picker';

import Icon from '@helsenorge/designsystem-react/components/Icons';

import DatePickerPopup from './DatePickerPopup';
import { useKeyboardEvent, KeyboardEventKey } from '../../../../designsystem/src';
import { useOutsideEvent } from '../../../../designsystem/src';
import Button from '../../../../designsystem/src/components/Button';
import Calendar from '../../../../designsystem/src/components/Icons/Calendar';
import Input from '../../../../designsystem/src/components/Input';
import { usePseudoClasses } from '../../../../designsystem/src/hooks/usePseudoClasses';
import { isMobileUA } from '../../../../designsystem/src/utils/mobile';
import { isMutableRefObject, mergeRefs } from '../../../../designsystem/src/utils/refs';

import styles from './styles.module.scss';

export type DateFormats = 'dd.MM.yyyy';

export interface DatePickerProps
  extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'aria-describedby' | 'onChange'>,
    Pick<DayPickerSingleProps, 'dir' | 'initialFocus'> {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets aria-label on the button that opens the datepicker dialogue */
  dateButtonAriaLabel?: string;
  /** Sets the format of the date - only applies for desktop use. Native mobile date fields base their formats on the device */
  dateFormat?: DateFormats;
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
  /** Whether or not we should render the native mobile datepicker */
  isMobile?: boolean;
  /** Label of the input */
  label?: React.ReactNode;
  /** Sets the locale of the datepicker */
  locale?: Locale;
  /** Maximum date allowed to be selected */
  maxDate?: Date;
  /** Minimum date allowed to be selected */
  minDate?: Date;
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
    isMobile = isMobileUA(),
    label,
    locale = nb,
    maxDate,
    minDate,
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.currentTarget.value);
    const newDate = parse(event.currentTarget.value, dateFormat, new Date());

    if (isValid(newDate)) {
      setDateState(newDate);
      setMonth(newDate);
    } else {
      setDateState(undefined);
    }

    onChange && onChange(event);
  };

  const handleInputFocus = (): void => {
    if (!returnInputFocus) {
      setDatePickerOpen(true);
    } else {
      setReturnInputFocus(false);
    }
  };

  const handleSingleDatePickerSelect: SelectSingleEventHandler = (date: Date | undefined): void => {
    setDateState(date);
    setReturnInputFocus(true);

    if (refObject.current) {
      setInputValue(date ? format(date, dateFormat) : '');
      setDatePickerOpen(false);
    }
  };

  const handleButtonClick = (
    e?: React.MouseEvent<HTMLElement, MouseEvent> | React.FormEvent<{}> | React.KeyboardEvent<HTMLUListElement> | null | undefined
  ): void => {
    e?.stopPropagation();
    setDatePickerOpen(!datePickerOpen);
  };

  const renderMobile = (): React.ReactNode => (
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
      onChange={handleInputChange}
    />
  );

  const renderDesktop = (): React.ReactNode => (
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
          onChange={handleInputChange}
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
      {isMobile ? renderMobile() : renderDesktop()}
    </div>
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
