import React from 'react';
import { palette } from '../../theme/palette';
import Icon from '../Icons';
import X from '../Icons/X';
import styles from './styles.module.scss';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';

export interface CloseProps {
  /** Function is called when user clicks the button */
  onClick?: () => void;
  /** Sets the aria-label of the button */
  ariaLabel?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Close = (props: CloseProps): JSX.Element => {
  const breakpoint = useBreakpoint();

  const iconSize = breakpoint === Breakpoint.Xs ? 38 : 48;

  return (
    <button
      data-testid={props.testId}
      className={styles.close}
      aria-label={props.ariaLabel || 'Lukk'}
      onClick={props.onClick}
      role="button"
    >
      <Icon svgIcon={X} color={palette.blueberry600} size={iconSize} />
    </button>
  );
};

export default Close;