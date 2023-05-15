import React from 'react';

import { getIcon, SvgPathProps } from './Icon';

const SortDown: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = <path d="M25 13v20.083l9.95-10.013 1.42 1.409L24 36.929 11.63 24.48l1.42-1.409L23 33.085V13h2Z" fillRule={'evenodd'} />;

  const normalHover = (
    <>
      <path fillRule={'evenodd'} d="m25 33.083 9.95-10.013 1.42 1.409L24 36.93 11.63 24.48l1.42-1.409L23 33.085 24 34l1-.917Z" />
      <path fillRule={'evenodd'} d="m25 24.083 4.95-5.013 1.42 1.409L24 27.93l-7.37-7.451 1.42-1.409L23 24.085 24 25l1-.917Z" />
    </>
  );

  const xSmall = (
    <>
      <path fillRule={'evenodd'} d="m27.79 19.158 1.42 1.409L19 30.841 8.79 20.567l1.42-1.409L19 28.001l8.79-8.843Z" />
      <path d="M18 11h2v18h-2z" />
    </>
  );

  const xSmallHover = (
    <>
      <path fillRule={'evenodd'} d="m27.79 19.158 1.42 1.409L19 30.841 8.79 20.567l1.42-1.409L19 28.001l8.79-8.843Z" />
      <path fillRule={'evenodd'} d="m23.79 15.158 1.42 1.409L19 22.841l-6.21-6.274 1.42-1.409L19 20.001l4.79-4.843Z" />
    </>
  );

  const xxSmall = (
    <>
      <path fillRule={'evenodd'} d="m17.79 11.158 1.42 1.409L12 19.841l-7.21-7.274 1.42-1.409L12 17.001l5.79-5.843Z" />
      <path d="M11 5h2v13h-2z" />
    </>
  );

  const xxSmallHover = (
    <>
      <path fillRule={'evenodd'} d="m17.79 11.158 1.42 1.409L12 19.841l-7.21-7.274 1.42-1.409L12 17.001l5.79-5.843Z" />
      <path fillRule={'evenodd'} d="m14.79 8.158 1.42 1.409L12 13.841 7.79 9.567l1.42-1.409L12 11.001l2.79-2.843Z" />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover, xxSmall, xxSmallHover });
};

export default SortDown;
