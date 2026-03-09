import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import type { HNDesignsystemUnsafe_DatePicker } from '../../resources/Resources';

import Icon, { IconSize } from '@helsenorge/designsystem-react/components/Icon';
import X from '@helsenorge/designsystem-react/components/Icons/X';

import { KeyboardEventKey, useKeyboardEvent } from '@helsenorge/designsystem-react';

import styles from './DatePicker.module.scss';

export interface DateInputInternalProps {
  /** Currently given date, in norwegian format dd.mm.yyyy */
  value?: string;
  /** Callback for change in date */
  onChange?: (value: string) => void;
  /** Callback for blur on input field */
  onBlur?: (value: string) => void;
  /** Id for legend, for connecting legend to input */
  legendId: string;
  /** Callback for setting error text when validating */
  setErrorText?: (text: string) => void;
  /** Wether or not to shw a clear button when there is content in the input */
  withClearButton?: boolean;
  /** Resources for component */
  resources?: Partial<HNDesignsystemUnsafe_DatePicker>;
  /** Sets aria-describedby on the input, for connecting labels */
  ['aria-describedby']?: string;
  /** Sets aria-labelledby on the input, for connecting labels */
  ['aria-labelledby']?: string;
  /** Id for input, for connecting labels */
  inputId?: string;
}

