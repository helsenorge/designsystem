import React from 'react';
import {SvgPathProps} from './Icon';

const Window: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M39.386 8.475l.033 29.72h1.68v1.3H6.902v-1.3H8.58l-.033-29.72h30.839zm-1.3 1.3H9.85l.03 28.42h28.24l-.032-28.42zm-1.453 1.453v25.835H24.788v-9.858h-1.642v9.858H11.301V11.228h25.332zm-1.3 15.977h-9.245v8.558h9.245v-8.558zm-13.487-.001h-9.245v8.558h9.245v-8.558zm13.487-12.253H12.601v10.953h22.732V14.951zm0-2.422H12.601v1.121h22.732v-1.121z" />
  );

  const normalHover = (
    <path d="M39.418 8.475l.034 29.72h1.68v1.3H6.933v-1.3h1.68l-.035-29.72h30.84zm-1.298 1.3H9.881l.032 28.42h28.24l-.033-28.42zm-1.454 1.453v25.835H24.821v-7.607h-1.642v7.607H11.334V11.228h25.332zm-1.3 18.228h-9.245v6.307h9.245v-6.307zm-13.487-.001h-9.245v6.307h9.245v-6.307zm13.486-14.504H12.634v13.204h22.731V14.951zm.001-2.422H12.635v1.121h22.731v-1.121z" />
  );

  return isHovered ? normalHover : normal;
};

export default Window;
