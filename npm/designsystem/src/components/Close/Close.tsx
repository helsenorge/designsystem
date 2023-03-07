import React from 'react';
import { palette } from '../../theme/palette';
import Icon from '../Icons';
import X from '../Icons/X';
import styles from './styles.module.scss';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { AnalyticsId } from '../../constants';
import classNames from 'classnames';

export interface CloseProps {
  /** Keeps the icon small for all screen sizes */
  small?: boolean;
  /** Function is called when user clicks the button */
  onClick?: () => void;
  /** Sets the aria-label of the button */
  ariaLabel?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Gives color to the svg */
  color?: string;
  /** Gives hovered effect to X icon */
  isHovered?: boolean;
}

const Close = React.forwardRef(function ButtonForwardedRef(props: CloseProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { small, testId, ariaLabel, onClick, className, color, isHovered } = props;
  const breakpoint = useBreakpoint();

  const iconSize = breakpoint === Breakpoint.xs || small ? 38 : 48;

  const closeClasses = classNames(styles.close, { [styles['close--small']]: small }, className);

  return (
    <button
      ref={ref}
      data-testid={testId}
      data-analyticsid={AnalyticsId.Close}
      className={closeClasses}
      aria-label={ariaLabel || 'Lukk'}
      onClick={onClick}
      type="button"
    >
      <Icon svgIcon={X} color={color ?? palette.blueberry600} size={iconSize} isHovered={isHovered} />
    </button>
  );
});

export default Close;
