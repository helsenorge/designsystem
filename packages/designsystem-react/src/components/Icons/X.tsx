import React from 'react';
import {SvgPathProps} from './Icon';

const X: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <polygon
      fillRule="evenodd"
      points="25.403 24 35.662 13.741 34.259 12.338 24 22.597 13.741 12.337 12.338 13.74 22.597 24 12.338 34.26 13.741 35.663 24 25.403 34.259 35.662 35.662 34.259"
    />
  );

  const normalHover = (
    <polygon
      fillRule="evenodd"
      points="24 22.597 12.327 10.924 10.924 12.326 22.597 24 10.923 35.674 12.326 37.076 24 25.403 35.674 37.076 37.077 35.674 25.403 24 37.076 12.326 35.673 10.924"
    />
  );

  const simplified = (
    <polygon
      fillRule="evenodd"
      points="25.773 24 36.205 13.568 34.433 11.795 24.001 22.228 13.568 11.795 11.795 13.567 22.229 24 11.795 34.433 13.568 36.205 24.001 25.772 34.433 36.205 36.205 34.432"
    />
  );

  const simplifiedHover = (
    <polygon
      fillRule="evenodd"
      points="24 22.227 11.781 10.008 10.009 11.78 22.228 23.999 10.008 36.219 11.78 37.991 24 25.771 36.22 37.991 37.992 36.219 25.772 23.999 37.991 11.78 36.219 10.008"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default X;
