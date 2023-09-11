import React, { useState } from 'react';

import { format } from 'date-fns';
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

export type dateFormats = 'dd/MM/yyyy';

interface DatePickerProps
  extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'defaultValue' | 'value' | 'aria-describedby'> {
  /** Sets the date of the component */
  dateFormat?: dateFormats;
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
  /** callback that is triggered when field loses focus */
  onDateBlur?: (date?: Date | null) => void;
  /** onChange callback that is triggered on date changes */
  onDateChange?: (date?: Date | null) => void;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const DatePicker = React.forwardRef((props: DatePickerProps, ref: React.Ref<HTMLInputElement>) => {
  const { dateFormat = 'dd/MM/yyyy', dateValue, defaultMonth, error, errorText, label, onDateBlur, onDateChange, testId, ...rest } = props;

  const [dateState, setDateState] = useState<Date | undefined>(dateValue);
  const [month, setMonth] = useState<Date | undefined>(defaultMonth);
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);

  const datepickerWrapperRef = React.useRef<HTMLDivElement>(null);
  const { refObject } = usePseudoClasses<HTMLInputElement>(isMutableRefObject(ref) ? ref : null);
  const mergedRefs = mergeRefs([ref, refObject]);
  useOutsideEvent(datepickerWrapperRef, () => setDatePickerOpen(false));

  ///////////
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
  ///////////

  React.useEffect(() => {
    if (!datePickerOpen && onDateBlur) {
      onDateBlur(dateState);
    }
  }, [datePickerOpen]);

  React.useEffect(() => {
    if (refObject.current) {
      const event = new Event('change', { bubbles: true });
      refObject.current.dispatchEvent(event);
    }
  }, [dateState]);

  const onChangeHandler: SelectSingleEventHandler = (
    date: Date | undefined,
    selectedDay: Date,
    activeModifiers: ActiveModifiers,
    e: React.MouseEvent
  ): void => {
    setDateState(date);

    if (refObject.current) {
      date && (refObject.current.value = format(date, dateFormat));
    }

    setDatePickerOpen(false);
    onDateChange && onDateChange(date);
  };

  const datePickerClassNames = {
    ...reactdaypickerstyles,
    ...styles,
  };

  const customInput = (
    <Input
      defaultValue={dateState ? format(dateState, dateFormat) : ''}
      label={label}
      onClick={e => setDatePickerOpen(true)}
      onKeyDown={e => setDatePickerOpen(true)}
      type="text"
      width={8}
      iconRight
      icon={Calendar}
      ref={mergedRefs}
      error={error}
      errorText={errorText}
      {...rest}
    />
  );

  return (
    <div data-testid={testId}>
      {customInput}
      <div className={styles['datepicker-wrapper']} ref={datepickerWrapperRef} style={bubbleStyle}>
        {datePickerOpen && (
          <DayPicker
            /* captionLayout="dropdown"
            fromYear={2015}
            toYear={2025} */
            initialFocus
            fromDate={new Date()}
            month={month}
            mode="single"
            selected={dateState}
            onSelect={onChangeHandler}
            onMonthChange={setMonth}
            classNames={datePickerClassNames}
            modifiersClassNames={{ today: styles['day--today'], selected: styles['day_selected'], disabled: styles['day--disabled'] }}
            {...rest}
          />
        )}
      </div>
    </div>
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
