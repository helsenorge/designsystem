import React from 'react';
import Icon, { IconSize } from '../Icons';
import Check from '../Icons/Check';
import cn from 'classnames';

import styles from './styles.module.scss';

import { palette } from '../../theme/palette';
import { AnalyticsId } from '../../constants';

interface AvatarProps {
  /** Name to display in the avatar. Will be truncated to the first two characters. */
  children: string;
  /** Displays a check icon to indicated the selected state. */
  selected?: boolean;
  /** background and color will be determined on variant. */
  variant?: 'normal' | 'black';
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Avatar = React.forwardRef(function AvatarForwardedRef(props: AvatarProps, ref: React.ForwardedRef<HTMLElement>) {
  const { children, className = '', selected = false, variant = 'normal', testId } = props;
  const truncatedName = children.charAt(0).toLocaleUpperCase() + children.substring(1, 2);
  return (
    <span
      className={cn(styles.avatar, selected && styles['avatar--selected'], variant === 'black' && styles['avatar--black'], className)}
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
