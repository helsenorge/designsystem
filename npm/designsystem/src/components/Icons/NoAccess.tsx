import type React from 'react';

import type { SvgPathProps } from '../Icon';

import { getIcon } from '../Icon/utils';

const NoAccess: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M11.7 25.3h24.6v-2.6H11.7v2.6ZM24 8.231C15.305 8.231 8.232 15.305 8.232 24S15.305 39.769 24 39.769 39.769 32.695 39.769 24 32.695 8.231 24 8.231Z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M9.95 25.3h28.1v-2.6H9.95v2.6ZM24 8.231C15.305 8.231 8.231 15.305 8.231 24S15.305 39.769 24 39.769 39.769 32.695 39.769 24 32.695 8.231 24 8.231Z"
    />
  );

  const xSmall = (
    <path
      fillRule={'evenodd'}
      d="M12.253 25.642h23.495v-3.284H12.253v3.284ZM24 7.958C15.154 7.958 7.957 15.154 7.957 24c0 8.846 7.197 16.043 16.043 16.043S40.044 32.846 40.044 24 32.846 7.958 24 7.958Z"
    />
  );

  const xSmallHover = (
    <path
      fillRule={'evenodd'}
      d="M10.358 25.642h27.284v-3.284H10.358v3.284ZM24 7.958C15.154 7.958 7.957 15.154 7.957 24c0 8.846 7.197 16.043 16.043 16.043S40.044 32.846 40.044 24 32.846 7.958 24 7.958Z"
    />
  );

  const xxSmall = (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 21.5h16.5V26H16v-4.5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Zm16-12c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z"
      />
    </>
  );

  const xxSmallHover = (
    <>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.75 21.5h20.5V26h-20.5v-4.5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Zm16-12c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Z"
      />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover, xxSmall, xxSmallHover });
};

export default NoAccess;
