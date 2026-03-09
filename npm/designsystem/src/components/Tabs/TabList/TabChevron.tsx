import React from 'react';

import { usePseudoClasses } from '../../../hooks/usePseudoClasses';
import Icon, { IconSize } from '../../Icon';
import ChevronLeft from '../../Icons/ChevronLeft';
import ChevronRight from '../../Icons/ChevronRight';

import styles from './styles.module.scss';

interface TabChevronProps {
  direction: 'left' | 'right';
  onClick: () => void;
  backgroundColor?: string;
  ariaLabel?: string;
}

const TabChevron: React.FC<TabChevronProps> = ({ direction, onClick, backgroundColor, ariaLabel }) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const { isHovered } = usePseudoClasses<HTMLButtonElement | null>(buttonRef);

  return (
    <button
      type="button"
      ref={buttonRef}
      className={styles['tab-list__button']}
      onClick={onClick}
      aria-label={ariaLabel}
      style={{ backgroundColor: backgroundColor }}
    >
      {direction === 'left' ? (
        <Icon color={'var(--color-action-graphics-onlight)'} isHovered={isHovered} svgIcon={ChevronLeft} size={IconSize.XSmall} />
      ) : (
        <Icon color={'var(--color-action-graphics-onlight)'} isHovered={isHovered} svgIcon={ChevronRight} size={IconSize.XSmall} />
      )}
    </button>
  );
};

export default TabChevron;
