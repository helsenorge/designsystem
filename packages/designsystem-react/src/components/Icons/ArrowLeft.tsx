import React from 'react';
import {SvgPathProps} from './Icon';

const ArrowLeft: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <polygon
      fillRule="evenodd"
      points="27.075 5.929 25.933 7.306 38.977 23.027 5.929 23.027 5.929 24.975 38.977 24.975 25.933 40.692 27.075 42.071 42.071 24.001"
      transform="matrix(-1 0 0 1 48 0)"
    />
  );

  const normalHover = (
    <polygon
      fillRule="evenodd"
      points="27.075 5.929 25.933 7.306 38.977 23.027 2.929 23.027 2.929 24.975 38.977 24.975 25.933 40.692 27.075 42.071 42.071 24.001"
      transform="matrix(-1 0 0 1 45 0)"
    />
  );

  const simplified = (
    <polygon
      fillRule="evenodd"
      points="27.075 5.929 25.632 7.668 38.162 22.771 5.929 22.771 5.929 25.231 38.162 25.231 25.632 40.33 27.075 42.071 42.071 24.001"
      transform="matrix(-1 0 0 1 48 0)"
    />
  );

  const simplifiedHover = (
    <polygon
      fillRule="evenodd"
      points="27.075 5.929 25.632 7.668 38.162 22.771 2.139 22.771 2.139 25.231 38.162 25.231 25.632 40.33 27.075 42.071 42.071 24.001"
      transform="matrix(-1 0 0 1 44.21 0)"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default ArrowLeft;
