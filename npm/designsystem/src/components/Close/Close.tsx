import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { mergeRefs } from '../../utils/refs';
import Icon from '../Icon';
import X from '../Icons/X';

import styles from './styles.module.scss';

export interface CloseProps {
  /** Keeps the icon small for all screen sizes */
  small?: boolean;
  /** Function is called when user clicks the button */
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** Sets the aria-label of the button */
  ariaLabel?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Gives color to the svg */
  color?: 'blueberry' | 'black' | 'plum';
}

const Close = React.forwardRef(function ButtonForwardedRef(props: CloseProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { small, testId, ariaLabel = 'Lukk', onClick, className, color = 'blueberry' } = props;
  const { refObject, isHovered } = usePseudoClasses();

  const iconSize = useIsMobileBreakpoint() || small ? 38 : 48;

  let iconColor;
  if (color === 'black') {
    iconColor = 'black';
  } else if (color === 'plum') {
    iconColor = 'var(--core-color-plum-700)';
  } else {
    iconColor = 'var(--color-action-graphics-onlight)';
  }

  const closeClasses = classNames(styles.close, { [styles['close--small']]: small }, className);

  return (
    <button
      ref={mergeRefs([ref, refObject])}
      data-testid={testId}
      data-analyticsid={AnalyticsId.Close}
      className={closeClasses}
      aria-label={ariaLabel}
      onClick={onClick}
      type="button"
    >
      <span
        className={classNames(styles['close__inner-container'], {
          [styles['close__inner-container--small']]: small,
          [styles['close__inner-container--plum']]: color == 'plum',
        })}
      >
        <Icon svgIcon={X} color={iconColor} size={iconSize} isHovered={isHovered} />
      </span>
    </button>
  );
});

export default Close;
