import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { useHover } from '../../hooks/useHover';
import { palette } from '../../theme/palette';
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
  color?: string;
}

const Close = React.forwardRef(function ButtonForwardedRef(props: CloseProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { small, testId, ariaLabel = 'Lukk', onClick, className, color = palette.blueberry600 } = props;
  const breakpoint = useBreakpoint();
  const { hoverRef, isHovered } = useHover();

  const iconSize = breakpoint === Breakpoint.xs || small ? 38 : 48;

  const closeClasses = classNames(styles.close, { [styles['close--small']]: small }, className);

  return (
    <button
      ref={mergeRefs([ref, hoverRef])}
      data-testid={testId}
      data-analyticsid={AnalyticsId.Close}
      className={closeClasses}
      aria-label={ariaLabel}
      onClick={onClick}
      type="button"
    >
      <Icon svgIcon={X} color={color} size={iconSize} isHovered={isHovered} />
    </button>
  );
});

export default Close;
