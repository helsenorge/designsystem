import React from 'react';
import {SvgPathProps} from './Icon';

const ArrowLeft: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M20.925 5.929l1.142 1.377L9.023 23.027h33.048v1.948H9.023l13.044 15.717-1.142 1.379-14.996-18.07z" />
  );

  const normalHover = (
    <path d="M17.925 5.929l1.142 1.377L6.023 23.027h36.048v1.948H6.023l13.044 15.717-1.142 1.379-14.996-18.07z" />
  );

  const simplified = (
    <path d="M20.925 5.929l1.443 1.739-12.53 15.103h32.233v2.46H9.838l12.53 15.099-1.443 1.741-14.996-18.07z" />
  );

  const simplifiedHover = (
    <path d="M17.135 5.929l1.443 1.739-12.53 15.103h36.023v2.46H6.048l12.53 15.099-1.443 1.741-14.996-18.07z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default ArrowLeft;
