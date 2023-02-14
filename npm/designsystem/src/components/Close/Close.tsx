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
  /** Sets a different color to the icon. Blueberry600 is default  */
  color?: string;
}

const Close = ({ small, onClick, ariaLabel = 'Lukk', testId, color = palette.blueberry600 }: CloseProps): JSX.Element => {
  const breakpoint = useBreakpoint();

  const iconSize = breakpoint === Breakpoint.xs || small ? 38 : 48;
  const closeClasses = classNames(styles.close, { [styles['close--small']]: small });

  return (
    <button
      data-testid={testId}
      data-analyticsid={AnalyticsId.Close}
      className={closeClasses}
      aria-label={ariaLabel}
      onClick={onClick}
      type="button"
    >
      <Icon svgIcon={X} color={color} size={iconSize} />
    </button>
  );
};

export default Close;
