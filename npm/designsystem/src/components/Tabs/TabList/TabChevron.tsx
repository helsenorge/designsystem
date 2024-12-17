import React from 'react';

import { useHover } from '../../../hooks/useHover';
import Icon, { IconSize } from '../../Icon';
import ChevronLeft from '../../Icons/ChevronLeft';
import ChevronRight from '../../Icons/ChevronRight';

import styles from './styles.module.scss';

interface TabChevronProps {
  direction: 'left' | 'right';
  onClick: () => void;
  backgroundColor?: string;
}

const TabChevron: React.FC<TabChevronProps> = ({ direction, onClick, backgroundColor }) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const { isHovered } = useHover<HTMLButtonElement>(buttonRef);

  return (
    <button
      ref={buttonRef}
      className={styles['tab-list__button']}
      onClick={onClick}
      aria-label={`TODO: Scroll TabList ${direction}`}
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
