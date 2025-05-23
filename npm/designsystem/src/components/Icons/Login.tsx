import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

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

  const xxSmall = (
    <>
      <path d="M20 37.192 38 40V8l-17.898 2.743.606 3.954L34 12.66v22.668L20.617 33.24 20 37.192Z" />
      <path d="M23.16 26H10v-4h13.183l-2.595-2.584 2.823-2.834 7.417 7.388-7.411 7.44-2.834-2.823L23.161 26Z" />
    </>
  );

  const xxSmallHover = (
    <>
      <path d="M18 37.192 36 40V8l-17.898 2.743.606 3.954L32 12.66v22.668L18.617 33.24 18 37.192Z" />
      <path d="M23.16 26H10v-4h13.183l-2.595-2.584 2.823-2.834 7.417 7.388-7.411 7.44-2.834-2.823L23.161 26Z" />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover, xxSmall, xxSmallHover });
};

export default Login;
