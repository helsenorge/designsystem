import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const Upload: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M10.791 37.839h26.418v-1.3H10.791zM23.372 29.496h1.3V9.881h-1.3z" />
      <path d="M32.165 18.539l-8.082-7.762-8.124 7.623-.889-.948 9.024-8.467 8.971 8.617z" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M10.791 37.839h26.418v-1.3H10.791zM23.372 32.023h1.3V12.408h-1.3z" />
      <path d="M32.165 21.065l-8.083-7.762-8.123 7.623-.889-.948 9.023-8.467 8.972 8.617z" />
    </g>
  );

  const xSmall = (
    <path d="M14.963 18.822l1.115 1.164 7.23-6.944V30.83h1.61V13.138l7.15 6.709 1.103-1.175-9.13-8.567-9.078 8.717zM10.79 38.22h26.418v-1.61H10.791v1.61z" />
  );

  const xSmallHover = (
    <path d="M24.042 7.579l-9.078 8.717 1.114 1.162 7.23-6.94v17.786h1.612V10.61l7.15 6.71 1.104-1.175-9.132-8.567zm-13.25 30.64h26.416v-1.61H10.792v1.61z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Upload;
