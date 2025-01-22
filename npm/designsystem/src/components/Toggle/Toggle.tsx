import React, { useState, useEffect } from 'react';

import classNames from 'classnames';
import { useAnimate } from 'motion/react';

import { AnalyticsId } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { useUuid } from '../../hooks/useUuid';

import styles from './styles.module.scss';
import '../../scss/supernova/styles/colors.css';

export type LabelText = {
  text: string;
  type?: 'subdued' | 'normal';
};

export enum TogglePosition {
  left = 'left',
  right = 'right',
}

export enum ToggleOnColor {
  onwhite = 'onwhite',
  onneutral = 'onneutral',
  onblueberry = 'onblueberry',
}

export interface ToggleProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**  Determines if the Toggle is checked */
  checked?: boolean;
  /** Sets the label of the Toggle */
  label: LabelText[];
  /** Defines the color of the toggle */
  onColor?: keyof typeof ToggleOnColor;
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
  subLabel,
  togglePosition = TogglePosition.left,
  testId,
}: ToggleProps) => {
  const [checkedState, setCheckedState] = useState(checked);
  const [showToggleAnimation, setShowToggleAnimation] = useState(false);
  const [scope, animate] = useAnimate();
  const inputId = useUuid();
  const toggleId = useUuid();
  const toggleDotId = useUuid();
  const labelId = useUuid();
  const subLabelId = useUuid();
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
    animate('#' + toggleId, { background: getBackgroundColor() }, { duration: 0.2, ease: 'easeInOut' });
    animate(
      '#' + toggleDotId,
      { background: checkedState ? 'var(--color-action-graphics-ondark)' : 'var(--core-color-neutral-700)' },
      { duration: 0.2, ease: 'easeInOut' }
    );
    animate('#' + toggleDotId, { x: showHoveredStyling ? 9 : checkedState ? 18 : 0 }, { duration: 0.2, ease: 'easeInOut' });
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

  const toggleContainerClassNames = classNames(styles['toggle-container']);

  const toggleRowClassNames = classNames(styles['toggle-container__row'], {
    [styles['toggle-container__row--right']]: togglePosition === TogglePosition.right,
  });

  const subLabelClassNames = classNames(styles['toggle-container__sublabel'], {
    [styles['toggle-container__sublabel--toggle-right']]: togglePosition === TogglePosition.right,
  });

  const toggleClassNames = classNames(styles['toggle-container__toggle'], {
    [styles['toggle-container__toggle--ignore-hover']]: showToggleAnimation,
    [styles['toggle-container__toggle--on-white']]: onColor === ToggleOnColor.onwhite,
  });

  const toggleDotClassNames = classNames(styles['toggle-container__toggle__dot'], {
    [styles['toggle-container__toggle__dot--ignore-hover']]: showToggleAnimation,
  });

  const renderToggle = (): React.ReactElement => (
    <label ref={refObject} className={styles['toggle-container__toggle-group']}>
      <input
        id={inputId}
        type="checkbox"
        checked={checkedState}
        onChange={handleChange}
        className={styles['toggle-container__input']}
        aria-label={label.map(l => l.text).join(' ')}
        aria-describedby={subLabel ? subLabelId : undefined}
      />
      <span id={toggleId} className={toggleClassNames} aria-hidden="true">
        <span id={toggleDotId} className={toggleDotClassNames} aria-hidden="true">
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
  );

  const renderLabelText = (): React.ReactElement => {
    return (
      <span
        id={labelId}
        className={classNames(styles['toggle-container__label'], {
          [styles['toggle-container__label--toggle-right']]: togglePosition === TogglePosition.right,
        })}
      >
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
    );
  };

  return (
    <div className={toggleContainerClassNames} data-testid={testId} data-analyticsid={AnalyticsId.Toggle}>
      <div className={toggleRowClassNames}>
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
      {subLabel && (
        <div id={subLabelId} className={subLabelClassNames}>
          {subLabel}
        </div>
      )}
    </div>
  );
};

export default Toggle;
