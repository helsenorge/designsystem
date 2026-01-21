import type React from 'react';

import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const ChevronRight: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = <path d="M19.171 32.951l1.409 1.42L31.031 24 20.58 13.63l-1.409 1.42 9.02 8.95z" />;

  const normalHover = <path d="M24.479 11.63L36.93 23.999 24.479 36.37l-1.409-1.419L33.083 25H13v-2h20.085L23.07 13.049z" />;

  const xSmall = <path d="M17.885 32.577l1.779 1.793 10.451-10.371L19.664 13.63l-1.779 1.793 8.644 8.576z" />;

  const xSmallHover = (
    <path d="M25.98 11.103l12.977 12.896L25.98 36.897l-1.78-1.794 9.899-9.841-20.204.001v-2.526l20.204-.001-9.899-9.839z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default ChevronRight;
