import React from 'react';
import {PaletteNames} from '../../theme/palette';
import {getColor} from '../../theme/currys/color';

type SvgIcon = React.ForwardRefExoticComponent<IconRawProps & React.RefAttributes<unknown>>;
type IconColors = PaletteNames;

interface IconProps {
  svgIcon: SvgIcon;
  hoverType?: SvgIcon;
  size?: number;
  color?: IconColors;
  className?: string;
  isHovered?: boolean;
}

interface IconRawProps {
  color: string;
  className?: string;
  hoverColor: string;
  size?: number;
  isHovered?: boolean;
}

const Icon = React.forwardRef((props: IconProps, ref: any) => {
  const {svgIcon, className = '', size = 48, color = 'black', isHovered = false} = props;
  return React.createElement(svgIcon, {
    size,
    color: getColor(color, 600),
    hoverColor: getColor(color, 700),
    className,
    isHovered,
    ref: ref,
  });
});

Icon.displayName = 'Icon';

export {Icon, IconProps, IconRawProps, SvgIcon, IconColors};
