import React from 'react';
import { IconSize } from '.';

type SvgIcon = React.FC<SvgPathProps>;

interface IconProps {
  /* Sets which icon should be displayed. */
  svgIcon: SvgIcon;
  /* aria-label for the <svg> element. Used as <title> tag if id is set */
  ariaLabel?: string;
  /* id to */
  id?: string;
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

interface SvgPathProps {
  isExtraSmall: boolean;
  isHovered: boolean;
}

export const returnIcon = (
  isExtraSmall: boolean,
  isHovered: boolean,
  normal: JSX.Element,
  normalHover: JSX.Element,
  simplifield?: JSX.Element,
  simplifiedHover?: JSX.Element
) => {
  if (isExtraSmall && simplifield && simplifiedHover) {
    return isHovered ? simplifiedHover : simplifield;
  }

  return isHovered ? normalHover : normal;
};

const Icon = React.forwardRef((props: IconProps, ref: React.ForwardedRef<SVGSVGElement>) => {
  const {
    svgIcon,
    ariaLabel,
    id,
    className = '',
    size = IconSize.Small,
    color = 'black',
    hoverColor = color || 'black',
    isHovered = false,
    testId,
    ...other
  } = props;

  const svgRaw = React.createElement(svgIcon, {
    isExtraSmall: size <= IconSize.XSmall,
    isHovered,
  });

  const labelledby = id && ariaLabel ? `title-${id}` : undefined;

  return (
    <svg
      id={id}
      data-testid={testId}
      ref={ref as React.RefObject<SVGSVGElement>}
      className={`hnds-style-icon ${className}`}
      role="img"
      aria-label={!id && ariaLabel ? ariaLabel : undefined}
      aria-labelledby={labelledby}
      aria-hidden="true"
      viewBox="0 0 48 48"
      style={{ minWidth: size, minHeight: size }}
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      {...other}
    >
      {labelledby && <title id={labelledby}>{ariaLabel}</title>}
      {svgRaw}
    </svg>
  );
});

Icon.displayName = 'Icon';

export { Icon, IconProps, SvgPathProps, SvgIcon };
