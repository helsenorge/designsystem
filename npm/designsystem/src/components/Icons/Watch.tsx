import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const Watch: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M36.763 24c0-7.037-5.725-12.763-12.762-12.763-7.039 0-12.764 5.726-12.764 12.763S16.962 36.762 24 36.762 36.764 31.037 36.764 24zm1.4 0c0 7.809-6.353 14.162-14.162 14.162-7.81 0-14.164-6.353-14.164-14.162 0-7.81 6.354-14.163 14.163-14.163 7.81 0 14.163 6.353 14.163 14.163zM24.5 23.5h4.584v1H23.5v-7.126h1V23.5z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M36.763 24c0-7.037-5.725-12.763-12.762-12.763-7.039 0-12.764 5.726-12.764 12.763S16.962 36.762 24 36.762 36.764 31.037 36.764 24zm1.4 0c0 7.809-6.353 14.162-14.162 14.162-7.81 0-14.164-6.353-14.164-14.162 0-7.81 6.354-14.163 14.163-14.163 7.81 0 14.163 6.353 14.163 14.163zM24.5 23.793l3.448 3.449-.707.707-3.742-3.742v-6.833h1v6.419z"
    />
  );

  const xSmall = (
    <path
      fillRule={'evenodd'}
      d="M24 36.577c-6.936 0-12.579-5.642-12.579-12.577 0-6.936 5.643-12.579 12.579-12.579 6.936 0 12.579 5.643 12.579 12.579 0 6.935-5.643 12.577-12.579 12.577zm0-26.924C16.089 9.653 9.653 16.09 9.653 24S16.09 38.346 24 38.346 38.347 31.91 38.347 24c0-7.911-6.436-14.347-14.347-14.347zm.632 7.722h-1.264v7.257h5.717v-1.264h-4.453v-5.993z"
    />
  );

  const xSmallHover = (
    <path
      fillRule={'evenodd'}
      d="M36.578 24c0-6.936-5.643-12.579-12.579-12.579-6.934 0-12.577 5.643-12.577 12.579 0 6.935 5.643 12.577 12.577 12.577 6.936 0 12.579-5.642 12.579-12.577zm1.768 0c0 7.911-6.435 14.346-14.347 14.346-7.91 0-14.345-6.435-14.345-14.346 0-7.911 6.435-14.347 14.345-14.347 7.912 0 14.347 6.436 14.347 14.347zm-13.715-.261l3.412 3.41-.893.893-3.782-3.78v-6.887h1.263v6.364z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Watch;
