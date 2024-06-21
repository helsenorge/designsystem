import React, { useRef, useEffect } from 'react';

import classNames from 'classnames';

import { ZIndex } from '../../constants';
import { palette } from '../../theme/palette';

import styles from './styles.module.scss';

export enum ProgressbarSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum ProgressBarMode {
  ondark = 'ondark',
  onlight = 'onlight',
}

export enum Overlay {
  screen = 'screen',
  parent = 'parent',
}
export interface ProgressbarProps {
  /** The value of the progressbar given in percent. Value between 0 and 100 */
  value: number;
  /** Size of the progressbar. Default is large */
  size?: ProgressbarSize;
  /** Changes the visuals of the ProgressBar. Default is onLight */
  mode?: ProgressBarMode;
  /** Loader is displayed with grey background covering the entire screen */
  overlay?: keyof typeof Overlay;
  /** Aria label for the progressbar */
  ariaLabel?: string;
  /** Sets the data-testid attribute */
  testId?: string;
}

const Progressbar: React.FC<ProgressbarProps> = ({
  value,
  size = ProgressbarSize.large,
  mode = ProgressBarMode.onlight,
  overlay,
  testId,
  ariaLabel,
}: ProgressbarProps) => {
  if (overlay) {
    mode = ProgressBarMode.ondark;
  }
  // Restrict value to be between 0 and 100
  value = Math.max(0, Math.min(value, 100));

  let width;
  if (size === ProgressbarSize.large) {
    width = 96;
  } else if (size === ProgressbarSize.medium) {
    width = 50;
  } else {
    width = 44;
  }

  const totalRadius = width / 2;
  const strokeWidth = 8;
  const radius = totalRadius - strokeWidth / 2;
  const viewBoxSize = totalRadius * 2;
  const viewBoxCenter = totalRadius;
  const circleBackgroundColor = mode === ProgressBarMode.onlight ? palette.blueberry100 : palette.neutral700;
  const mainColor = mode === ProgressBarMode.onlight ? palette.blueberry600 : palette.white;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (overlay === Overlay.parent && wrapperRef.current?.parentElement?.style) {
      wrapperRef.current.parentElement.style.position = 'relative';
    }
  }, []);

  const wrapperClasses = classNames({
    [styles['progressbar--overlay']]: overlay,
    [styles['progressbar--overlay-screen']]: overlay === Overlay.screen,
    [styles['progressbar--overlay-parent']]: overlay === Overlay.parent,
  });

  return (
    <div
      ref={wrapperRef}
      className={wrapperClasses}
      data-testid={testId}
      role="progressbar"
      aria-valuenow={value}
      aria-label={ariaLabel}
      aria-live="polite"
      style={overlay === Overlay.screen ? { zIndex: ZIndex.OverlayScreen } : {}}
    >
      <svg
        role="presentation"
        width={viewBoxSize}
        height={viewBoxSize}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className={styles['progressbar__svg']}
      >
        <circle cx={viewBoxCenter} cy={viewBoxCenter} r={radius} stroke={circleBackgroundColor} strokeWidth={strokeWidth} fill="none" />
        <circle
          cx={viewBoxCenter}
          cy={viewBoxCenter}
          r={radius}
          stroke={mainColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={styles['progressbar__progress-circle']}
          transform={`rotate(-90 ${viewBoxCenter} ${viewBoxCenter})`}
        />{' '}
        <text
          className="progress-wheel__text--large"
          fontSize={'1.5rem'}
          fill={mainColor}
          x={viewBoxCenter}
          y={viewBoxCenter}
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {size == ProgressbarSize.large && `${value}%`}
        </text>
      </svg>
    </div>
  );
};

export default Progressbar;
