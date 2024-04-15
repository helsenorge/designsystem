import React from 'react';

import cn from 'classnames';

import { AnalyticsId } from '../../constants';
import { palette, PaletteNames } from '../../theme/palette';
import Icon, { IconSize, SvgIcon } from '../Icon';
import { IconName } from '../Icons/IconNames';
import LazyIcon from '../LazyIcon';

import styles from './styles.module.scss';

export enum TagSize {
  medium = 'medium',
  large = 'large',
}

export enum TagVariant {
  normal = 'normal',
  oncolor = 'oncolor',
  emphasised = 'emphasised',
}

export type TagColors = Extract<PaletteNames, 'blueberry' | 'neutral' | 'cherry' | 'banana' | 'kiwi' | 'plum'>;

export interface TagProps {
  /** Sets the text of the tag */
  children: string;
  /** Sets the size of the tag. Default: medium */
  size?: keyof typeof TagSize;
  /** Sets the background of the tag. Default: blueberry */
  color?: TagColors;
  /** Adds an icon to the tag. */
  svgIcon?: SvgIcon | IconName;
  /* Changes the appearance of the tag. Default: normal */
  variant?: keyof typeof TagVariant;
  /** Sets the data-testid attribute on the expander button. */
  testId?: string;
}

const Tag: React.FC<TagProps> = props => {
  const { children, size = TagSize.medium, color = 'blueberry', svgIcon, variant = 'normal', testId } = props;

  const tagClasses = cn(styles.tag, styles[`tag--${size}`], styles[`tag--${color}`], {
    [styles['tag--has-icon']]: svgIcon,
    [styles['tag--emphasised']]: variant == TagVariant.emphasised,
  });

  return (
    <span className={tagClasses} data-testid={testId} data-analyticsid={AnalyticsId.Tag}>
      {svgIcon &&
        (typeof svgIcon === 'string' ? (
          <LazyIcon iconName={svgIcon} size={IconSize.XXSmall} color={palette[`${color}800`]} className={styles.tag__icon} />
        ) : (
          <Icon svgIcon={svgIcon} size={IconSize.XXSmall} color={palette[`${color}800`]} className={styles.tag__icon} />
        ))}
      {children}
    </span>
  );
};

export default Tag;
