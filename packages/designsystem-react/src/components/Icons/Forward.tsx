import React from 'react';
import {IconRawProps} from './Icon';

const Forward = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fill-rule="evenodd" transform="translate(7.119 11)">
      <polygon points=".214 13.941 32.523 13.941 32.523 11.941 .214 11.941" />
      <polygon points="21.844 25.596 20.402 24.209 31.144 13.024 20.595 1.782 22.053 .413 33.902 13.04" />
    </g>
  );

  const normalHover = (
    <g fill-rule="evenodd" transform="translate(7 11)">
      <polygon points=".213 13.941 36.312 13.941 36.312 11.941 .213 11.941" />
      <polygon points="25.634 25.596 24.192 24.209 34.933 13.024 24.385 1.782 25.843 .413 37.691 13.04" />
    </g>
  );

  const simplified = (
    <polygon
      fill-rule="evenodd"
      points="28.999 11 27.159 12.759 36.261 22.648 7 22.648 7 25.219 36.388 25.219 26.968 35.218 28.787 37 41 24.037"
    />
  );

  const simplifiedHover = (
    <polygon
      fill-rule="evenodd"
      points="32.93 11 31.08 12.759 40.234 22.648 7 22.648 7 25.219 40.361 25.219 30.888 35.218 32.717 37 45 24.037"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className="icon"
      {...props}>
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default Forward;
