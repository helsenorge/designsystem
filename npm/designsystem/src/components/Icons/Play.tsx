import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const Play: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = <path fillRule={'evenodd'} d="M19.81 15.507L32.825 24 19.81 32.493V15.507zm-2-3.693v24.373L36.484 24 17.81 11.814z" />;

  const normalHover = (
    <path fillRule={'evenodd'} d="M18.29 13.523l16.054 10.479L18.29 34.477V13.521zm-2-3.694V38.17l21.713-14.169L16.29 9.83z" />
  );

  const small = (
    <path fillRule={'evenodd'} d="M20.073 15.993l12.27 8.008-12.27 8.006V15.993zm-2.526-4.665v25.344l19.418-12.67-19.418-12.674z" />
  );

  const smallHover = (
    <path fillRule={'evenodd'} d="M18.554 14.01L33.863 24l-15.31 9.99V14.01zm-2.527-4.665v29.312l22.458-14.656L16.027 9.345z" />
  );

  return getIcon(size, isHovered, normal, normalHover, small, smallHover);
};

export default Play;
