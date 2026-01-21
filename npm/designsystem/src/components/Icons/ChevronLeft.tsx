import type React from 'react';

import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const ChevronLeft: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = <path d="M30.66 32.951l-1.409 1.42L18.8 24l10.451-10.37 1.409 1.42L21.64 24z" />;

  const normalHover = <path d="M23.521 11.63l1.409 1.419L14.914 23H35v2H14.916l10.014 9.951-1.409 1.419L11.07 23.999z" />;

  const xSmall = <path d="M30.115 32.577l-1.779 1.793-10.451-10.371L28.336 13.63l1.779 1.793-8.644 8.576z" />;

  const xSmallHover = <path d="M22.02 11.103l1.78 1.794-9.9 9.839 20.205.001v2.526L13.9 25.262l9.9 9.841-1.78 1.794L9.043 23.999z" />;
  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default ChevronLeft;
