import React from 'react';
import {SvgPathProps} from './Icon';

const ArrowRight: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <polygon
      fillRule="evenodd"
      points="27.075 5.929 25.933 7.306 38.977 23.027 5.929 23.027 5.929 24.975 38.977 24.975 25.933 40.692 27.075 42.071 42.071 24.001"
    />
  );

  const normalHover = (
    <polygon
      fillRule="evenodd"
      points="30.075 5.929 28.933 7.306 41.977 23.027 5.929 23.027 5.929 24.975 41.977 24.975 28.933 40.692 30.075 42.071 45.071 24.001"
    />
  );

  const simplified = (
    <polygon
      fillRule="evenodd"
      points="27.075 5.929 25.632 7.668 38.162 22.771 5.929 22.771 5.929 25.231 38.162 25.231 25.632 40.33 27.075 42.071 42.071 24.001"
    />
  );

  const simplifiedHover = (
    <polygon
      fillRule="evenodd"
      points="30.864 5.929 29.421 7.668 41.952 22.771 5.929 22.771 5.929 25.231 41.952 25.231 29.421 40.33 30.864 42.071 45.861 24.001"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default ArrowRight;
