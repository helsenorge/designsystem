import React from 'react';
import {SvgPathProps} from './Icon';

const Download: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M33.065 21.776l-.9-.937-7.493 7.195V9.881h-1.3v18.053l-7.413-6.956-.89.948 9.024 8.466 8.972-8.616zM10.791 37.84H37.21v-1.3H10.791v1.3z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M33.065 24.302l-.9-.936-7.493 7.195V12.408h-1.3V30.46l-7.413-6.956-.89.948 9.024 8.466 8.972-8.616zM10.791 37.84H37.21v-1.3H10.791v1.3z"
    />
  );

  const simplified = (
    <path
      fillRule={'evenodd'}
      d="M10.791 38.074h26.42v-1.768H10.79v1.768zm22.438-16.13l-1.227-1.274-7.095 6.815V9.882h-1.77v17.51l-7.018-6.585-1.209 1.29 9.186 8.62 9.133-8.772z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule={'evenodd'}
      d="M10.791 38.074H37.21v-1.768H10.79v1.768zm22.436-13.603l-1.224-1.274-7.096 6.813V12.408h-1.768v17.511l-7.02-6.586-1.209 1.29 9.185 8.62 9.132-8.772z"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Download;
