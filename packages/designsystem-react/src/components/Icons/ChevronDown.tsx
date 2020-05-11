import React from 'react';
import {IconRawProps} from './Icon';

const ChevronDown = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <polygon
      fill-rule="evenodd"
      points="32.951 30.648 34.37 29.239 23.999 18.788 13.63 29.239 15.049 30.648 24 21.627"
      transform="matrix(1 0 0 -1 0 49.436)"
    />
  );

  const normalHover = (
    <g fill-rule="evenodd">
      <polygon
        points="34.951 36.93 36.37 35.521 23.999 23.07 11.63 35.521 13.049 36.93 24 25.91"
        transform="matrix(1 0 0 -1 0 60)"
      />
      <rect width="2" height="22" x="23" y="13" />
    </g>
  );

  const simplified = (
    <polygon
      fill-rule="evenodd"
      points="32.577 30.115 34.37 28.336 23.999 17.885 13.63 28.336 15.423 30.115 23.999 21.471"
      transform="matrix(1 0 0 -1 0 48)"
    />
  );

  const simplifiedHover = (
    <g fill-rule="evenodd">
      <polygon
        points="35.103 38.957 36.897 37.178 23.999 24.2 11.103 37.178 12.897 38.957 23.999 27.787"
        transform="matrix(1 0 0 -1 0 63.158)"
      />
      <rect width="2.526" height="22.737" x="22.737" y="13.895" />
    </g>
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

export default ChevronDown;
