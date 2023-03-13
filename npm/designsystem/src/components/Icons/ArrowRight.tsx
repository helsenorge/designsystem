import React from 'react';

import { getIcon, SvgPathProps } from './Icon';

const ArrowRight: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = <path d="m27.075 9.929-1.142 1.377 10.044 11.721H8.929v1.947h27.048L25.933 36.692l1.142 1.379L39.07 24 27.075 9.929Z" />;

  const normalHover = (
    <path d="m33.075 9.929-1.143 1.377 10.045 11.721H5.929v1.947h36.048L31.933 36.692l1.142 1.379L45.07 24 33.075 9.929Z" />
  );

  const xSmall = <path d="m27.075 9.718-1.443 1.739L35.636 22.77H8.456v2.46h27.18L25.632 36.539l1.443 1.742 12.47-14.28-12.47-14.283Z" />;

  const xSmallHover = (
    <path d="m33.39 9.719-1.442 1.739 10.004 11.314H5.929v2.46h36.023L31.948 36.54l1.443 1.741 12.47-14.28L33.39 9.719Z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default ArrowRight;
