import React from 'react';
import { returnIcon, SvgPathProps } from './Icon';

const Minus: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = <path d="M14.225 23h19.55v2h-19.55z" />;
  const normalHover = <path d="M12.225 23h23.55v2h-23.55z" />;
  const small = <path d="M14.179 22.737h19.642v2.526H14.179z" />;
  const smallHover = <path d="M11.653 22.737h24.694v2.526H11.653z" />;

  return returnIcon(size, isHovered, normal, normalHover, small, smallHover);
};

export default Minus;
