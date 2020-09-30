import React from 'react';
import {SvgPathProps} from './Icon';

const ChevronDown: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <polygon
      fillRule="evenodd"
      points="32.951 30.648 34.37 29.239 23.999 18.788 13.63 29.239 15.049 30.648 24 21.627"
      transform="matrix(1 0 0 -1 0 49.436)"
    />
  );

  const normalHover = (
    <polygon
      fillRule="evenodd"
      points="25 13 25 33.083 34.951 23.07 36.37 24.479 23.999 36.93 11.63 24.479 13.049 23.07 23 33.085 23 13"
    />
  );

  const simplified = (
    <polygon
      fillRule="evenodd"
      points="32.577 30.115 34.37 28.336 23.999 17.885 13.63 28.336 15.423 30.115 23.999 21.471"
      transform="matrix(1 0 0 -1 0 48)"
    />
  );

  const simplifiedHover = (
    <polygon
      fillRule="evenodd"
      points="25 13 25 33.083 34.951 23.07 36.37 24.479 23.999 36.93 11.63 24.479 13.049 23.07 23 33.085 23 13"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default ChevronDown;
