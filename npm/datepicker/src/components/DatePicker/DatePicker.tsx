import React, { useState, useRef, useEffect } from 'react';

import { Locale, format, isValid, parse } from 'date-fns';
import { nb } from 'date-fns/locale';
import { Modifiers, DayOfWeek, DayPickerProps, PropsSingle } from 'react-day-picker';

import Button from '@helsenorge/designsystem-react/components/Button';
import { ErrorWrapperClassNameProps } from '@helsenorge/designsystem-react/components/ErrorWrapper';
import Icon from '@helsenorge/designsystem-react/components/Icon';
import Calendar from '@helsenorge/designsystem-react/components/Icons/Calendar';
import Input from '@helsenorge/designsystem-react/components/Input';
import { PopOverVariant } from '@helsenorge/designsystem-react/components/PopOver';
import { KeyboardEventKey, LanguageLocales, ZIndex } from '@helsenorge/designsystem-react/constants';
import { useKeyboardEvent } from '@helsenorge/designsystem-react/hooks/useKeyboardEvent';
import { useOutsideEvent } from '@helsenorge/designsystem-react/hooks/useOutsideEvent';
import { usePseudoClasses } from '@helsenorge/designsystem-react/hooks/usePseudoClasses';
import { useLanguage } from '@helsenorge/designsystem-react/utils/language';
import { isMobileUA } from '@helsenorge/designsystem-react/utils/mobile';
import { isMutableRefObject, mergeRefs } from '@helsenorge/designsystem-react/utils/refs';

import DatePickerPopup, { DatePickerAriaLabels } from './DatePickerPopup';
import { getResources } from './resourceHelper';
import { HNDesignsystemDatePicker } from '../../resources/Resources';

import styles from './styles.module.scss';

export type DateFormat = 'dd.MM.yyyy';

