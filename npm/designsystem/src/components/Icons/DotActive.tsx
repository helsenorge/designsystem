import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const DotActive: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const xxSmall = (
    <path fillRule="evenodd" clipRule="evenodd" d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z" />
  );

  const xxSmallHover = (
    <path fillRule="evenodd" clipRule="evenodd" d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z" />
  );

  return getIcon({
    size,
    isHovered,
    normal: xxSmall,
    normalHover: xxSmallHover,
  });
};

export default DotActive;
