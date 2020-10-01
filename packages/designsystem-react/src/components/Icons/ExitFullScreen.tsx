import React from 'react';
import {SvgPathProps} from './Icon';

const ExitFullScreen: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M13.421 35.539l-.919-.919 7.219-7.218.918.919z" />
      <path d="M20.83 35.913h-1.3v-7.402h-7.444v-1.3h8.744zM28.279 20.598l-.919-.919 7.218-7.218.919.919z" />
      <path d="M35.914 20.789H27.17v-8.702h1.3v7.402h7.444z" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M14.685 34.276l-.919-.919 7.218-7.218.919.918z" />
      <path d="M22.094 34.65h-1.3v-7.402H13.35v-1.3h8.744zM27.016 21.861l-.919-.918 7.218-7.219.919.919z" />
      <path d="M34.65 22.052h-8.744V13.35h1.3v7.402h7.444zM13.422 35.539l-.919-.919 7.218-7.218.919.919z" />
      <path d="M28.279 20.598l-.919-.919 7.218-7.218.919.919z" />
    </g>
  );

  const simplified = (
    <path d="M29.823 19.123l5.709-5.709-1.25-1.25-5.71 5.708v-5.917h-1.769v8.936h8.979v-1.768h-5.959zm-17.868 9.49h5.958l-5.707 5.71 1.25 1.25 5.708-5.707v5.915h1.77v-8.935h-8.98v1.768z" />
  );

  const simplifiedHover = (
    <path d="M33.005 15.94l2.526-2.525-1.25-1.25-1.263 1.262-1.264 1.263-4.445 4.445v-5.917h-1.768v8.938h8.977v-1.77H28.56l4.445-4.445zM13.219 27.352h5.958l-5.71 5.708-1.262 1.263 1.25 1.25 6.973-6.97v5.916h1.768v-8.935H13.22v1.768z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default ExitFullScreen;
