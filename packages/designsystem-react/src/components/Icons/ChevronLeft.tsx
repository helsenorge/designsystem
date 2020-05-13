import React from 'react';
import {IconRawProps} from './Icon';

const ChevronLeft = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <polygon
      fillRule="evenodd"
      points="33.681 29.93 35.101 28.521 24.73 18.07 14.36 28.521 15.78 29.93 24.73 20.91"
      transform="matrix(0 1 1 0 .73 -.73)"
    />
  );

  const normalHover = (
    <polygon
      fillRule="evenodd"
      points="23.521 11.63 24.93 13.049 14.914 23 35 23 35 25 14.916 25 24.93 34.951 23.521 36.37 11.07 23.999"
    />
  );

  const simplified = (
    <polygon
      fillRule="evenodd"
      points="32.577 30.115 34.37 28.336 23.999 17.885 13.63 28.336 15.423 30.115 23.999 21.471"
      transform="matrix(0 1 1 0 0 0)"
    />
  );

  const simplifiedHover = (
    <polygon
      fillRule="evenodd"
      points="22.02 11.103 23.8 12.897 13.9 22.736 34.105 22.737 34.105 25.263 13.9 25.262 23.8 35.103 22.02 36.897 9.043 23.999"
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

export default ChevronLeft;
