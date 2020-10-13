import React from 'react';

type SvgIcon = React.FC<SvgPathProps>;

interface IconProps {
  svgIcon: SvgIcon;
  size?: number;
  color?: string;
  hoverColor?: string;
  className?: string;
  hoverType?: SvgIcon;
  isHovered?: boolean;
}

interface SvgPathProps {
  isExtraSmall: boolean;
  isHovered: boolean;
}

const Icon = React.forwardRef((props: IconProps, ref: any) => {
  const {
    svgIcon,
    className = '',
    size = 48,
    color = 'black',
    hoverColor = color || 'black',
    isHovered = false,
    ...other
  } = props;

  const svgRaw = React.createElement(svgIcon, {
    isExtraSmall: size <= 38,
    isHovered,
  });

  return (
    <svg
      ref={ref}
      className={`hnds-style-icon ${className}`}
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      {...other}>
      {svgRaw}
    </svg>
  );
});

Icon.displayName = 'Icon';

export {Icon, IconProps, SvgPathProps, SvgIcon};
