import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const SortUp: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = <path d="m24 10.14 12.37 12.45L34.95 24 25 13.985V35h-2V13.985L13.05 24l-1.42-1.41L24 10.14Z" fillRule={'evenodd'} />;

  const normalHover = (
    <>
      <path fillRule={'evenodd'} d="m24 10.14 12.37 12.45L34.95 24 25 13.985V14l-1-1-1 1v-.015L13.05 24l-1.42-1.41L24 10.14Z" />
      <path fillRule={'evenodd'} d="m24 20.14 7.37 7.45L29.95 29 25 23.985V24l-1-1-1 1v-.015L18.05 29l-1.42-1.41L24 20.14Z" />
    </>
  );

  const xSmall = (
    <>
      <path fillRule={'evenodd'} d="m27.79 18.842 1.42-1.409L19 7.159 8.79 17.433l1.42 1.409L19 9.999l8.79 8.843Z" />
      <path d="M18 9h2v18h-2z" />
    </>
  );

  const xSmallHover = (
    <>
      <path fillRule={'evenodd'} d="m27.79 18.842 1.42-1.409L19 7.159 8.79 17.433l1.42 1.409L19 9.999l8.79 8.843Z" />
      <path fillRule={'evenodd'} d="m23.79 22.842 1.42-1.409L19 15.159l-6.21 6.274 1.42 1.409L19 17.999l4.79 4.843Z" />
    </>
  );

  const xxSmall = (
    <>
      <path fillRule={'evenodd'} d="m17.79 13.842 1.42-1.409L12 5.159l-7.21 7.274 1.42 1.409L12 7.999l5.79 5.843Z" />;
      <path d="M11 7h2v13h-2V7Z" />;
    </>
  );

  const xxSmallHover = (
    <>
      <path fillRule={'evenodd'} d="m27.79 18.842 1.42-1.409L19 7.159 8.79 17.433l1.42 1.409L19 9.999l8.79 8.843Z" />
      <path fillRule={'evenodd'} d="m23.79 22.842 1.42-1.409L19 15.159l-6.21 6.274 1.42 1.409L19 17.999l4.79 4.843Z" />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover, xxSmall, xxSmallHover });
};

export default SortUp;
