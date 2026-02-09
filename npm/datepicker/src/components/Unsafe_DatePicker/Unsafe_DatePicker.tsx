import { cloneElement, useEffect, useRef, useState } from 'react';

import { autoUpdate, FloatingFocusManager, offset, shift, useClick, useDismiss, useFloating, useInteractions } from '@floating-ui/react';
import { format, isValid, parse } from 'date-fns';
import { nb } from 'date-fns/locale';

import ErrorWrapper from '@helsenorge/designsystem-react/components/ErrorWrapper';
import Icon from '@helsenorge/designsystem-react/components/Icon';
import Calendar from '@helsenorge/designsystem-react/components/Icons/Calendar';
import Label, { LabelProps } from '@helsenorge/designsystem-react/components/Label';
import { isComponent } from '@helsenorge/designsystem-react/utils/component';
import { useLanguage } from '@helsenorge/designsystem-react/utils/language';
import { mergeRefs } from '@helsenorge/designsystem-react/utils/refs';

import { IconSize, KeyboardEventKey, LanguageLocales, useKeyboardEvent, useOutsideEvent, useToggle } from '@helsenorge/designsystem-react';

import BaseDayPicker, { BaseDayPickerProps } from './BaseDayPicker/BaseDayPicker';
import DateInputInternal from './DateInputInternal';
import { getResources } from './resourceHelper';
import { HNDesignsystemUnsafe_DatePicker } from '../../resources/Resources';

import styles from './DatePicker.module.scss';

export interface Unsafe_DatePickerProps extends Omit<BaseDayPickerProps, 'selectedDate' | 'onDateChange'> {
  /** Currently given date with type Date */
  value?: Date;
  /** Callback for change on the given date */
  onChange?: (value: Date | undefined) => void;
  /** Callback for bluring the input field */
  onBlur?: (value: Date | undefined) => void;
  /** Label of the input */
  label?: React.ReactNode;
  /** Id of the input field, for connecting labels */
  id?: string;
  /** Error text for the input field */
  errorText?: string;
  /** Wether or not to shw a clear button when there is content in the input */
  withClearButton?: boolean;
  /** Sets aria-describedby on the input, for connecting labels */
  ['aria-describedby']?: string;
  /** Sets aria-labelledby on the input, for connecting labels */
  ['aria-labelledby']?: string;
}

