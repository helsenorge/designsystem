import React from 'react';
import {SvgPathProps} from './Icon';

const ArrowRight: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M27.075 5.929l-1.142 1.377 13.044 15.721H5.929v1.948h33.048L25.933 40.692l1.142 1.379 14.996-18.07z" />
  );

  const normalHover = (
    <path d="M30.075 5.929l-1.142 1.377 13.044 15.721H5.929v1.948h36.048L28.933 40.692l1.142 1.379 14.996-18.07z" />
  );

  const simplified = (
    <path d="M27.075 5.929l-1.443 1.739 12.53 15.103H5.929v2.46h32.233L25.632 40.33l1.443 1.741 14.996-18.07z" />
  );

  const simplifiedHover = (
    <path d="M30.864 5.929l-1.443 1.739 12.531 15.103H5.929v2.46h36.023L29.421 40.33l1.443 1.741 14.997-18.07z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default ArrowRight;
