import React from 'react';
import {IconRawProps} from './Icon';

const X = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <polygon
      fill-rule="evenodd"
      points="25.403 24 35.662 13.741 34.259 12.338 24 22.597 13.741 12.337 12.338 13.74 22.597 24 12.338 34.26 13.741 35.663 24 25.403 34.259 35.662 35.662 34.259"
    />
  );

  const normalHover = (
    <polygon
      fill-rule="evenodd"
      points="24 22.597 12.327 10.924 10.924 12.326 22.597 24 10.923 35.674 12.326 37.076 24 25.403 35.674 37.076 37.077 35.674 25.403 24 37.076 12.326 35.673 10.924"
    />
  );

  const simplified = (
    <polygon
      fill-rule="evenodd"
      points="25.773 24 36.205 13.568 34.433 11.795 24.001 22.228 13.568 11.795 11.795 13.567 22.229 24 11.795 34.433 13.568 36.205 24.001 25.772 34.433 36.205 36.205 34.432"
    />
  );

  const simplifiedHover = (
    <polygon
      fill-rule="evenodd"
      points="24 22.227 11.781 10.008 10.009 11.78 22.228 23.999 10.008 36.219 11.78 37.991 24 25.771 36.22 37.991 37.992 36.219 25.772 23.999 37.991 11.78 36.219 10.008"
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

export default X;
