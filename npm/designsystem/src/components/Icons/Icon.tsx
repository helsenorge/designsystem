import React from 'react';
import StyledIcon from './Icon.styled';

type SvgIcon = React.FC<SvgPathProps>;

interface IconProps {
  svgIcon: SvgIcon;
  ariaLabel?: string;
  size?: number;
  color?: string;
  hoverColor?: string;
  className?: string;
  hoverType?: SvgIcon;
  isHovered?: boolean;
  testId?: string;
}

interface SvgPathProps {
  isExtraSmall: boolean;
  isHovered: boolean;
}

const Icon = React.forwardRef((props: IconProps, ref: React.ForwardedRef<SVGSVGElement>) => {
  const {
    svgIcon,
    ariaLabel,
    className = '',
    size = 48,
    color = 'black',
    hoverColor = color || 'black',
    isHovered = false,
    testId,
    ...other
  } = props;

  const svgRaw = React.createElement(svgIcon, {
    isExtraSmall: size <= 38,
    isHovered,
  });

  return (
    <StyledIcon
      data-testid={testId}
      ref={ref as React.RefObject<SVGSVGElement>}
      className={`hnds-style-icon ${className}`}
      role="img"
      aria-label={ariaLabel}
      aria-hidden="true"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      {...other}
    >
      {svgRaw}
    </StyledIcon>
  );
});

Icon.displayName = 'Icon';

export { Icon, IconProps, SvgPathProps, SvgIcon };
