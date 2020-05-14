import React from 'react';
import {IconRawProps} from './Icon';

const Check = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <polygon
      fillRule="evenodd"
      points="22.504 31.198 12.914 21.232 14.355 19.845 22.504 28.313 36.959 13.297 38.4 14.683"
    />
  );

  const normalHover = (
    <polygon
      fillRule="evenodd"
      points="22.504 31.198 14.688 23.077 16.129 21.69 22.504 28.313 38.363 11.839 39.803 13.225"
    />
  );

  const simplified = (
    <polygon
      fillRule="evenodd"
      points="22.504 31.578 12.723 21.416 14.545 19.664 22.504 27.933 36.769 13.114 38.59 14.866"
    />
  );

  const simplifiedHover = (
    <polygon
      fillRule="evenodd"
      points="22.504 31.578 14.688 23.454 16.508 21.704 22.504 27.933 38.825 10.977 40.646 12.729"
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

export default Check;
