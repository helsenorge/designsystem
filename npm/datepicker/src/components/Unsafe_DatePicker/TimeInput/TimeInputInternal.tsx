import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import type { HNDesignsystemUnsafe_DatePicker } from '../../../resources/Resources';

import Icon, { IconSize } from '@helsenorge/designsystem-react/components/Icon';
import X from '@helsenorge/designsystem-react/components/Icons/X';

import { KeyboardEventKey, useKeyboardEvent } from '@helsenorge/designsystem-react';

import styles from '../DatePicker.module.scss';

export interface TimeInputInternalProps {
  /** Currently given date, in format hh:mm */
  value?: string;
  /** Callback for change in date */
  onChange?: (value: string) => void;
  /** Callback for blur on input field */
  onBlur?: (value: string) => void;
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
  /** Id of the input field, for connecting labels */
  id?: string;
}

const TimeInputInternal = ({
  value,
  onChange,
  onBlur,
  id,
  setErrorText,
  resources,
  withClearButton,
  ['aria-describedby']: ariaDescribedBy,
  ['aria-labelledby']: ariaLabelledBy,
}: TimeInputInternalProps): React.ReactNode => {
  const [errorTextHh, setErrorTextHh] = useState('');
  const [errorTextMm, setErrorTextMm] = useState('');
  const [hh, setHh] = useState('');
  const [mm, setMm] = useState('');
  const hasValue = hh !== '' || mm !== '';
  const hhRef = useRef<HTMLInputElement>(null);
  const mmRef = useRef<HTMLInputElement>(null);
  const inputRefs = [hhRef, mmRef];
  const clearButtonRef = useRef<HTMLButtonElement>(null);
  const [isClearButtonFocused, setIsClearButtonFocused] = useState(false);

  useEffect(() => {
    if (!value || value === '') {
      return;
    }
    const match = value.match(/^(\d{2}):(\d{2})$/); // norsk format dd.mm.yyyy
    if (match) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, newDd, newMm] = match;
      if (hh !== newDd) {
        setHh(newDd);
      }
      if (mm !== newMm) {
        setMm(newMm);
      }
    }
  }, [value]);

  const combinedValue = hh && mm ? `${hh}:${mm}` : '';

  useEffect(() => {
    if (onChange) {
      onChange(combinedValue);
    }
  }, [combinedValue]);

  const validateHh = (newHh: string): boolean => {
    if (newHh === '') {
      // tom verdi er gyldig
      setErrorTextHh('');
      return true;
    }
    if (/^\d{0,2}$/.test(newHh)) {
      const hourNum = parseInt(newHh, 10);
      if (hourNum < 0 || hourNum >= 24) {
        setErrorTextHh(resources?.validateDefaultMessageHour || 'Time må være et tall mellom 00 og 23');
        return false;
      } else {
        setErrorTextHh('');
        return true;
      }
    } else {
      setErrorTextHh(resources?.validateDefaultMessageHour || 'Time må være et tall mellom 00 og 23');
      return false;
    }
  };

  const handleHhChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newHh = e.target.value;
    setHh(newHh);
    if (validateHh(newHh)) {
      if (newHh.length === 2) {
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
      const minNum = parseInt(newMm, 10);
      if (minNum < 0 || minNum >= 60) {
        setErrorTextMm(resources?.validateDefaultMessageMinute || 'Minutter må være et tall mellom 00 og 59');
        return false;
      } else {
        setErrorTextMm('');
        return true;
      }
    } else {
      setErrorTextMm(resources?.validateDefaultMessageMinute || 'Minutter må være et tall mellom 00 og 59');
      return false;
    }
  };

  const handleMmChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newMm = e.target.value;
    setMm(newMm);
    validateMm(newMm);
  };

  // ved fokus flytt til nytt input felt kjør valideringsfunksjoner på nytt
  const handleBlurOnSegment = (): void => {
    validateHh(hh);
    validateMm(mm);
  };

  useEffect(() => {
    const combinedErrors = [errorTextHh, errorTextMm].filter(err => err !== '').join('. ');
    if (setErrorText) {
      setErrorText(combinedErrors);
    }
  }, [errorTextHh, errorTextMm]);

  const segmentClass = styles['date-segment'];
  const errorClass = styles['date-segment--error'];
  const hourSegmentClassNames = classNames(segmentClass, errorTextHh && errorClass);
  const minuteSegmentClassNames = classNames(segmentClass, errorTextMm && errorClass);

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
      hhRef.current &&
      document.activeElement !== hhRef.current &&
      mmRef.current &&
      document.activeElement !== mmRef.current &&
      document.activeElement !== clearButtonRef.current
    ) {
      if (hh === '') {
        hhRef.current.focus();
      } else if (mm === '') {
        mmRef.current.focus();
      }
    }
  };

  const handleClear = (): void => {
    setHh('');
    setMm('');
    setErrorTextHh('');
    setErrorTextMm('');
    if (onChange) {
      onChange('');
    }
    hhRef.current?.focus();
  };

  const moveFocusLeft = (): void => {
    const activeElement = document.activeElement as HTMLInputElement | null;
    if (!activeElement) {
      return;
    }

    if (mmRef.current === activeElement) {
      if (activeElement.selectionStart === 0 && activeElement.selectionEnd === 0) {
        setTimeout(() => {
          hhRef.current?.focus();
        }, 0);
      }
    }
  };

  const moveFocusRight = (): void => {
    const activeElement = document.activeElement as HTMLInputElement | null;
    if (!activeElement) {
      return;
    }

    if (hhRef.current === activeElement) {
      if (activeElement.selectionStart === activeElement.value.length && activeElement.selectionEnd === activeElement.value.length) {
        setTimeout(() => {
          mmRef.current?.focus();
        }, 0);
      }
    }
  };

  const moveFocusOnBackspaceInEmptyField = (): void => {
    if (mmRef.current === document.activeElement && mm === '') {
      setTimeout(() => {
        hhRef.current?.focus();
      }, 0);
    }
  };
  useKeyboardEvent(mmRef as React.RefObject<HTMLElement>, moveFocusOnBackspaceInEmptyField, [KeyboardEventKey.Backspace]);
  useKeyboardEvent(mmRef as React.RefObject<HTMLElement>, moveFocusLeft, [KeyboardEventKey.ArrowLeft]);
  useKeyboardEvent(hhRef as React.RefObject<HTMLElement>, moveFocusRight, [KeyboardEventKey.ArrowRight]);

  return (
    <div
      role="group"
      className={classNames(styles['date-picker'], styles['date-picker--time'], {
        [styles['date-picker--time--with-clear-button']]: withClearButton,
        [styles['date-picker--clear-button-focused']]: isClearButtonFocused,
      })}
      id={id}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      onBlurCapture={handleGroupBlur}
      onClickCapture={handleGroupClick}
    >
      <span className={styles['date-picker__inputs']}>
        <input
          ref={hhRef}
          type="text"
          enterKeyHint="next"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={2}
          value={hh}
          onChange={handleHhChange}
          onBlur={handleBlurOnSegment}
          placeholder={resources?.hourFormatPlaceholder || 'tt'}
          aria-label={resources?.ariaLabelInputHour || 'Time'}
          className={hourSegmentClassNames}
        />
        <span aria-hidden={true}>{':'}</span>
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
          placeholder={resources?.minuteFormatPlaceholder || 'mm'}
          aria-label={resources?.ariaLabelInputMinute || 'Minutt'}
          className={minuteSegmentClassNames}
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
  );
};

export default TimeInputInternal;
