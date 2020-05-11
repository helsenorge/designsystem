import React from 'react';
import {IconRawProps} from './Icon';

const ChevronLeft = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <polygon
      fill-rule="evenodd"
      points="33.681 29.93 35.101 28.521 24.73 18.07 14.36 28.521 15.78 29.93 24.73 20.91"
      transform="matrix(0 1 1 0 .73 -.73)"
    />
  );

  const normalHover = (
    <g fill-rule="evenodd">
      <polygon
        points="28.951 30.93 30.37 29.521 17.999 17.07 5.63 29.521 7.049 30.93 18 19.91"
        transform="matrix(0 1 1 0 -6 6)"
      />
      <rect width="22" height="2" x="13" y="23" />
    </g>
  );

  const simplified = (
    <polygon
      fill-rule="evenodd"
      points="32.577 30.115 34.37 28.336 23.999 17.885 13.63 28.336 15.423 30.115 23.999 21.471"
      transform="matrix(0 1 1 0 0 0)"
    />
  );

  const simplifiedHover = (
    <g fill-rule="evenodd">
      <polygon
        points="27.524 31.378 29.318 29.599 16.42 16.622 3.524 29.599 5.318 31.378 16.42 20.208"
        transform="matrix(0 1 1 0 -7.579 7.579)"
      />
      <rect width="22.737" height="2.526" x="11.368" y="22.737" />
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

export default ChevronLeft;
