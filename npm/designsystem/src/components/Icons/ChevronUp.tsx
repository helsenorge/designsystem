import React from 'react';

import { getIcon, SvgPathProps } from './Icon';

const ChevronUp: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = <path d="M15.049 30.277l-1.419-1.409 10.371-10.451L34.37 28.868l-1.419 1.409L24 21.257z" />;

  const normalHover = <path d="M24.001 10.14L36.37 22.591 34.951 24 25 13.985V35h-2V13.985L13.049 24l-1.419-1.409z" />;

  const xSmall = <path d="M32.577 30.115l1.793-1.779-10.371-10.451L13.63 28.336l1.793 1.779 8.576-8.644z" />;

  const xSmallHover = <path d="M23.999 9.043L36.897 22.02l-1.794 1.78-9.841-9.9.001 20.205h-2.526L22.736 13.9l-9.839 9.9-1.794-1.78z" />;

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default ChevronUp;
