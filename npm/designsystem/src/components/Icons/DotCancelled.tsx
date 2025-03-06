import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const DotCancelled: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const xxSmall = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Zm-21.333-8.16L24 21.173l5.334-5.333 2.828 2.829-5.333 5.333 5.333 5.333-2.828 2.828L24 26.83l-5.333 5.334-2.829-2.829 5.334-5.333-5.334-5.334 2.829-2.828Z"
    />
  );

  const xxSmallHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16ZM16.667 13.84 24 21.173l7.334-7.333 2.828 2.829-7.333 7.333 7.333 7.333-2.828 2.828L24 26.83l-7.333 7.334-2.829-2.829 7.334-7.333-7.334-7.334 2.829-2.828Z"
    />
  );

  return getIcon({
    size,
    isHovered,
    normal: xxSmall,
    normalHover: xxSmallHover,
  });
};

export default DotCancelled;
