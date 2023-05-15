import React from 'react';

import { getIcon, SvgPathProps } from './Icon';

const ArrowUpRight: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = <path d="M33.305 14.659v14.546h-1.3V16.948L15.804 33.149l-.919-.92 16.27-16.27-12.394.001v-1.301z" />;

  const normalHover = <path d="M36.52 11.537v14.545h-1.3l-.001-12.347-19.415 19.414-.919-.92 19.393-19.392-12.302.001v-1.301z" />;

  const xSmall = <path d="M18.76 14.426v1.768h11.83L14.719 32.065l1.251 1.25 15.801-15.801v11.691h1.768V14.426z" />;

  const xSmallHover = <path d="M22.076 11.122v1.769h11.736L14.819 31.884l1.252 1.25 19.015-19.015v11.782h1.769V11.122z" />;

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default ArrowUpRight;
