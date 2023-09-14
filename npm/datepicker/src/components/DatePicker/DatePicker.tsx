import React, { useState } from 'react';

import { format, isValid, parse } from 'date-fns';
import { ActiveModifiers, DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import reactdaypickerstyles from 'react-day-picker/dist/style.module.css';

// TODO: FIKS IMPORT fra designsystem pakke

import { getBubbleStyle } from './utils';
import { useLayoutEvent, useOutsideEvent, useSize } from '../../../../designsystem/src';
import Calendar from '../../../../designsystem/src/components/Icons/Calendar';
import Input from '../../../../designsystem/src/components/Input';
import { useInterval } from '../../../../designsystem/src/hooks/useInterval';
import { usePseudoClasses } from '../../../../designsystem/src/hooks/usePseudoClasses';
import { isMutableRefObject, mergeRefs } from '../../../../designsystem/src/utils/refs';

import styles from './styles.module.scss';

export type DateFormats = 'dd.MM.yyyy';

interface DatePickerProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'aria-describedby' | 'onChange'> {
  /** Sets the date of the component */
  dateFormat?: DateFormats;
  /** Sets the date of the component */
  dateValue?: Date;
  /** Sets the current month */
  defaultMonth?: Date;
  /** Activates Error style for the input */
  error?: boolean;
  /** Error text to show above the component */
  errorText?: string;
  /** Label of the input */
  label?: React.ReactNode;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const DatePicker = React.forwardRef((props: DatePickerProps, ref: React.Ref<HTMLInputElement>) => {
  const { dateFormat = 'dd.MM.yyyy', dateValue, defaultMonth, error, errorText, label, onChange, testId, ...rest } = props;

  const [dateState, setDateState] = useState<Date | undefined>(dateValue);
  const [inputValue, setInputValue] = useState<string>(dateState ? format(dateState, dateFormat) : '');
  const [month, setMonth] = useState<Date | undefined>(defaultMonth);
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const [focusDatePicker, setFocusDatePicker] = useState<boolean>(false);

  const datepickerWrapperRef = React.useRef<HTMLDivElement>(null);
  const { refObject } = usePseudoClasses<HTMLInputElement>(isMutableRefObject(ref) ? ref : null);
  const mergedRefs = mergeRefs([ref, refObject]);
  useOutsideEvent(datepickerWrapperRef, () => setDatePickerOpen(false));

  React.useEffect(() => {
    !datePickerOpen && setFocusDatePicker(false);
  }, [datePickerOpen]);

  /////////// TODO: Posisjonering av datepicker
  // const arrowRef = useRef<HTMLDivElement>(null);
  const bubbleSize = useSize(datepickerWrapperRef);
  const [controllerSize, setControllerSize] = useState<DOMRect>();
  // const controllerisVisible = useIsVisible(refObject, 0);

  const updateControllerSize = (): void => {
    setControllerSize(refObject.current?.getBoundingClientRect());
  };

  useInterval(updateControllerSize, 500);
  useLayoutEvent(updateControllerSize, ['scroll', 'resize'], 10);

  React.useEffect(() => {
    updateControllerSize();
  }, []);

  // const verticalPosition = controllerSize && bubbleSize && getVerticalPosition(controllerSize, bubbleSize);
  // const arrowClasses = classNames(styles.popover__arrow, arrowClassName, {
  //   [styles['popover__arrow--over']]: verticalPosition === PopOverVariant.positionbelow,
  //   [styles['popover__arrow--under']]: verticalPosition === PopOverVariant.positionabove,
  // });

  const bubbleStyle = controllerSize && bubbleSize && getBubbleStyle(controllerSize, bubbleSize);
  // const arrowStyle = bubbleStyle && controllerSize && verticalPosition && getArrowStyle(bubbleStyle, controllerSize, verticalPosition);
  /////////// TODO:

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>): void => {
    if (e.key === ' ') {
      e.stopPropagation();
      setFocusDatePicker(true);
      setDatePickerOpen(true);
    }
    if (e.key === 'Escape') {
      setDatePickerOpen(false);
    }
  };

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

  const handleSingleDatePickerSelect: SelectSingleEventHandler = (
    date: Date | undefined,
    selectedDay: Date,
    activeModifiers: ActiveModifiers,
    e: React.MouseEvent
  ): void => {
    setDateState(date);

    if (refObject.current) {
      setInputValue(date ? format(date, dateFormat) : '');
      setDatePickerOpen(false);
      refObject.current.focus();
    }
  };

  const datePickerClassNames = {
    ...reactdaypickerstyles,
    ...styles,
  };

  return (
    <div data-testid={testId}>
      <span className={styles['input-wrapper']}>
        <Input
          error={error}
          errorText={errorText}
          label={label}
          onClick={(): void => setDatePickerOpen(true)}
          onKeyDown={handleKeyDown}
          type="text"
          iconRight
          icon={Calendar}
          ref={mergedRefs}
          value={inputValue}
          width={8}
          {...rest}
          onChange={handleInputChange}
        />
      </span>
      <div className={styles['datepicker-wrapper']} ref={datepickerWrapperRef} style={bubbleStyle}>
        {datePickerOpen && (
          <DayPicker
            /* captionLayout="dropdown"
          fromYear={2015}
          toYear={2025} */
            initialFocus={focusDatePicker}
            fromDate={new Date()}
            month={month}
            mode="single"
            selected={dateState}
            onSelect={handleSingleDatePickerSelect}
            onMonthChange={setMonth}
            classNames={datePickerClassNames}
            modifiersClassNames={{ today: styles['day--today'], selected: styles['day_selected'], disabled: styles['day--disabled'] }}
          />
        )}
      </div>
    </div>
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
