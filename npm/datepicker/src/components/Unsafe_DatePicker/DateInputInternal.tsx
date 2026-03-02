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
    }
  }, [value]);

  const combinedValue = dd && mm && yyyy ? `${dd}.${mm}.${yyyy}` : '';

  useEffect(() => {
    if (onChange) {
      onChange(combinedValue);
    }
  }, [combinedValue]);

  const validateDd = (newDd: string): boolean => {
    if (newDd === '') {
      // tom verdi er gyldig
      setErrorTextDd('');
      return true;
    }
    if (/^\d{0,2}$/.test(newDd)) {
      const dayNum = parseInt(newDd, 10);
      if (dayNum < 0 || dayNum > 31) {
        setErrorTextDd(resources?.validateDefaultMessageDay || 'Dag må være et tall mellom 01 og 31');
        return false;
      } else {
        setErrorTextDd('');
        return true;
      }
    } else {
      setErrorTextDd(resources?.validateDefaultMessageDay || 'Dag må være et tall mellom 01 og 31');
      return false;
    }
  };

  const handleDdChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newDd = e.target.value;
    setDd(newDd);
    if (validateDd(newDd)) {
      if (newDd.length === 2) {
        mmRef.current?.focus();
      }
    }
  };

  const validateMm = (newMm: string): boolean => {
    if (newMm === '') {
      // tom verdi er gyldig
      setErrorTextMm('');
      return true;
    }
    if (/^\d{0,2}$/.test(newMm)) {
      const dayNum = parseInt(newMm, 10);
      if (dayNum < 0 || dayNum > 12) {
        setErrorTextMm(resources?.validateDefaultMessageMonth || 'Måned må være et tall mellom 01 og 12');
        return false;
      } else {
        setErrorTextMm('');
        return true;
      }
    } else {
      setErrorTextMm(resources?.validateDefaultMessageMonth || 'Måned må være et tall mellom 01 og 12');
      return false;
    }
  };

  const handleMmChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newMm = e.target.value;
    setMm(newMm);
    if (validateMm(newMm)) {
      if (newMm.length === 2) {
        yyyyRef.current?.focus();
      }
    }
  };

  const validateYyyy = (newYyyy: string, strict?: boolean): boolean => {
    if (newYyyy === '') {
      // tom verdi er gyldig
      setErrorTextYyyy('');
      return true;
    }
    if (/^\d{0,4}$/.test(newYyyy)) {
      // sjekker om det er tall
      const dayNum = parseInt(newYyyy, 10);
      let minValue = 0;
      if (strict) {
        minValue = 1000;
      }
      if (dayNum < minValue || dayNum > 9999) {
        // sjekker om det er i range
        setErrorTextYyyy(resources?.validateDefaultMessageYear || 'År må være et tall med 4 siffer');
        return false;
      } else {
        setErrorTextYyyy('');
        return true;
      }
    } else {
      setErrorTextYyyy(resources?.validateDefaultMessageYear || 'År må være et tall med 4 siffer');
      return false;
    }
  };

  const handleYyyyChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newYyyy = e.target.value;
    setYyyy(newYyyy);
    validateYyyy(newYyyy);
  };

  // ved fokus flytt til nytt input felt kjør valideringsfunksjoner på nytt
  const handleBlurOnSegment = (): void => {
    validateDd(dd);
    validateMm(mm);
    validateYyyy(yyyy, true);
  };

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
