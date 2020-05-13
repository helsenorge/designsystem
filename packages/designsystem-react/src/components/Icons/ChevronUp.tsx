import React from 'react';
import {IconRawProps} from './Icon';

const ChevronUp = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <polygon
      fillRule="evenodd"
      points="32.951 30.277 34.37 28.868 23.999 18.417 13.63 28.868 15.049 30.277 24 21.257"
      transform="matrix(-1 0 0 1 48 0)"
    />
  );

  const normalHover = (
    <polygon
      fillRule="evenodd"
      points="24.001 10.14 36.37 22.591 34.951 24 25 13.985 25 35 23 35 23 13.985 13.049 24 11.63 22.591"
    />
  );

  const simplified = (
    <polygon
      fillRule="evenodd"
      points="32.577 30.115 34.37 28.336 23.999 17.885 13.63 28.336 15.423 30.115 23.999 21.471"
    />
  );

  const simplifiedHover = (
    <polygon
      fillRule="evenodd"
      points="23.999 9.043 36.897 22.02 35.103 23.8 25.262 13.9 25.263 34.105 22.737 34.105 22.736 13.9 12.897 23.8 11.103 22.02"
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

export default ChevronUp;
