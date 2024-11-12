import React from 'react';

import cn from 'classnames';

import { AnalyticsId } from '../../constants';
import { palette } from '../../theme/palette';
import Icon, { IconSize } from '../Icon';
import Check from '../Icons/Check';

import styles from './styles.module.scss';

export enum AvatarSize {
  xsmall = 'xsmall',
  small = 'small',
}

export interface AvatarProps {
  /** Name to display in the avatar. Will be truncated to the first two characters. */
  children: string;
  /** Displays a check icon to indicated the selected state. */
  selected?: boolean;
  /** background and color will be determined on variant. */
  variant?: 'normal' | 'black';
  /** @deprecated Square or circle variant of avatar. The circle should only be used for representation of someone else. NB: This is temporary and will be renamed in v10 */
  type?: 'normal' | 'circle';
  /** Avatar size. Default: small */
  size?: keyof typeof AvatarSize;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}
export type AvatarType = React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLElement>>;
const Avatar: AvatarType = React.forwardRef(function AvatarForwardedRef(props: AvatarProps, ref: React.ForwardedRef<HTMLElement>) {
  const { children, className = '', selected = false, variant = 'normal', type = 'normal', size = AvatarSize.small, testId } = props;
  const truncatedName = children.charAt(0).toLocaleUpperCase() + children.substring(1, 2);
  return (
    <span
      className={cn(
        styles.avatar,
        selected && styles['avatar--selected'],
        variant === 'black' && styles['avatar--black'],
        type === 'circle' && styles['avatar--circle'],
        size === AvatarSize.xsmall && styles['avatar--xsmall'],
        size === AvatarSize.small && styles['avatar--small'],
        className
      )}
      ref={ref}
      data-testid={testId}
      data-analyticsid={AnalyticsId.Avatar}
    >
      {selected ? (
        <Icon svgIcon={Check} size={IconSize.Small} color={variant === 'black' ? palette.neutral900 : palette.blueberry600} />
      ) : (
        truncatedName
      )}
    </span>
  );
});

export default Avatar;