export interface DatePickerProps
  extends ErrorWrapperClassNameProps,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'aria-describedby' | 'onBlur' | 'autoComplete'>,
    Pick<DayPickerProps, 'dir' | 'initialFocus'> {
  /** Setter labels for popup på desktop visning */
  ariaLabels?: DatePickerAriaLabels;
  /** Adds custom classes to the element. */
  className?: string;
  /** @deprecated Sets aria-label on the button that opens the datepicker dialogue */
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
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
    date?: Date | string
  ) => void;
  /** Only use this to trigger validation. Callback triggered by change in chosen date via the datepicker popup */
  onDatePopupClosed?: (date: Date | string | undefined) => void;
  /** Resources for component */
  resources?: Partial<HNDesignsystemDatePicker>;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Determines the placement of the DatePicker popup. Default: automatic positioning. */
  variant?: keyof typeof PopOverVariant;
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
    errorWrapperClassName,
    footerContent,
    label,
    ariaLabels,
    inputId,
    locale = nb,
    maxDate,
    minDate,
    onBlur,
    onChange,
    onDatePopupClosed,
    testId,
    resources,
    autoComplete = 'off',
    variant = PopOverVariant.positionautomatic,
    zIndex = ZIndex.PopOver,
    ...rest
  } = props;

  const [dateState, setDateState] = useState<Date | undefined>(dateValue);
  const [inputValue, setInputValue] = useState<string>(dateState ? format(dateState, dateFormat) : '');
  const [month, setMonth] = useState<Date | undefined>(defaultMonth);
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const [returnInputFocus, setReturnInputFocus] = useState<boolean>(false);
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemDatePicker = {
    ...defaultResources,
    ...resources,
    dateButtonAriaLabel: dateButtonAriaLabel || resources?.dateButtonAriaLabel || defaultResources.dateButtonAriaLabel,
  };
  const popupAriaLabels: DatePickerAriaLabels = {
    dayButtonBase: ariaLabels?.dayButtonBase || mergedResources.dayButtonBase,
    dayButtonToday: ariaLabels?.dayButtonToday || mergedResources.dayButtonToday,
    dayButtonSelected: ariaLabels?.dayButtonSelected || mergedResources.dayButtonSelected,
    nextMonth: ariaLabels?.nextMonth || mergedResources.nextMonth,
    previousMonth: ariaLabels?.previousMonth || mergedResources.previousMonth,
    monthDropdown: ariaLabels?.monthDropdown || mergedResources.monthDropdown,
    yearDropdown: ariaLabels?.yearDropdown || mergedResources.yearDropdown,
  };

  const weekendMatcher: DayOfWeek = {
    dayOfWeek: [0, 6],
  };
  const disabledDays = disableWeekends
    ? [...disableDays, weekendMatcher, ...(minDate ? [{ before: minDate }] : []), ...(maxDate ? [{ after: maxDate }] : [])]
    : [...disableDays, ...(minDate ? [{ before: minDate }] : []), ...(maxDate ? [{ after: maxDate }] : [])];

  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const datepickerWrapperRef = useRef<HTMLDivElement>(null);
  const { refObject } = usePseudoClasses<HTMLInputElement>(isMutableRefObject(ref) ? ref : null);
  const mergedRefs = mergeRefs([ref, refObject]);
  const isTyping = useRef<boolean>(false);

  /* eslint-disable @typescript-eslint/no-explicit-any */
  useOutsideEvent(
    [inputContainerRef, datepickerWrapperRef],
    (e: any) => {
      if (
        inputContainerRef.current &&
        datepickerWrapperRef.current &&
        !e?.composedPath().includes(inputContainerRef.current) &&
        !e?.composedPath().includes(datepickerWrapperRef.current)
      ) {
        setDatePickerOpen(false);
      }
    },
    ['mousedown', 'focusin', 'blur']
  );
  /* eslint-enable @typescript-eslint/no-explicit-any */

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
    if (refObject?.current) refObject.current.focus();
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

    if (onChange) onChange(event, event.currentTarget.value);
  };

  const handleInputFocus = (): void => {
    if (!returnInputFocus) {
      setDatePickerOpen(true);
    } else {
      setReturnInputFocus(false);
    }
  };

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const handleSingleDatePickerSelect: PropsSingle['onSelect'] = (
    date: Date | undefined,
    _selectedDay: Date,
    _activeModifiers: Modifiers,
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
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

    if (onChange) onChange(e, date);

    triggerSyntheticInputEvents(refObject, format(date, dateFormat), date);

    if (onDatePopupClosed) onDatePopupClosed(date);
  };

  // We do this to make sure selecting from the DatePickerPopup triggers the onChange events properly, and works with react-hook-form
  const triggerSyntheticInputEvents = (
    inputRef: React.RefObject<HTMLInputElement>,
    value: string,
    date: Date,
    _onChange?: (event: React.ChangeEvent<HTMLInputElement>, date: Date) => void
  ): void => {
    if (inputRef.current) {
      inputRef.current.value = value;

      const inputEvent = new Event('change', { bubbles: true });

      // Since the event is synthetic we have to add the target for webcomponents to not throw an error
      Object.defineProperty(inputEvent, 'target', {
        value: inputRef.current,
        writable: false,
        enumerable: true,
        configurable: true,
      });

      Object.defineProperty(inputEvent, 'currentTarget', {
        value: inputRef.current,
        writable: false,
        enumerable: true,
        configurable: true,
      });

      inputRef.current.dispatchEvent(inputEvent);

      if (onChange) {
        onChange(inputEvent as unknown as React.ChangeEvent<HTMLInputElement>, date);
      }
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement, Element>): void => {
    // We don't trigger the native onBlur event if the user select via the datepicker and the onDatePopupClosed callback is used (usually to trigger validation manually)
    if (!datePickerOpen && (typeof onDatePopupClosed === 'undefined' || isTyping.current)) {
      if (onBlur) onBlur(e);
    }

    isTyping.current = false;
  };

  const handleButtonClick = (
    e?: React.MouseEvent<HTMLElement, MouseEvent> | React.FormEvent<unknown> | React.KeyboardEvent<HTMLUListElement> | null | undefined
  ): void => {
    e?.stopPropagation();
    setDatePickerOpen(!datePickerOpen);
  };

  // This differentiates between typing in the input field and selecting a date from the datepicker, especially on native mobile date fields
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!['Escape', 'Enter', 'Tab'].includes(e.key)) {
        isTyping.current = true;
        setDatePickerOpen(false);
      }
    };

    const inputElement = refObject.current;
    if (inputElement) {
      inputElement.addEventListener('keydown', handleKeyDown);
    }

    return (): void => {
      if (inputElement) {
        inputElement.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [refObject]);

  const handleMobileInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handleInputChange(e, 'yyyy-MM-dd');

    if (!isTyping.current) {
      if (onDatePopupClosed) onDatePopupClosed(dateState);
    }
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
      value={dateState ? format(dateState, 'yyyy-MM-dd') : ''}
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
          errorWrapperClassName={errorWrapperClassName}
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'yyyy-MM-dd')}
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
          startMonth={minDate}
          endMonth={maxDate}
          inputRef={refObject}
          locale={locale}
          month={month}
          selected={dateState}
          onSelect={handleSingleDatePickerSelect}
          onMonthChange={setMonth}
          variant={variant}
          zIndex={zIndex}
          ariaLabels={popupAriaLabels}
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
