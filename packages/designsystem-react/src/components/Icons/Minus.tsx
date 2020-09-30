import React from 'react';
import {SvgPathProps} from './Icon';

const Minus: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <polygon fillRule="evenodd" points="14.225 25 33.775 25 33.775 23 14.225 23" transform="matrix(1 0 0 -1 0 48)" />
  );

  const normalHover = <polygon fillRule="evenodd" points="12.225 23 35.775 23 35.775 25 12.225 25" />;

  const simplified = (
    <polygon
      fillRule="evenodd"
      points="14.179 25.263 33.821 25.263 33.821 22.737 14.179 22.737"
      transform="matrix(1 0 0 -1 0 48)"
    />
  );

  const simplifiedHover = (
    <polygon fillRule="evenodd" points="11.653 22.737 36.347 22.737 36.347 25.263 11.653 25.263" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Minus;
