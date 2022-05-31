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
}

const Close = (props: CloseProps): JSX.Element => {
  const breakpoint = useBreakpoint();

  const iconSize = breakpoint === Breakpoint.xs || props.small ? 38 : 48;
  const closeClasses = classNames(styles.close, { [styles['close--small']]: props.small });

  return (
    <button
      data-testid={props.testId}
      data-analyticsid={AnalyticsId.Close}
      className={closeClasses}
      aria-label={props.ariaLabel || 'Lukk'}
      onClick={props.onClick}
      type="button"
    >
      <Icon svgIcon={X} color={palette.blueberry600} size={iconSize} />
    </button>
  );
};

export default Close;
