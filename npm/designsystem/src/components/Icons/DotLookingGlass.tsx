import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const DotLookingGlass: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const xxSmall = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm-7.75-16.5a7.25 7.25 0 1 1 13.463 3.738l3.525 3.524-2.475 2.475-3.524-3.524A7.25 7.25 0 0 1 16.25 23.5Zm7.25-3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
    />
  );

  const xxSmallHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm-9.75-18.5a7.25 7.25 0 1 1 13.463 3.738l5.525 5.524-2.475 2.475-5.524-5.524A7.25 7.25 0 0 1 14.25 21.5Zm7.25-3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
    />
  );

  return getIcon({
    size,
    isHovered,
    normal: xxSmall,
    normalHover: xxSmallHover,
  });
};

export default DotLookingGlass;
