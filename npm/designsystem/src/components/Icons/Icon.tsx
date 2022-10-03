import classNames from 'classnames';
import React from 'react';
import { AnalyticsId, IconSize } from '../../constants';
import { useUuid } from '../../hooks/useUuid';

export type SvgIcon = React.FC<SvgPathProps>;

export interface IconProps {
  /* Sets which icon should be displayed. */
  svgIcon: SvgIcon;
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
  /* Use a custom hover icon. */
  hoverType?: SvgIcon;
  /* Swaps the displayed icon to the hover version and changes its color. */
  isHovered?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export interface SvgPathProps {
  size: IconSize;
  isHovered: boolean;
}

export const getIcon = (
  size: IconSize,
  isHovered: boolean,
  normal: JSX.Element,
  normalHover: JSX.Element,
  xSmall?: JSX.Element,
  xSmallHover?: JSX.Element,
  xxSmall?: JSX.Element,
  xxSmallHover?: JSX.Element
): JSX.Element => {
  if (size <= IconSize.XXSmall && xxSmall && xxSmallHover) {
    return isHovered ? xxSmallHover : xxSmall;
  }
  if (size <= IconSize.XSmall && xSmall && xSmallHover) {
    return isHovered ? xSmallHover : xSmall;
  }

  return isHovered ? normalHover : normal;
};

export const Icon = React.forwardRef((props: IconProps, ref: React.ForwardedRef<SVGSVGElement>) => {
  const {
    svgIcon,
    ariaLabel,
    className = '',
    size = IconSize.Small,
    color = 'black',
    hoverColor = color || 'black',
    isHovered = false,
    testId,
    ...other
  } = props;

  const svgRaw = React.createElement(svgIcon, {
    size,
    isHovered,
  });

  const titleId = useUuid();

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
      fill={isHovered ? hoverColor : color}
      {...other}
    >
      {ariaLabel && <title id={titleId}>{ariaLabel}</title>}
      {svgRaw}
    </svg>
  );
});

Icon.displayName = 'Icon';

export default Icon;
