import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const Login: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path d="M18.05 20.5v-9.39l16.4-2.589v30.957l-16.4-2.589v-8.39h-1.3v8.646a1 1 0 0 0 .844.988l17 2.684a1 1 0 0 0 1.156-.987V8.17a1 1 0 0 0-1.156-.988l-17 2.685a1 1 0 0 0-.844.987V20.5h1.3Z" />
      <path
        fillRule="evenodd"
        d="M26.673 24.936H8.188v-1.3h18.449l-3.778-3.779.919-.92 4.907 4.906a.653.653 0 0 1 0 .92l-4.971 4.971-.919-.92 3.878-3.878Z"
        clipRule="evenodd"
      />
    </>
  );

  const normalHover = (
    <>
      <path d="M18.05 20.5v-9.39l16.4-2.589v30.957l-16.4-2.589v-8.39h-1.3v8.646a1 1 0 0 0 .844.988l17 2.684a1 1 0 0 0 1.156-.987V8.17a1 1 0 0 0-1.156-.988l-17 2.685a1 1 0 0 0-.844.987V20.5h1.3Z" />
      <path
        fillRule="evenodd"
        d="M29.673 24.936H11.188v-1.3h18.449l-3.778-3.779.919-.92 4.907 4.906a.653.653 0 0 1 0 .92l-4.971 4.971-.919-.92 3.878-3.878Z"
        clipRule="evenodd"
      />
    </>
  );

  const xSmall = (
    <>
      <path d="M18.392 20.5v-9.097l15.716-2.481v30.156l-15.716-2.481V28.5H16.75v8.42c0 .622.452 1.151 1.066 1.248L34.29 40.77a1.263 1.263 0 0 0 1.46-1.248V8.478c0-.776-.693-1.368-1.46-1.247l-16.474 2.6a1.263 1.263 0 0 0-1.066 1.248V20.5h1.642Z" />
      <path
        fillRule="evenodd"
        d="M26.673 24.936H8.188v-1.3h18.449l-3.778-3.779.919-.92 4.907 4.906a.653.653 0 0 1 0 .92l-4.971 4.971-.919-.92 3.878-3.878Z"
        clipRule="evenodd"
      />
    </>
  );

  const xSmallHover = (
    <>
      <path d="M18.392 20.5v-9.097l15.716-2.481v30.156l-15.716-2.481V28.5H16.75v8.42c0 .622.452 1.151 1.066 1.248L34.29 40.77a1.263 1.263 0 0 0 1.46-1.248V8.478c0-.776-.693-1.368-1.46-1.247l-16.474 2.6a1.263 1.263 0 0 0-1.066 1.248V20.5h1.642Z" />
      <path
        fillRule="evenodd"
        d="M29.673 24.936H11.188v-1.3h18.449l-3.778-3.779.919-.92 4.907 4.906a.653.653 0 0 1 0 .92l-4.971 4.971-.919-.92 3.878-3.878Z"
        clipRule="evenodd"
      />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Login;
