import React from 'react';

import cn from 'classnames';

import { AnalyticsId } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { palette, PaletteNames } from '../../theme/palette';
import Icon, { IconSize, SvgIcon } from '../Icon';
import Undo from '../Icons/Undo';
import X from '../Icons/X';

import styles from './styles.module.scss';

export enum ChipSize {
  medium = 'medium',
  large = 'large',
}

export enum ChipAction {
  remove = 'remove',
  undo = 'undo',
}

export enum ChipVariant {
  normal = 'normal',
  oncolor = 'oncolor',
  emphasised = 'emphasised',
}

export type ChipColors = Extract<PaletteNames, 'blueberry' | 'neutral' | 'cherry' | 'banana' | 'kiwi' | 'plum'>;

export interface ChipProps {
  /** Sets the text of the chip */
  children: string;
  /** Sets the size of the chip. Default: medium */
  size?: keyof typeof ChipSize;
  /** Sets the background of the chip. Not used if action is "undo". Default: blueberry */
  color?: ChipColors;
  /* Changes the appearance of the chip. Not used if action is "undo". Default: normal */
  variant?: keyof typeof ChipVariant;
  /* Makes the chip a clickable button that performs an action. onClick must also be set. */
  action: keyof typeof ChipAction;
  /* Called when action is set and the chip is clicked on. action must also be set. */
  onClick: () => void;
  /** Sets the data-testid attribute on the expander button. */
  testId?: string;
}

const Chip: React.FC<ChipProps> = props => {
  const { children, size = ChipSize.medium, color = 'blueberry', variant = 'normal', action, onClick, testId } = props;

  const { refObject, isHovered } = usePseudoClasses<HTMLButtonElement>();

  const chipClasses = cn(styles.chip, styles[`chip--${size}`], styles[`chip--${color}`], styles[`chip--${variant}`], {
    [styles[`chip--undo`]]: action === 'undo',
  });

  const getActionIcon = (): SvgIcon => {
    switch (action) {
      case 'undo':
        return Undo;
      case 'remove':
        return X;
    }
  };

  return (
    <button className={chipClasses} onClick={onClick} ref={refObject} type="button" data-testid={testId} data-analyticsid={AnalyticsId.Tag}>
      {children}
      <Icon svgIcon={getActionIcon()} size={IconSize.XXSmall} color={palette[`${color}800`]} isHovered={isHovered} />
    </button>
  );
};

export default Chip;