const DateInputInternal = ({
  value,
  onChange,
  onBlur,
  inputId,
  legendId,
  setErrorText,
  resources,
  withClearButton,
  ['aria-describedby']: ariaDescribedBy,
  ['aria-labelledby']: ariaLabelledBy,
}: DateInputInternalProps) => {
  const [errorTextDd, setErrorTextDd] = useState('');
  const [errorTextMm, setErrorTextMm] = useState('');
  const [errorTextYyyy, setErrorTextYyyy] = useState('');
  const [dd, setDd] = useState('');
  const [mm, setMm] = useState('');
  const [yyyy, setYyyy] = useState('');
  const hasValue = dd !== '' || mm !== '' || yyyy !== '';
  const ddRef = useRef<HTMLInputElement>(null);
  const mmRef = useRef<HTMLInputElement>(null);
  const yyyyRef = useRef<HTMLInputElement>(null);
  const inputRefs = [ddRef, mmRef, yyyyRef];
  const clearButtonRef = useRef<HTMLButtonElement>(null);
  const [isClearButtonFocused, setIsClearButtonFocused] = useState(false);

  const combinedValue = `${dd}.${mm}.${yyyy}`;

  useEffect(() => {
    if (onChange) {
      onChange(combinedValue);
    }
  }, [combinedValue]);

  type ValidateSegmentOptions = {
    segment: string;
    length: number;
    minValue: number;
    maxValue: number;
    errorTextSetter: (message: string) => void;
    errorMessage: string;
  };

  const validateSegment = ({ segment, length, minValue, maxValue, errorTextSetter, errorMessage }: ValidateSegmentOptions): boolean => {
    if (segment === '') {
      errorTextSetter('');
      return true;
    }
    if (new RegExp(`^\\d{0,${length}}$`).test(segment)) {
      if (length === 2 && segment === '00') {
        errorTextSetter(errorMessage);
        return false;
      }
      const parsedSegment = parseInt(segment, 10);
      if (parsedSegment < minValue || parsedSegment > maxValue) {
        errorTextSetter(errorMessage);
        return false;
      } else {
        errorTextSetter('');
        return true;
      }
    } else {
      errorTextSetter(errorMessage);
      return false;
    }
  };

  const handleDdChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newDd = e.target.value;
    setDd(newDd);
    if (
      validateSegment({
        segment: newDd,
        length: 2,
        minValue: 0,
        maxValue: 31,
        errorTextSetter: setErrorTextDd,
        errorMessage: resources?.validateDefaultMessageDay || 'Dag må være et tall mellom 01 og 31',
      })
    ) {
      if (newDd.length === 2) {
        mmRef.current?.focus();
      }
    }
  };

  const handleMmChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newMm = e.target.value;
    setMm(newMm);
    if (
      validateSegment({
        segment: newMm,
        length: 2,
        minValue: 0,
        maxValue: 12,
        errorTextSetter: setErrorTextMm,
        errorMessage: resources?.validateDefaultMessageMonth || 'Måned må være et tall mellom 01 og 12',
      })
    ) {
      if (newMm.length === 2) {
        yyyyRef.current?.focus();
      }
    }
  };

  const handleYyyyChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newYyyy = e.target.value;
    setYyyy(newYyyy);
    validateSegment({
      segment: newYyyy,
      length: 4,
      minValue: 0,
      maxValue: 9999,
      errorTextSetter: setErrorTextYyyy,
      errorMessage: resources?.validateDefaultMessageYear || 'År må være et tall med 4 siffer',
    });
  };

  const validateAllSegments = (latestDd?: string, latestMm?: string, latestYyyy?: string): void => {
    validateSegment({
      segment: latestDd ?? dd,
      length: 2,
      minValue: 0,
      maxValue: 31,
      errorTextSetter: setErrorTextDd,
      errorMessage: resources?.validateDefaultMessageDay || 'Dag må være et tall mellom 01 og 31',
    });
    validateSegment({
      segment: latestMm ?? mm,
      length: 2,
      minValue: 0,
      maxValue: 12,
      errorTextSetter: setErrorTextMm,
      errorMessage: resources?.validateDefaultMessageMonth || 'Måned må være et tall mellom 01 og 12',
    });
    validateSegment({
      segment: latestYyyy ?? yyyy,
      length: 4,
      minValue: 0,
      maxValue: 9999,
      errorTextSetter: setErrorTextYyyy,
      errorMessage: resources?.validateDefaultMessageYear || 'År må være et tall med 4 siffer',
    });
  };

  // ved fokus flytt til nytt input felt kjør valideringsfunksjoner på nytt
  const handleBlurOnSegment = (): void => {
    validateAllSegments();
  };

  useEffect(() => {
    if (!value || value === '') {
      return;
    }
    const match = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/); // norsk format dd.mm.yyyy
    if (match) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, newDd, newMm, newYyyy] = match;
      if (dd !== newDd) {
        setDd(newDd);
      }
      if (mm !== newMm) {
        setMm(newMm);
      }
      if (yyyy !== newYyyy) {
        setYyyy(newYyyy);
      }
      // kjør valideringsfunksjoner på nytt med nyeste verdier fra value
      validateAllSegments(newDd, newMm, newYyyy);
    }
  }, [value]);

  useEffect(() => {
    const combinedErrors = [errorTextDd, errorTextMm, errorTextYyyy].filter(err => err !== '').join('. ');
    if (setErrorText) {
      setErrorText(combinedErrors);
    }
  }, [errorTextDd, errorTextMm, errorTextYyyy]);

  const segmentClass = styles['date-segment'];
  const errorClass = styles['date-segment--error'];
  const daySegmentClassNames = classNames(segmentClass, errorTextDd && errorClass);
  const monthSegmentClassNames = classNames(segmentClass, errorTextMm && errorClass);
  const yearSegmentClassNames = classNames(segmentClass, errorTextYyyy && errorClass, styles['date-segment--year']);

  const handleGroupBlur = (): void => {
    /* Må bruke timeout for å vente til event loopen på document blir ferdig slik at activeElement rekker å bli oppdatert */
    setTimeout(() => {
      if (!inputRefs.some(ref => ref.current && ref.current === document.activeElement)) {
        onBlur?.(combinedValue);
      }
    }, 0);
  };

  const handleGroupClick = (): void => {
    /* Hvis man klikker innenfor gruppen men ikke på et av input-feltene, sett fokus til siste innfylte felt */
    if (
      ddRef.current &&
      document.activeElement !== ddRef.current &&
      mmRef.current &&
      document.activeElement !== mmRef.current &&
      yyyyRef.current &&
      document.activeElement !== yyyyRef.current &&
      document.activeElement !== clearButtonRef.current
    ) {
      if (dd === '') {
        ddRef.current.focus();
      } else if (mm === '') {
        mmRef.current.focus();
      } else {
        yyyyRef.current.focus();
      }
    }
  };

  const handleClear = (): void => {
    setDd('');
    setMm('');
    setYyyy('');
    setErrorTextDd('');
    setErrorTextMm('');
    setErrorTextYyyy('');
    if (onChange) {
      onChange('');
    }
    ddRef.current?.focus();
  };

  const moveFocusLeft = (): void => {
    const activeElement = document.activeElement as HTMLInputElement | null;
    if (!activeElement) {
      return;
    }

    if (mmRef.current === activeElement) {
      if (activeElement.selectionStart === 0 && activeElement.selectionEnd === 0) {
        setTimeout(() => {
          ddRef.current?.focus();
        }, 0);
      }
    } else if (yyyyRef.current === activeElement) {
      if (activeElement.selectionStart === 0 && activeElement.selectionEnd === 0) {
        setTimeout(() => {
          mmRef.current?.focus();
        }, 0);
      }
    }
  };

  const moveFocusRight = (): void => {
    const activeElement = document.activeElement as HTMLInputElement | null;
    if (!activeElement) {
      return;
    }

    if (mmRef.current === activeElement) {
      if (activeElement.selectionStart === activeElement.value.length && activeElement.selectionEnd === activeElement.value.length) {
        setTimeout(() => {
          yyyyRef.current?.focus();
        }, 0);
      }
    } else if (ddRef.current === activeElement) {
      if (activeElement.selectionStart === activeElement.value.length && activeElement.selectionEnd === activeElement.value.length) {
        setTimeout(() => {
          mmRef.current?.focus();
        }, 0);
      }
    }
  };

  const moveFocusOnBackspaceInEmptyField = (): void => {
    if (yyyyRef.current === document.activeElement && yyyy === '') {
      setTimeout(() => {
        mmRef.current?.focus();
      }, 0);
    } else if (mmRef.current === document.activeElement && mm === '') {
      setTimeout(() => {
        ddRef.current?.focus();
      }, 0);
    }
  };
  useKeyboardEvent(yyyyRef, moveFocusOnBackspaceInEmptyField, [KeyboardEventKey.Backspace]);
  useKeyboardEvent(mmRef, moveFocusOnBackspaceInEmptyField, [KeyboardEventKey.Backspace]);
  useKeyboardEvent(mmRef, moveFocusLeft, [KeyboardEventKey.ArrowLeft]);
  useKeyboardEvent(yyyyRef, moveFocusLeft, [KeyboardEventKey.ArrowLeft]);
  useKeyboardEvent(ddRef, moveFocusRight, [KeyboardEventKey.ArrowRight]);
  useKeyboardEvent(mmRef, moveFocusRight, [KeyboardEventKey.ArrowRight]);

  return (
    <>
      <div
        role="group"
        className={classNames(styles['date-picker'], {
          [styles['date-picker--with-clear-button']]: withClearButton,
          [styles['date-picker--clear-button-focused']]: isClearButtonFocused,
        })}
        id={inputId}
        aria-labelledby={ariaLabelledBy ?? legendId}
        aria-describedby={ariaDescribedBy}
        onBlurCapture={handleGroupBlur}
        onClickCapture={handleGroupClick}
      >
        <span className={styles['date-picker__inputs']}>
          <input
            ref={ddRef}
            type="text"
            enterKeyHint="next"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={2}
            value={dd}
            onChange={handleDdChange}
            onBlur={handleBlurOnSegment}
            placeholder={resources?.dayFormatPlaceholder || 'dd'}
            aria-label={resources?.ariaLabelInputDay || 'Dag'}
            className={daySegmentClassNames}
          />
          <span aria-hidden={true}>{'.'}</span>
          <input
            ref={mmRef}
            type="text"
            enterKeyHint="next"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={2}
            value={mm}
            onChange={handleMmChange}
            onBlur={handleBlurOnSegment}
            placeholder={resources?.monthFormatPlaceholder || 'mm'}
            aria-label={resources?.ariaLabelInputMonth || 'Måned'}
            className={monthSegmentClassNames}
          />
          <span aria-hidden={true}>{'.'}</span>
          <input
            ref={yyyyRef}
            type="text"
            enterKeyHint="next"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={4}
            value={yyyy}
            onChange={handleYyyyChange}
            onBlur={handleBlurOnSegment}
            placeholder={resources?.yearFormatPlaceholder || 'åååå'}
            aria-label={resources?.ariaLabelInputYear || 'År'}
            className={yearSegmentClassNames}
          />
        </span>
        {withClearButton &&
          (hasValue ? (
            <button
              type="button"
              onClick={handleClear}
              onFocus={() => setIsClearButtonFocused(true)}
              onBlur={() => setIsClearButtonFocused(false)}
              ref={clearButtonRef}
              className={styles['clear-button']}
              aria-label={resources?.clearButtonAriaLabel || 'Nullstill dato'}
            >
              <Icon svgIcon={X} size={IconSize.XXSmall} />
            </button>
          ) : (
            <div className={styles['clear-button__placeholder']} />
          ))}
      </div>
    </>
  );
};

DateInputInternal.displayName = 'DateInputInternal';

export default DateInputInternal;
