import React, { useId } from 'react';

import classNames from 'classnames';

import type { FormOnColor } from '../../constants';
import type { StatusDotOnColor } from '../StatusDot';

import { AnalyticsId, IconSize } from '../../constants';

export type SvgIcon = React.FC<SvgPathProps>;

export interface BaseIconProps {
  /* aria-label for the <svg> element. Used as <title> tag. */
  ariaLabel?: string;
  /* Changes the size of the icon. */
  size?: number;
  /* Changes the color of the icon. */
  color?: string;
  /* Changes the hover color of the icon. */
  hoverColor?: string;
  /* Adds custom classes to the element. */
  className?: string;
  /* Swaps the displayed icon to the hover version and changes its color. */
  isHovered?: boolean;
  /** Defines the color of the icon */
  onColor?: keyof typeof FormOnColor | StatusDotOnColor;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Ref that is passed to the component */
  ref?: React.Ref<SVGSVGElement | null>;
}

export interface IconProps extends BaseIconProps {
  /* Sets which icon should be displayed. */
  svgIcon: SvgIcon;
}

export interface SvgPathProps {
  size: IconSize;
  isHovered: boolean;
  onColor?: keyof typeof FormOnColor | StatusDotOnColor;
}

export interface IconConfig {
  size: IconSize;
  isHovered: boolean;
  normal: React.ReactElement;
  normalHover: React.ReactElement;
  xSmall?: React.ReactElement;
  xSmallHover?: React.ReactElement;
  xxSmall?: React.ReactElement;
  xxSmallHover?: React.ReactElement;
}

export const Icon: React.FC<IconProps> = props => {
  const {
    svgIcon,
    ariaLabel,
    className = '',
    size = IconSize.Small,
    color = 'black',
    hoverColor = color || 'black',
    isHovered = false,
    onColor,
    testId,
    ref,
    ...other
  } = props;
  const svgRaw = React.createElement(svgIcon, {
    size,
    isHovered,
    onColor,
  });

  const titleId = useId();
  const svgColor = isHovered ? hoverColor : color;

  return (
    <svg
      data-testid={testId}
      data-analyticsid={AnalyticsId.Icon}
      ref={ref}
      className={classNames(`hnds-style-icon`, className)}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-labelledby={ariaLabel ? titleId : undefined}
      focusable={false}
      aria-hidden={ariaLabel ? undefined : true}
      viewBox="0 0 48 48"
      style={{ minWidth: size, minHeight: size }}
      width={size}
      height={size}
      fill={svgColor}
      color={svgColor}
      {...other}
    >
      {ariaLabel && <title id={titleId}>{ariaLabel}</title>}
      {svgRaw}
    </svg>
  );
};

Icon.displayName = 'Icon';

export default Icon;