const Unsafe_DatePicker = ({
  value,
  onChange,
  onBlur,
  label,
  id,
  errorText,
  withClearButton = true,
  ['aria-describedby']: ariaDescribedBy,
  ['aria-labelledby']: ariaLabelledBy,
  resources,
  ...baseDayPickerProps
}: Unsafe_DatePickerProps): JSX.Element => {
  const dateToString = (date: Date | undefined): string => {
    if (!isValid(date) || !date) {
      return '';
    }
    return format(date, 'P', { locale: nb });
  };
  const [dateString, setDateString] = useState<string>(dateToString(value) || '');
  const [dateDate, setDateDate] = useState<Date | undefined>(value || undefined);
  const [softErrorText, setSoftErrorText] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const calendarButtonRef = useRef<HTMLButtonElement>(null);
  const internalChangeRef = useRef(false);

  // Sync external value changes to internal state
  useEffect(() => {
    if (!internalChangeRef.current) {
      setDateString(dateToString(value) || '');
      setDateDate(value || undefined);
    }
    internalChangeRef.current = false;
  }, [value]);

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemUnsafe_DatePicker = {
    ...defaultResources,
    ...resources,
  };

  const { value: isPopupOpen, toggleValue: toggleIsPopupOpen } = useToggle(false);
  const { refs, floatingStyles, context, middlewareData } = useFloating({
    placement: 'bottom-start',
    middleware: [offset(8), shift({ mainAxis: false, padding: 8 })],
    whileElementsMounted: autoUpdate,
    elements: {
      reference: containerRef.current,
    },
  });
  const dayPickerPopupRef = useRef<HTMLDivElement>(null);
  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getFloatingProps } = useInteractions([click, dismiss]);
  const isVisible = isPopupOpen && !middlewareData.hide?.referenceHidden;

  const setFocusToCalendarButton = (): void => {
    calendarButtonRef.current?.focus();
  };

  const handleDayPickerSelect = (date: Date | undefined): void => {
    internalChangeRef.current = true;
    if (!date) {
      setDateString('');
      setDateDate(undefined);
      if (onChange) {
        onChange(undefined);
      }
    } else {
      setDateDate(date);
      const formattedDate = format(date, 'P', { locale: nb });
      setDateString(formattedDate);
      if (onChange) {
        onChange(date);
      }
      if (isPopupOpen) {
        toggleIsPopupOpen();
      }
      setFocusToCalendarButton();
    }
  };

  const handleEscapeKeyDown = (): void => {
    if (isPopupOpen) {
      toggleIsPopupOpen();
      setFocusToCalendarButton();
    }
  };
  useKeyboardEvent(dayPickerPopupRef, handleEscapeKeyDown, [KeyboardEventKey.Escape]);
  useKeyboardEvent(calendarButtonRef, handleEscapeKeyDown, [KeyboardEventKey.Escape]);

  useOutsideEvent(
    [calendarButtonRef, dayPickerPopupRef],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      if (
        calendarButtonRef.current &&
        dayPickerPopupRef.current &&
        !e?.composedPath().includes(calendarButtonRef.current) &&
        !e?.composedPath().includes(dayPickerPopupRef.current)
      ) {
        if (isPopupOpen) {
          toggleIsPopupOpen();
        }
      }
    },
    ['mousedown', 'focusin', 'blur']
  );

  const handleInputChange = (date: string): void => {
    internalChangeRef.current = true;
    setDateString(date);

    const parsedDate = parse(date, 'P', new Date(), { locale: nb });

    if (isValid(parsedDate)) {
      setDateDate(parsedDate);
      if (onChange) {
        onChange(parsedDate);
      }
    } else {
      setDateDate(undefined);
      if (onChange) {
        onChange(undefined);
      }
    }
  };
  const handleBlur = (date: string): void => {
    const parsedDate = parse(date, 'P', new Date(), { locale: nb });

    if (isValid(parsedDate)) {
      if (onBlur) {
        onBlur(parsedDate);
      }
    } else {
      if (onBlur) {
        onBlur(undefined);
      }
    }
  };

  const labelGivenAsPropIsValidLabelComponent = isComponent<LabelProps>(label, Label);
  const legend =
    label && labelGivenAsPropIsValidLabelComponent
      ? cloneElement(label, { htmlMarkup: 'legend', labelId: label.props.labelId || 'date-legend' })
      : null;
  const legendId = labelGivenAsPropIsValidLabelComponent && label.props.labelId ? label.props.labelId : 'date-legend';
  const popupId = 'calendar-popup';

  return (
    <ErrorWrapper errorText={errorText}>
      <fieldset className={styles['date-field']} aria-labelledby={legendId}>
        {legend}
        <div ref={containerRef}>
          <DateInputInternal
            inputId={id}
            aria-describedby={ariaDescribedBy}
            aria-labelledby={ariaLabelledBy}
            value={dateString}
            onChange={handleInputChange}
            onBlur={handleBlur}
            legendId={legendId}
            setErrorText={setSoftErrorText}
            withClearButton={withClearButton}
            resources={mergedResources}
          />
          <button
            type="button"
            ref={calendarButtonRef}
            onClick={toggleIsPopupOpen}
            aria-label={mergedResources.calendarButtonAriaLabel}
            aria-controls={popupId}
            aria-expanded={isPopupOpen}
            className={styles['calendar-button']}
          >
            <Icon svgIcon={Calendar} size={IconSize.XSmall} />
          </button>
        </div>
        <div className={styles['date-field__soft-error-text']} role="status">
          {softErrorText}
        </div>
      </fieldset>
      {isPopupOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            id={popupId}
            ref={mergeRefs([refs.setFloating, dayPickerPopupRef])}
            style={{ ...floatingStyles, visibility: isVisible ? 'visible' : 'hidden', zIndex: 10000 }}
            {...getFloatingProps()}
          >
            <BaseDayPicker
              {...baseDayPickerProps}
              resources={mergedResources}
              selectedDate={dateDate}
              onDateChange={handleDayPickerSelect}
            />
          </div>
        </FloatingFocusManager>
      )}
    </ErrorWrapper>
  );
};

Unsafe_DatePicker.displayName = 'DateInput';

export default Unsafe_DatePicker;
