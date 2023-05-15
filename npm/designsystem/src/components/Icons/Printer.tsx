import React from 'react';

import { getIcon, SvgPathProps } from './Icon';

const Printer: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M39.62 27.403H8.18V12.412h6.096v4.012h-2.178v.899h23.605v-.9h-2.178v-4.011h6.096v14.99zm-23.944 10.62h16.448v-9.22H15.676v9.22zm0-21.6h16.448V7.25H15.676v9.174zm17.849-5.411V5.85h-19.25v5.162H6.78v17.79h7.497v10.622h19.249V28.803h7.496V11.012h-7.496zm-.864 11.835a1.303 1.303 0 01-1.302-1.302 1.302 1.302 0 111.302 1.302zm0-3.503a2.204 2.204 0 00-2.202 2.2c0 1.215.988 2.202 2.202 2.202a2.204 2.204 0 002.2-2.201 2.204 2.204 0 00-2.2-2.201zM19.254 35.318h9.293v-.9h-9.293v.9zm0-3.317h9.293v-.9h-9.293v.9z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M32.66 22.846a1.303 1.303 0 01-1.3-1.302c0-.717.583-1.3 1.3-1.3a1.302 1.302 0 010 2.602zm0-3.503a2.204 2.204 0 00-2.2 2.201c0 1.214.987 2.201 2.2 2.201a2.204 2.204 0 002.202-2.2 2.204 2.204 0 00-2.202-2.202zm6.961 8.06H8.18V12.41h6.096v4.012h-2.177v.9h23.604v-.9h-2.178v-4.012h6.097v14.991zM15.676 40.55h16.448V28.802H15.676V40.55zm0-24.127h16.448V9.776H15.676v6.647zm17.848-5.412V8.376H14.275v2.635H6.78v17.791h7.496V41.95h19.25V28.802h7.496v-17.79h-7.497zm-14.27 26.833h9.292v-.9h-9.293v.9zm0-3.318h9.292v-.9h-9.293v.9zm0-3.317h9.292v-.9h-9.293v.9z"
    />
  );

  const xSmall = (
    <path
      fillRule={'evenodd'}
      d="M32.629 22.697a1.184 1.184 0 11.001-2.364 1.184 1.184 0 01-.001 2.364zm0-3.503c-1.28 0-2.32 1.04-2.32 2.32 0 1.279 1.04 2.318 2.32 2.318 1.28 0 2.32-1.04 2.32-2.319 0-1.278-1.04-2.319-2.32-2.319zm-13.406 16.21h9.292v-1.137h-9.292v1.137zm20.181-8.217H8.332V12.565h5.728v3.709h-1.993v1.135H35.67v-1.135h-1.993v-3.709h5.727v14.622zM15.701 37.934h16.334v-8.978H15.701v8.978zm.128-21.66h16.078V7.402H15.83v8.872zm17.848-5.479v-5.16H14.06v5.16H6.562v18.16h7.625V39.45H33.55V28.956h7.624v-18.16h-7.497zM19.223 32.087h9.292V30.95h-9.292v1.137z"
    />
  );

  const xSmallHover = (
    <path
      fillRule={'evenodd'}
      d="M39.405 27.187H8.331V12.565h5.729v3.708h-1.995v1.137h23.606v-1.137h-1.993v-3.708h5.727v14.622zM15.701 40.46h16.335V28.955H15.7V40.46zm.127-24.187h16.08V9.928h-16.08v6.345zm17.85-5.478V8.16H14.06v2.635H6.563v18.16h7.623v13.021H33.55v-13.02h7.623V10.794h-7.495zM19.222 34.613h9.293v-1.137h-9.293v1.137zm0 3.318h9.293v-1.136h-9.293v1.136zm0-6.634h9.293V30.16h-9.293v1.137zm13.407-8.6a1.184 1.184 0 010-2.366 1.184 1.184 0 010 2.365zm0-3.503c-1.28 0-2.32 1.04-2.32 2.32 0 1.278 1.04 2.32 2.32 2.32 1.279 0 2.32-1.042 2.32-2.32 0-1.28-1.041-2.32-2.32-2.32z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Printer;
