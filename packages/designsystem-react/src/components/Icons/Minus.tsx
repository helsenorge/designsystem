import React from 'react';
import {IconRawProps} from './Icon';

const Minus = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <polygon fill-rule="evenodd" points="14.225 25 33.775 25 33.775 23 14.225 23" transform="matrix(1 0 0 -1 0 48)" />
  );

  const normalHover = <polygon fill-rule="evenodd" points="12.225 23 35.775 23 35.775 25 12.225 25" />;

  const simplified = (
    <polygon
      fill-rule="evenodd"
      points="14.179 25.263 33.821 25.263 33.821 22.737 14.179 22.737"
      transform="matrix(1 0 0 -1 0 48)"
    />
  );

  const simplifiedHover = (
    <polygon fill-rule="evenodd" points="11.653 22.737 36.347 22.737 36.347 25.263 11.653 25.263" />
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

export default Minus;
