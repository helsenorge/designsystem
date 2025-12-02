import { useRef, useState } from 'react';

import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  hide,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { format, isValid, parse } from 'date-fns';

import Icon from '@helsenorge/designsystem-react/components/Icon';
import Calendar from '@helsenorge/designsystem-react/components/Icons/Calendar';
import X from '@helsenorge/designsystem-react/components/Icons/X';
import Input from '@helsenorge/designsystem-react/components/Input';

import { IconSize, useOutsideEvent, useToggle, ZIndex } from '@helsenorge/designsystem-react';

import BaseDayPicker, { BaseDayPickerProps } from './BaseDayPicker';

import customstyles from './clean.module.scss';
export interface DatePickerWithInputProps extends BaseDayPickerProps {
  /** sets input disabled */
  disabled?: boolean;
  /** @todo: denne bør være required når man bruker input men ikke for standalone */
  label?: React.ReactNode;
  /** @todo: gjør ferdig denne funksjonaliteten */
  /** Shows a clear button if input field has content */
  withClearButton?: boolean;
}

const DatePickerWithInput = (props: DatePickerWithInputProps): React.ReactNode => {
  const { disabled, label, locale, withClearButton, ...baseProps } = props;

  // from https://daypicker.dev/guides/input-fields
  // Hold the selected date in state
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(baseProps.selectedDate);

  // Hold the input value in state
  const [inputValue, setInputValue] = useState('');

  const handleDayPickerSelect = (date: Date | undefined) => {
    if (!date) {
      setInputValue('');
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setInputValue(format(date, 'P', { locale: locale }));
      if (isPopupOpen) toggleIsPopupOpen();
    }
  };

  // @todo: hva skjer om skrevet dato ikke har riktig format ift locale ?

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Keep the input value in sync

    const parsedDate = parse(e.target.value, 'P', new Date(), { locale: locale });

    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };

  const controllerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const calendarButtonRef = useRef<HTMLButtonElement>(null);
  const { value: isPopupOpen, toggleValue: toggleIsPopupOpen } = useToggle(false);
  const { refs, floatingStyles, context, middlewareData } = useFloating({
    placement: 'bottom-start',
    // todo: sjekk om vi skal tillate at den kan legge seg over inputfeltet
    middleware: [offset(8), flip({ mainAxis: true, crossAxis: false }), shift({ mainAxis: true, padding: 8 }), hide()],
    whileElementsMounted: autoUpdate,
    elements: {
      reference: controllerRef.current, // @todo: legg til popup for å ikke lukke seg om input blir borte
    },
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getFloatingProps } = useInteractions([click, dismiss]);
  const isVisible = isPopupOpen && !middlewareData.hide?.referenceHidden;

  const setFocusOnInput = (): void => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  };

  // @todo: ser ut som default oppførsel er at inputfelt fokuseres, kanskje bedre enn at vi overstyrer?
  // const setFocusOnCalendarButton = (): void => {
  //   if (calendarButtonRef.current) {
  //     calendarButtonRef.current?.focus();
  //   }
  // };

  const handleClear = (): void => {
    handleDayPickerSelect(undefined);
    setFocusOnInput();
  };

  /* eslint-disable @typescript-eslint/no-explicit-any */
  useOutsideEvent(
    [calendarButtonRef, refs.floating],
    (e: any) => {
      if (
        calendarButtonRef.current &&
        refs.floating.current &&
        !e?.composedPath().includes(calendarButtonRef.current) &&
        !e?.composedPath().includes(refs.floating.current)
      ) {
        if (isPopupOpen) toggleIsPopupOpen();
      }
    },
    ['mousedown', 'focusin', 'blur']
  );
  /* eslint-enable @typescript-eslint/no-explicit-any */

  /** @todo */
  const hasValue = !!inputValue;

  return (
    <>
      <div ref={controllerRef}>
        <Input
          disabled={disabled}
          label={label}
          value={inputValue}
          onChange={handleInputChange}
          width={14}
          ref={inputRef}
          rightOfInput={
            <>
              {withClearButton && hasValue && (
                <button onClick={handleClear} disabled={disabled} className={customstyles['clear-button']} aria-label="Clear input">
                  <Icon svgIcon={X} size={IconSize.XXSmall} />
                </button>
              )}
              <button
                ref={calendarButtonRef}
                onClick={toggleIsPopupOpen}
                disabled={disabled}
                aria-label="Open datepicker"
                className={customstyles['calendar-button']}
              >
                <Icon svgIcon={Calendar} size={IconSize.XSmall} />
              </button>
            </>
          }
        />
      </div>
      {isPopupOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={{ ...floatingStyles, visibility: isVisible ? 'visible' : 'hidden', zIndex: ZIndex.PopOver }}
            {...getFloatingProps()}
          >
            {/* @todo fix props */}
            <BaseDayPicker {...baseProps} locale={locale} selectedDate={selectedDate} onDateChange={handleDayPickerSelect} />
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};

export default DatePickerWithInput;
