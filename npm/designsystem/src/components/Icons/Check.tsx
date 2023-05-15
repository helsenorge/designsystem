import React from 'react';

import { getIcon, SvgPathProps } from './Icon';

const Check: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = <path d="M22.504 31.198l-9.59-9.966 1.441-1.387 8.149 8.468 14.455-15.016 1.441 1.386z" />;
  const normalHover = <path d="M22.504 31.198l-7.816-8.121 1.441-1.387 6.375 6.623 15.859-16.474 1.44 1.386z" />;
  const xSmall = <path d="M22.504 31.578l-9.781-10.162 1.822-1.752 7.959 8.269 14.265-14.819 1.821 1.752z" />;
  const xSmallHover = <path d="M22.504 31.578l-7.816-8.124 1.82-1.75 5.996 6.229 16.321-16.956 1.821 1.752z" />;

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Check;
