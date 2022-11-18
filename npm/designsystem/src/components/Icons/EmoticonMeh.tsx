import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const EmoticonMeh: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <>
      <path d="M24.85 4.35A19.65 19.65 0 1 0 44.5 24 19.67 19.67 0 0 0 24.85 4.35Zm0 38A18.35 18.35 0 1 1 43.2 24a18.37 18.37 0 0 1-18.35 18.35Z" />
      <path d="M19.32 21.03a1.59 1.59 0 1 0 .018-3.181 1.59 1.59 0 0 0-.018 3.181Zm11.06 0a1.59 1.59 0 1 0-.002-3.18 1.59 1.59 0 0 0 .002 3.18Zm3.42 8.3H15.9a.65.65 0 0 0 0 1.3h17.9a.65.65 0 0 0 0-1.3Z" />
    </>
  );

  const normalHover = (
    <>
      <path d="M24.82 4.35A19.65 19.65 0 1 0 44.47 24 19.67 19.67 0 0 0 24.82 4.35Zm0 38A18.35 18.35 0 1 1 43.17 24a18.38 18.38 0 0 1-18.35 18.35Z" />
      <path d="M33.77 29.33H15.88a.65.65 0 0 0 0 1.3h17.89a.65.65 0 0 0 0-1.3Zm-16.54-9.2h4.15a.65.65 0 0 0 0-1.3h-4.13a.65.65 0 0 0 0 1.3h-.02Zm11.05 0h4.1a.65.65 0 0 0 0-1.3h-4.14a.65.65 0 0 0 0 1.3h.04Z" />
    </>
  );

  return getIcon(size, isHovered, normal, normalHover);
};

export default EmoticonMeh;
