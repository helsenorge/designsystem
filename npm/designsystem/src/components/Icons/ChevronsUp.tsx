import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const ChevronsUp: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M23.998 23.07L13.68 33.387l1.414 1.414 8.904-8.903 8.912 8.912 1.414-1.414L23.998 23.07zm-8.908 1.146L13.676 22.8l10.318-10.318L34.32 22.809l-1.415 1.414-8.911-8.912-8.904 8.905z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M23.998 20.544L13.68 30.86l1.414 1.415 8.904-8.903 8.911 8.911 1.415-1.414-10.326-10.325zm-8.908 1.145l-1.414-1.415L23.994 9.957l10.325 10.326-1.414 1.415-8.911-8.912-8.904 8.904z"
    />
  );

  const xSmall = (
    <path
      fillRule={'evenodd'}
      d="M23.998 22.698L13.495 33.2l1.786 1.786 8.717-8.717 8.726 8.725 1.786-1.786-10.512-10.511zm-8.72 1.704l-1.788-1.786L23.994 12.11l10.512 10.511-1.786 1.786-8.726-8.724-8.717 8.718z"
    />
  );

  const xSmallHover = (
    <path
      fillRule={'evenodd'}
      d="M23.997 20.172L13.494 30.675l1.786 1.786 8.717-8.717 8.726 8.724 1.786-1.786-10.512-10.51zm-8.72 1.704l-1.788-1.786L23.994 9.585l10.512 10.51-1.786 1.787-8.726-8.725-8.717 8.719z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default ChevronsUp;
