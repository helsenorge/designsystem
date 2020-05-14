import React from 'react';
import {IconRawProps} from './Icon';

const ArrowUpRight = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <polygon
      fill-rule="evenodd"
      points="33.305 14.659 33.305 29.205 32.005 29.205 32.005 16.948 15.804 33.149 14.885 32.229 31.155 15.959 18.761 15.96 18.761 14.659"
    />
  );

  const normalHover = (
    <polygon
      fill-rule="evenodd"
      points="36.52 11.537 36.52 26.082 35.22 26.082 35.219 13.735 15.804 33.149 14.885 32.229 34.278 12.837 21.976 12.838 21.976 11.537"
    />
  );

  const simplified = (
    <polygon
      fillRule="evenodd"
      points="18.76 14.426 18.76 16.194 30.59 16.194 14.719 32.065 15.97 33.315 31.771 17.514 31.771 29.205 33.539 29.205 33.539 14.426"
    />
  );

  const simplifiedHover = (
    <polygon
      fillRule="evenodd"
      points="22.076 11.122 22.076 12.891 33.812 12.891 14.819 31.884 16.071 33.134 35.086 14.119 35.086 25.901 36.855 25.901 36.855 11.122"
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

export default ArrowUpRight;
