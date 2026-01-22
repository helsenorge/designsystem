import type React from 'react';

import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const DotPending: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const xxSmall = (
    <path d="M24 8c8.837 0 16 7.163 16 16s-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8Zm0 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
  );

  const xxSmallHover = (
    <path d="M24 8c8.837 0 16 7.163 16 16s-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8Zm0 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
  );

  return getIcon({
    size,
    isHovered,
    normal: xxSmall,
    normalHover: xxSmallHover,
  });
};

export default DotPending;
