import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

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
    <path
      fillRule={'evenodd'}
      d="M13.4 26.1h21.2v-4.2H13.4v4.2ZM24 9C15.728 9 9 15.728 9 24s6.728 15 15 15c8.27 0 15-6.728 15-15S32.27 9 24 9Z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover, xxSmall, xxSmallHover: xxSmall });
};

export default NoAccess;
