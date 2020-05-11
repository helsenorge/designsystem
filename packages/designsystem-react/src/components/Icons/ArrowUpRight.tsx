import React from 'react';
import {IconRawProps} from './Icon';

const ArrowUpRight = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <g fill-rule="evenodd" transform="translate(14 14)">
      <polygon points="1.804 19.149 .885 18.229 17.823 1.292 18.742 2.212" />
      <polygon points="19.305 15.205 18.005 15.205 18.005 1.96 4.761 1.96 4.761 .659 19.305 .659" />
    </g>
  );

  const normalHover = (
    <g fill-rule="evenodd" transform="translate(14 11)">
      <polygon points="1.804 22.149 .885 21.229 21.009 1.106 21.928 2.026" />
      <polygon points="22.52 15.082 21.22 15.082 21.22 1.838 7.976 1.838 7.976 .537 22.52 .537" />
    </g>
  );

  const simplified = (
    <polygon
      fill-rule="evenodd"
      points="18.76 14.426 18.76 16.194 30.59 16.194 14.719 32.065 15.97 33.315 31.771 17.514 31.771 29.205 33.539 29.205 33.539 14.426"
    />
  );

  const simplifiedHover = (
    <polygon
      fill-rule="evenodd"
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
      className="icon"
      {...props}>
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default ArrowUpRight;
