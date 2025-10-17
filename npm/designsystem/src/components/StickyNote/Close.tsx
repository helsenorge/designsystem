import React from 'react';

import classNames from 'classnames';

import { useHover } from '../../hooks/useHover';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { mergeRefs } from '../../utils/refs';
import Icon from '../Icon';
import X from '../Icons/X';

import styles from './styles.module.scss';

export interface CloseProps {
  /** Function is called when user clicks the button */
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** Sets the aria-label of the button */
  ariaLabel?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

/*
  Denne er kopiert fra Close-komponent. 
  Det er for å kunne ha en egen lokal variant for StickyNote. 
  Likt som i Figma.
 */

const Close = React.forwardRef(function ButtonForwardedRef(props: CloseProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { testId, ariaLabel = 'Lukk', onClick } = props;
  const { hoverRef, isHovered } = useHover();

  const iconSize = useIsMobileBreakpoint() ? 38 : 48;

  const closeClasses = classNames(styles.close);

  return (
    <button
      ref={mergeRefs([ref, hoverRef])}
      data-testid={testId}
      className={closeClasses}
      aria-label={ariaLabel}
      onClick={onClick}
      type="button"
    >
      <span className={classNames(styles['close__inner-container'])}>
        <Icon svgIcon={X} color="black" size={iconSize} isHovered={isHovered} />
      </span>
    </button>
  );
});

export default Close;
