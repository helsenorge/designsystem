import React from 'react';
import {IconRawProps} from './Icon';

const ChevronUp = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <polygon
      fill-rule="evenodd"
      points="32.951 30.277 34.37 28.868 23.999 18.417 13.63 28.868 15.049 30.277 24 21.257"
      transform="matrix(-1 0 0 1 48 0)"
    />
  );

  const normalHover = (
    <g fill-rule="evenodd">
      <polygon
        points="34.951 24 36.37 22.591 23.999 10.14 11.63 22.591 13.049 24 24 12.979"
        transform="matrix(-1 0 0 1 48 0)"
      />
      <rect width="2" height="22" x="23" y="13" />
    </g>
  );

  const simplified = (
    <polygon
      fill-rule="evenodd"
      points="32.577 30.115 34.37 28.336 23.999 17.885 13.63 28.336 15.423 30.115 23.999 21.471"
    />
  );

  const simplifiedHover = (
    <g fill-rule="evenodd">
      <polygon points="35.103 23.8 36.897 22.02 23.999 9.043 11.103 22.02 12.897 23.8 23.999 12.629" />
      <rect width="2.526" height="22.737" x="22.737" y="11.368" />
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

export default ChevronUp;
