import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const DotWarningTriangle: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const xxSmall = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm.064-26L34 30H14l10.064-16Zm3.642 12.5h-7.37l3.709-5.896 3.661 5.896Z"
    />
  );

  const xxSmallHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 8C15.163 8 8 15.163 8 24s7.163 16 16 16 16-7.163 16-16S32.837 8 24 8Zm-.064 26L14 18h20L23.936 34Zm-3.642-12.5h7.37l-3.709 5.896-3.661-5.896Z"
    />
  );

  return getIcon({
    size,
    isHovered,
    normal: xxSmall,
    normalHover: xxSmallHover,
  });
};

export default DotWarningTriangle;
