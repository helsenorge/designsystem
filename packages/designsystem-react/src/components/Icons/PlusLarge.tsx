import React from 'react';
import {SvgPathProps} from './Icon';

const PlusLarge: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <polygon
      fillRule="evenodd"
      points="24.992 23.008 24.992 9.328 23.009 9.328 23.009 23.008 9.328 23.008 9.328 24.991 23.009 24.991 23.009 38.672 24.992 38.672 24.992 24.991 38.672 24.991 38.672 23.008"
    />
  );

  const normalHover = (
    <polygon
      fillRule="evenodd"
      points="24.992 23.008 24.992 7.327 23.009 7.327 23.009 23.008 7.327 23.008 7.327 24.991 23.009 24.991 23.009 40.672 24.992 40.672 24.992 24.991 40.672 24.991 40.672 23.008"
    />
  );

  const simplified = (
    <polygon
      fillRule="evenodd"
      points="25.254 22.746 25.254 7.993 22.748 7.993 22.748 22.746 7.993 22.746 7.993 25.252 22.748 25.252 22.748 40.007 25.254 40.007 25.254 25.252 40.007 25.252 40.007 22.746"
    />
  );

  const simplifiedHover = (
    <polygon
      fillRule="evenodd"
      points="24.83 22.323 24.83 5.043 22.324 5.043 22.324 22.323 5.043 22.323 5.043 24.829 22.324 24.829 22.324 42.11 24.83 42.11 24.83 24.829 42.11 24.829 42.11 22.323"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default PlusLarge;
