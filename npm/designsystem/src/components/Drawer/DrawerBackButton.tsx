import classNames from 'classnames';

import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import Icon from '../Icon';
import ChevronLeft from '../Icons/ChevronLeft';

import styles from './DrawerBackButton.module.scss';

export interface DrawerBackButtonProps {
  /** Function is called when user clicks the button */
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** Sets the aria-label of the button */
  ariaLabel?: string;
  /** Adds custom classes to the element. */
  className?: string;
}

const DrawerBackButton: React.FC<DrawerBackButtonProps> = props => {
  const { ariaLabel = 'Tilbake', onClick, className } = props;
  const { refObject, isHovered } = usePseudoClasses<HTMLButtonElement>();

  const iconSize = useIsMobileBreakpoint() ? 38 : 48;

  return (
    <button ref={refObject} className={classNames(styles['back-button'], className)} aria-label={ariaLabel} onClick={onClick} type="button">
      <span className={classNames(styles['back-button__inner-container'])}>
        <Icon svgIcon={ChevronLeft} color={'var(--color-action-graphics-dark-onlight-normal'} size={iconSize} isHovered={isHovered} />
      </span>
    </button>
  );
};

export default DrawerBackButton;
