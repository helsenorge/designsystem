import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const CheckFill: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="m33.706 19.928-1.441-1.387-10.314 10.715-5.879-6.108-1.442 1.386 7.321 7.607 11.755-12.213ZM40.135 24c0 8.873-7.193 16.066-16.067 16.066-8.873 0-16.066-7.193-16.066-16.066S15.195 7.934 24.068 7.934c8.874 0 16.067 7.193 16.067 16.066Z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="m35.132 19.062-1.44-1.387-11.49 11.937-3.84-3.99-1.442 1.386 5.281 5.49 12.931-13.436Zm5.253 5.293c0 8.874-7.193 16.067-16.066 16.067S8.252 33.23 8.252 24.355c0-8.873 7.194-16.066 16.067-16.066 8.873 0 16.066 7.193 16.066 16.066Z"
    />
  );

  const xSmall = (
    <path
      fillRule={'evenodd'}
      d="m21.887 32.488-7.472-7.777 1.811-1.75 5.66 5.903L31.976 18.38l1.811 1.737-11.9 12.37ZM24 8C15.17 8 8 15.16 8 23.994 8 32.84 15.17 40 24 40c8.843 0 16-7.16 16-16.006C40 15.16 32.843 8 24 8Z"
    />
  );

  const xSmallHover = (
    <path
      fillRule={'evenodd'}
      d="m21.887 32.488-5.484-5.713 1.81-1.737 3.674 3.826 11.409-11.867 1.823 1.75-13.232 13.74ZM24 8C15.157 8 8 15.16 8 23.994 8 32.84 15.157 40 24 40c8.83 0 16-7.16 16-16.006C40 15.16 32.83 8 24 8Z"
    />
  );
  return getIcon(size, isHovered, normal, normalHover, xSmall, xSmallHover);
};

export default CheckFill;
