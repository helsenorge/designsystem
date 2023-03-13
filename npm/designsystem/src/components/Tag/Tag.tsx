import React from 'react';

import cn from 'classnames';

import { AnalyticsId } from '../../constants';
import { useHover } from '../../hooks/useHover';
import { palette, PaletteNames } from '../../theme/palette';
import Icon, { IconSize, SvgIcon } from '../Icons';
import Undo from '../Icons/Undo';
import X from '../Icons/X';

import styles from './styles.module.scss';

export enum TagSize {
  medium = 'medium',
  large = 'large',
}

export enum TagAction {
  remove = 'remove',
  undo = 'undo',
}

export enum TagVariant {
  normal = 'normal',
  oncolor = 'oncolor',
  emphasised = 'emphasised',
}

export type TagColors = Extract<PaletteNames, 'blueberry' | 'neutral' | 'cherry' | 'banana' | 'kiwi' | 'plum'>;

interface TagProps {
  /** Sets the text of the tag */
  children: string;
  /** Sets the size of the tag. Default: small */
  size?: keyof typeof TagSize;
  /** Sets the background of the tag. Not used if action is "undo". Default: blueberry */
  color?: TagColors;
  /** Adds an icon to the tag. Not shown if action is set. */
  svgIcon?: SvgIcon;
  /* Changes the appearance of the tag. Not used if action is "undo". Default: normal */
  variant?: keyof typeof TagVariant;
  /* Makes the tag a clickable button that performs an action. onClick must also be set. */
  action?: keyof typeof TagAction;
  /* Called when action is set and the tag is clicked on. action must also be set. */
  onClick?: () => void;
  /** Sets the data-testid attribute on the expander button. */
  testId?: string;
}

type ActionTagProps = Required<Pick<TagProps, 'children' | 'size' | 'color' | 'variant' | 'action' | 'onClick'>> & Pick<TagProps, 'testId'>;

const ActionTag: React.FC<ActionTagProps> = props => {
  const { children, size, color, variant, action, onClick, testId } = props;

  const { hoverRef, isHovered } = useHover<HTMLButtonElement>();

  const tagClasses = cn(
    styles.tag,
    styles[`tag--${size}`],
    styles[`tag--${action}`],
    styles['tag--has-action'],
    action === 'remove' && [styles[`tag--${color}`], styles[`tag--${variant}`]]
  );

  const getActionIcon = (): SvgIcon => {
    switch (action) {
      case 'remove':
        return X;
      case 'undo':
        return Undo;
    }
  };

  return (
    <button className={tagClasses} onClick={onClick} ref={hoverRef} type="button" data-testid={testId} data-analyticsid={AnalyticsId.Tag}>
      {children}
      <Icon
        svgIcon={getActionIcon()}
        size={IconSize.XXSmall}
        color={palette[`${action === 'undo' ? 'blueberry' : color}800`]}
        isHovered={isHovered}
      />
    </button>
  );
};

const Tag: React.FC<TagProps> = props => {
  const { children, size = TagSize.medium, color = 'blueberry', svgIcon, variant = 'normal', action, onClick, testId } = props;

  const tagClasses = cn(styles.tag, styles[`tag--${size}`], styles[`tag--${color}`], styles[`tag--${variant}`], {
    [styles['tag--has-icon']]: svgIcon,
  });

  if (action && onClick) {
    return (
      <ActionTag size={size} color={color} variant={variant} action={action} onClick={onClick} testId={testId}>
        {children}
      </ActionTag>
    );
  }

  return (
    <span className={tagClasses} data-testid={testId} data-analyticsid={AnalyticsId.Tag}>
      {svgIcon && <Icon svgIcon={svgIcon} size={IconSize.XXSmall} color={palette[`${color}800`]} className={styles.tag__icon} />}
      {children}
    </span>
  );
};

export default Tag;
