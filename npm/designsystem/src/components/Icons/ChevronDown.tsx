import type React from 'react';

import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const ChevronDown: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = <path d="M32.951 18.788l1.419 1.409-10.371 10.451L13.63 20.197l1.419-1.409L24 27.809z" />;

  const normalHover = <path d="M25 13v20.083l9.951-10.013 1.419 1.409L23.999 36.93 11.63 24.479l1.419-1.409L23 33.085V13z" />;

  const xSmall = <path d="M32.577 17.885l1.793 1.779-10.371 10.451L13.63 19.664l1.793-1.779 8.576 8.644z" />;

  const xSmallHover = <path d="M25 13v20.083l9.951-10.013 1.419 1.409L23.999 36.93 11.63 24.479l1.419-1.409L23 33.085V13z" />;

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default ChevronDown;
