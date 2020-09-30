import React from 'react';
import {SvgPathProps} from './Icon';

const ChevronRight: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <polygon
      fillRule="evenodd"
      points="34.052 29.93 35.472 28.521 25.101 18.07 14.731 28.521 16.151 29.93 25.101 20.91"
      transform="rotate(90 25.101 24)"
    />
  );

  const normalHover = (
    <polygon
      fillRule="evenodd"
      points="24.479 11.63 36.93 23.999 24.479 36.37 23.07 34.951 33.083 25 13 25 13 23 33.085 23 23.07 13.049"
    />
  );

  const simplified = (
    <polygon
      fillRule="evenodd"
      points="32.577 30.115 34.37 28.336 23.999 17.885 13.63 28.336 15.423 30.115 23.999 21.471"
      transform="rotate(90 24 24)"
    />
  );

  const simplifiedHover = (
    <polygon
      fillRule="evenodd"
      points="25.98 11.103 38.957 23.999 25.98 36.897 24.2 35.103 34.099 25.262 13.895 25.263 13.895 22.737 34.099 22.736 24.2 12.897"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default ChevronRight;
