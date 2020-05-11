import React from 'react';
import {IconRawProps} from './Icon';

const ChevronRight = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <polygon
      fill-rule="evenodd"
      points="34.052 29.93 35.472 28.521 25.101 18.07 14.731 28.521 16.151 29.93 25.101 20.91"
      transform="rotate(90 25.101 24)"
    />
  );

  const normalHover = (
    <g fill-rule="evenodd">
      <polygon
        points="40.951 30.93 42.37 29.521 29.999 17.07 17.63 29.521 19.049 30.93 30 19.91"
        transform="rotate(90 30 24)"
      />
      <rect width="22" height="2" x="13" y="23" />
    </g>
  );

  const simplified = (
    <polygon
      fill-rule="evenodd"
      points="32.577 30.115 34.37 28.336 23.999 17.885 13.63 28.336 15.423 30.115 23.999 21.471"
      transform="rotate(90 24 24)"
    />
  );

  const simplifiedHover = (
    <g fill-rule="evenodd">
      <polygon
        points="42.682 31.379 44.476 29.599 31.578 16.622 18.682 29.599 20.476 31.378 31.578 20.208"
        transform="rotate(90 31.579 24)"
      />
      <rect width="22.737" height="2.526" x="13.895" y="22.737" />
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

export default ChevronRight;
