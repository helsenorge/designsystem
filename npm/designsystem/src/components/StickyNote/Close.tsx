import type React from 'react';

import classNames from 'classnames';

import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
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
  /** Ref passed to the button element */
  ref?: React.Ref<HTMLButtonElement | null>;
}

/*
  Denne er kopiert fra Close-komponent. 
  Det er for å kunne ha en egen lokal variant for StickyNote. 
  Likt som i Figma.
 */

const Close: React.FC<CloseProps> = (props: CloseProps) => {
  const { testId, ariaLabel = 'Lukk', onClick, ref } = props;
  const { refObject, isHovered } = usePseudoClasses();

  const iconSize = useIsMobileBreakpoint() ? 38 : 48;

  const closeClasses = classNames(styles.close);

  return (
    <button
      ref={mergeRefs([ref, refObject])}
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
};

export default Close;
