import React from 'react';
import {IconRawProps} from './Icon';

const ArrowRight = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
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

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${className} hnds-style-icon`}
      {...props}>
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default ArrowRight;
