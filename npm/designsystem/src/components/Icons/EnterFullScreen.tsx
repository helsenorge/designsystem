import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const EnterFullScreen: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <g>
      <path d="M12.546 36.373l-.919-.919 7.218-7.218.919.919z" />
      <path d="M20.18 36.563h-8.744v-8.702h1.3v7.402h7.444zM29.155 19.764l-.919-.919 7.218-7.218.919.919z" />
      <path d="M36.564 20.139h-1.3v-7.402H27.82v-1.3h8.744z" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M11.283 37.636l-.919-.919 7.218-7.218.919.919z" />
      <path d="M18.917 37.827h-8.744v-8.702h1.3v7.402h7.444zM30.418 18.501l-.919-.919 7.218-7.218.919.919z" />
      <path d="M37.826 18.876h-1.3v-7.402h-7.444v-1.3h8.744zM12.546 36.373l-.919-.919 7.218-7.218.919.919z" />
      <path d="M29.155 19.764l-.919-.919 7.218-7.218.919.919z" />
    </g>
  );

  const xSmall = (
    <path d="M27.688 11.07v1.769h5.958l-5.708 5.708 1.25 1.252 5.709-5.708v5.916h1.768v-8.936h-8.977zm-7.89 18.12l-1.25-1.251-5.709 5.707v-5.917h-1.768v8.937h8.977v-1.768H14.09l5.708-5.709z" />
  );

  const xSmallHover = (
    <path d="M28.951 9.807v1.769h5.959l-6.972 6.971 1.25 1.252 1.264-1.263 5.708-5.708v5.916h1.769V9.807H28.95zM18.548 27.94l-6.973 6.971v-5.918H9.807v8.938h8.979v-1.77h-5.959l6.972-6.97-1.25-1.251z" />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default EnterFullScreen;
