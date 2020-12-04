import React from 'react';
import {SvgPathProps} from './Icon';

const ChevronsDown: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M24.002 24.93L34.32 14.615 32.906 13.2l-8.904 8.903-8.912-8.912-1.414 1.414L24.002 24.93zm8.908-1.145l1.414 1.415-10.318 10.318L13.68 25.192l1.415-1.414 8.911 8.912 8.904-8.905z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M24.002 27.457L34.32 17.14l-1.414-1.414-8.904 8.903-8.911-8.912-1.415 1.414 10.326 10.326zm8.908-1.146l1.414 1.415-10.318 10.318L13.68 27.718l1.414-1.414 8.91 8.912 8.905-8.905z"
    />
  );

  const simplified = (
    <path
      fillRule={'evenodd'}
      d="M24.002 25.303l10.503-10.504-1.786-1.786-8.717 8.717-8.726-8.724-1.786 1.786 10.512 10.51zm8.721-1.704l1.787 1.786-10.504 10.504-10.512-10.51 1.786-1.787 8.726 8.725 8.717-8.718z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule={'evenodd'}
      d="M24.002 27.829l10.503-10.503-1.786-1.786-8.717 8.717-8.726-8.725-1.786 1.786L24.002 27.83zm8.72-1.704l1.788 1.786-10.504 10.505-10.512-10.511 1.786-1.786 8.726 8.724 8.717-8.718z"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default ChevronsDown;
