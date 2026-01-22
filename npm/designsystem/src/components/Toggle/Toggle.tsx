import React, { useState, useEffect, useId } from 'react';

import classNames from 'classnames';
import { useAnimate } from 'motion/react';

import { ToggleOnColor, TogglePosition } from './constants';
import { AnalyticsId } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';

import styles from './styles.module.scss';

import '../../scss/supernova/styles/colors.css';

export type LabelText = {
  text: string;
  type?: 'subdued' | 'normal';
};

export type StatusTextType = {
  checked: string;
  unchecked: string;
};

export interface ToggleProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**  Determines if the Toggle is checked */
  checked?: boolean;
  /** Sets the label of the Toggle */
  label: LabelText[];
  /** Defines the color of the toggle */
  onColor?: keyof typeof ToggleOnColor;
  /** A text that is shown under the Toggle switch */
  statusText?: StatusTextType;
  /** Sets the sublabel of the Toggle */
  subLabel?: string;
  /** Sets the position of the toggle relative to the label */
  togglePosition?: keyof typeof TogglePosition;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  checked = false,
  label,
  onChange,
  onColor = ToggleOnColor.onwhite,
  statusText,
  subLabel,
  togglePosition = TogglePosition.left,
  testId,
}: ToggleProps) => {
  const [checkedState, setCheckedState] = useState(checked);
  const [showToggleAnimation, setShowToggleAnimation] = useState(false);
  const [scope, animate] = useAnimate();
  const baseId = useId();
  const toggleId = 'toggle-' + baseId;
  const inputId = 'input-' + baseId;
  const labelId = 'label-' + baseId;
  const subLabelId = 'sublabel-' + baseId;
  const toggleRef = React.useRef<HTMLSpanElement>(null);
  const toggleDotRef = React.useRef<HTMLSpanElement>(null);
  const { refObject, isHovered, isActive } = usePseudoClasses<HTMLLabelElement>(scope);
  const showHoveredStyling = isHovered && !showToggleAnimation;
  const isOnWhite = onColor === ToggleOnColor.onwhite;

  useEffect(() => {
    if (showToggleAnimation) {
      const timer = setTimeout(() => setShowToggleAnimation(false), 300);
      return (): void => clearTimeout(timer);
    }
  }, [showToggleAnimation]);

  useEffect(() => {
    setCheckedState(checked);
  }, [checked]);

  useEffect(() => {
    if (!toggleRef.current || !toggleDotRef.current) return;
    animate(toggleRef.current, { background: getBackgroundColor() }, { duration: 0.2, ease: 'easeInOut' });
    animate(
      toggleDotRef.current,
      { background: checkedState ? 'var(--color-action-graphics-ondark)' : 'var(--core-color-neutral-700)' },
      { duration: 0.2, ease: 'easeInOut' }
    );
    animate(toggleDotRef.current, { x: showHoveredStyling ? 9 : checkedState ? 18 : 0 }, { duration: 0.2, ease: 'easeInOut' });
    animate('svg', { opacity: checkedState ? 1 : 0 }, { duration: 0.2, ease: 'easeInOut' });
  }, [checkedState, showHoveredStyling, isActive]);

  const getBackgroundColor = (): string => {
    if (checkedState && isActive) {
      return 'var(--core-color-blueberry-800)';
    } else if (checkedState) {
      return showHoveredStyling ? 'var(--color-action-graphics-onlight-hover)' : 'var(--color-action-graphics-onlight)';
    } else if (isOnWhite && isActive) {
      return 'var(--core-color-neutral-400)';
    } else if (isOnWhite) {
      return showHoveredStyling ? 'var(--core-color-neutral-200)' : 'var(--core-color-neutral-50)';
    } else if (isActive) {
      return 'var(--core-color-neutral-200)';
    } else {
      return showHoveredStyling ? 'var(--core-color-neutral-50)' : 'var(--core-color-white)';
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckedState(event.target.checked);
    setShowToggleAnimation(true);
    onChange?.(event);
  };

  const toggleContainerClassNames = classNames(styles['toggle-container'], {
    [styles['toggle-container--position-right']]: togglePosition === TogglePosition.right,
    [styles['toggle-container--with-status']]: statusText !== undefined && statusText !== null,
  });

  const subLabelClassNames = classNames(styles['toggle-container__sublabel']);

  const statusTextClassNames = classNames(styles['toggle-container__status'], {
    [styles['toggle-container__status--checked']]: checkedState,
  });

  const toggleClassNames = classNames(styles['toggle-container__toggle'], {
    [styles['toggle-container__toggle--ignore-hover']]: showToggleAnimation,
    [styles['toggle-container__toggle--on-white']]: onColor === ToggleOnColor.onwhite,
  });

  const toggleDotClassNames = classNames(styles['toggle-container__toggle__dot'], {
    [styles['toggle-container__toggle__dot--ignore-hover']]: showToggleAnimation,
  });

  const renderToggle = (): React.ReactElement => (
    <div className={styles['toggle-container__outer-toggle']}>
      <label ref={refObject} className={classNames(styles['toggle-container__toggle-group'])}>
        <input
          id={inputId}
          type="checkbox"
          checked={checkedState}
          onChange={handleChange}
          className={styles['toggle-container__input']}
          aria-label={label.map(l => l.text).join(' ')}
          aria-describedby={`${subLabel ? subLabelId + ' ' : undefined} ${statusText ? toggleId + '-status' : undefined}`}
          role="switch"
        />
        <span id={toggleId} ref={toggleRef} className={toggleClassNames} aria-hidden="true">
          <span ref={toggleDotRef} className={toggleDotClassNames} aria-hidden="true">
            <svg
              width="17"
              height="13"
              viewBox="0 0 17 13"
              xmlns="http://www.w3.org/2000/svg"
              className={styles['toggle-container__toggle__dot__icon']}
            >
              <path d="M15 2L6.80839 10.548L2 5.53145" fill="none" strokeWidth="3" />
            </svg>
          </span>
        </span>
      </label>
      {statusText && (
        <span className={statusTextClassNames} id={toggleId + '-status'}>
          {checkedState ? statusText.checked : statusText.unchecked}
        </span>
      )}
    </div>
  );

  const renderLabelText = (): React.ReactElement => {
    return (
      <div className={styles['toggle-container__outer-label']}>
        <span id={labelId} className={classNames(styles['toggle-container__label'])}>
          {label.map(labelText => {
            const labelClassNames = classNames({
              [styles['toggle-container__label__text--subdued']]: labelText.type === 'subdued',
            });

            return (
              <span key={labelId + labelText.text} className={labelClassNames}>
                {labelText.text}
              </span>
            );
          })}
        </span>
        {subLabel && (
          <div id={subLabelId} className={subLabelClassNames}>
            {subLabel}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={toggleContainerClassNames} data-testid={testId} data-analyticsid={AnalyticsId.Toggle}>
      {togglePosition === TogglePosition.left && (
        <>
          {renderToggle()}
          {renderLabelText()}
        </>
      )}
      {togglePosition === TogglePosition.right && (
        <>
          {renderLabelText()}
          {renderToggle()}
        </>
      )}
    </div>
  );
};

export default Toggle;
