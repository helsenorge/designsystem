import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const DotHalfDisc: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const xxSmall = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm-8.482-8.543-.146.147A11.456 11.456 0 0 1 12.5 24c0-6.351 5.149-11.5 11.5-11.5a11.47 11.47 0 0 1 8.554 3.814L15.518 31.457Z"
    />
  );

  const xxSmallHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 24c0 8.837 7.163 16 16 16s16-7.163 16-16S32.837 8 24 8 8 15.163 8 24Zm8.543-8.482-.147-.146A11.456 11.456 0 0 1 24 12.5c6.351 0 11.5 5.149 11.5 11.5a11.47 11.47 0 0 1-3.814 8.554L16.543 15.518Z"
    />
  );

  return getIcon({
    size,
    isHovered,
    normal: xxSmall,
    normalHover: xxSmallHover,
  });
};

export default DotHalfDisc;
