import React from 'react';

import { getIcon, SvgPathProps } from './Icon';

const PlusSmall: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = <path d="M25 14.225V23l8.775.001v2h-8.776L25 33.774h-2v-8.776L14.224 25v-2H23L23 14.224h2z" />;

  const normalHover = <path d="M25 12.225V23L35.774 23v2H24.999L25 35.774h-2V24.999L12.224 25v-2H23L23 12.224h2z" />;

  const xSmall = <path d="M24 14.18v8.556h8.558v2.527H24v8.558h-2.526l-.001-8.558h-8.557v-2.526h8.557v-8.558H24z" />;

  const xSmallHover = <path d="M24 11.653v11.084h11.084v2.526H24v11.084h-2.526V25.263H10.39v-2.526h11.084V11.653H24z" />;

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default PlusSmall;
