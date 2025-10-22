import React, { useId, useLayoutEffect, useRef } from 'react';

import classNames from 'classnames';

import Close from './Close';
import Triangle from './Triangle';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { getAriaDescribedBy } from '../../utils/accessibility';

import styles from './styles.module.scss';

export interface StickyNoteProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Aria label for the delete/close button */
  arialabelXButton: string;
  /** Activates the error styling */
  error?: boolean;
  /** Error text to show below the note */
  errorText?: string;
  /** Error text id */
  errorTextId?: string;
  /** Text shown under the textarea  */
  footerText?: string;
  /** Function run when clicking the delete/close button */
  onXButtonClick?: () => void;
  /** Function run if user clicks the component while it is disabled */
  onClickWhileDisabled?: () => void;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Timestamp shown over the textarea  */
  timestamp: string;
  /** Classname for the outer wrapper */
  wrapperClassName?: string;
}

const StickyNote: React.FC<StickyNoteProps> = (props: StickyNoteProps) => {
  const {
    wrapperClassName,
    timestamp,
    onXButtonClick,
    arialabelXButton,
    footerText,
    error,
    errorText,
    onClickWhileDisabled,
    testId,
    ...textareaProps
  } = props;
  const errorTextIdFallback = useId();
  const errorTextId = props.errorTextId || errorTextIdFallback;
  const stickynoteRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { isFocused: isTextareaFocused } = usePseudoClasses<HTMLTextAreaElement>(textareaRef);
  const { isHovered, isActive } = usePseudoClasses<HTMLDivElement>(stickynoteRef);

  const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>): void => {
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }
    if (textareaProps.disabled) {
      if (onClickWhileDisabled) onClickWhileDisabled();
      return;
    }
    textareaRef.current?.focus();
  };

  const resizeTextarea = (): void => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    resizeTarget(textarea);
  };

  const resizeTarget = (target: HTMLTextAreaElement): void => {
    // Reset field height
    target.style.height = 'inherit';
    // Set new height
    target.style.height = `${target.scrollHeight}px`;
  };

  useLayoutEffect(() => {
    resizeTextarea();
    // Must run after the shadow DOM has been set up to work on microweb
    setTimeout(() => resizeTextarea(), 1000);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const textarea = e.target as HTMLTextAreaElement;
    resizeTarget(textarea);
    if (textareaProps.onChange) textareaProps.onChange(e);
  };

  return (
    <div>
      <div
        data-testid={testId}
        ref={stickynoteRef}
        className={classNames(styles['sticky-note'], wrapperClassName, {
          [styles['sticky-note--focused']]: isTextareaFocused,
          [styles['sticky-note--active']]: isActive,
          [styles['sticky-note--hovered']]: isHovered && !isTextareaFocused && !textareaProps.disabled,
          [styles['sticky-note--error']]: error,
        })}
        onClick={handleWrapperClick}
        role="textbox"
        tabIndex={-1}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleWrapperClick(e as React.KeyboardEvent<HTMLDivElement>);
          }
        }}
      >
        <div className={classNames(styles['sticky-note__header'])}>
          {timestamp && <span className={styles['sticky-note__header__timestamp']}>{timestamp}</span>}
        </div>
        <textarea
          ref={textareaRef}
          data-testid={`${testId}-textarea`}
          className={classNames(styles['sticky-note__textarea'], textareaProps.className)}
          {...textareaProps}
          onChange={handleChange}
          aria-describedby={getAriaDescribedBy(props, errorTextId)}
        />
        <Close onClick={onXButtonClick} ariaLabel={arialabelXButton} testId="closeButton" />
        <div className={classNames(styles['sticky-note__footer'])}>{footerText && <span>{footerText}</span>}</div>
        <div className={classNames(styles['sticky-note__triangle'])}>
          <Triangle isHover={isHovered} isActive={isActive} isFocus={isTextareaFocused} isError={!!error} />
        </div>
      </div>
      {error && (
        <p className={styles['sticky-note__error-text']} id={errorTextId}>
          {errorText}
        </p>
      )}
    </div>
  );
};

export default StickyNote;
