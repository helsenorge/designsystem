import type React from 'react';

import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const DotTransparent: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const xxSmall = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 35.5c6.351 0 11.5-5.149 11.5-11.5S30.351 12.5 24 12.5 12.5 17.649 12.5 24 17.649 35.5 24 35.5Zm0 4.5c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Z"
    />
  );

  const xxSmallHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 35.5c6.351 0 11.5-5.149 11.5-11.5S30.351 12.5 24 12.5 12.5 17.649 12.5 24 17.649 35.5 24 35.5Zm0 4.5c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Z"
    />
  );

  return getIcon({
    size,
    isHovered,
    normal: xxSmall,
    normalHover: xxSmallHover,
  });
};

export default DotTransparent;
