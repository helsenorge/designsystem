import React from 'react';
import { SvgPathProps } from './Icon';

const Save: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M37.859 37.839H10.141v-9.911h1.3v8.611h25.118v-8.611h1.3z" />
      <path d="M23.372 29.496h1.3V9.881h-1.3z" />
      <path d="M24.093 30.392l-9.023-8.466.889-.949 8.123 7.623 8.083-7.762.9.938z" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M23.372 32.023h1.3V12.408h-1.3z" />
      <path d="M24.093 32.919l-9.023-8.466.889-.949 8.123 7.623 8.083-7.762.9.938z" />
      <path d="M37.859 37.839H10.141v-9.911h1.3v8.611h25.118v-8.611h1.3z" />
    </g>
  );

  const simplified = (
    <path d="M23.216 9.473v17.693l-7.15-6.708-1.103 1.175 9.132 8.569 9.077-8.721-1.116-1.162-7.229 6.943V9.473h-1.611zm13.188 18.048v8.456H11.596v-8.456h-1.61v10.067h28.029V27.52h-1.61z" />
  );

  const simplifiedHover = (
    <path d="M23.217 12v17.694l-7.15-6.71-1.103 1.175 9.13 8.57 9.078-8.722-1.114-1.162-7.23 6.943V12h-1.61zM36.404 27.52v8.456H11.598v-8.456H9.986v10.067h28.028V27.52h-1.61z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Save;
