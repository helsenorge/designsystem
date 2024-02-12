import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const Logout: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path d="M12.05 39.478V8.521l16.4 2.59V20.5h1.3v-9.646a1 1 0 0 0-.844-.987l-17-2.685a1 1 0 0 0-1.156.988v31.66a1 1 0 0 0 1.156.987l17-2.684a1 1 0 0 0 .844-.988V28.5h-1.3v8.389l-16.4 2.59Z" />
      <path
        fillRule="evenodd"
        d="M38.673 24.936H20.188v-1.3h18.449l-3.778-3.779.919-.92 4.907 4.906a.653.653 0 0 1 0 .92l-4.971 4.971-.919-.92 3.878-3.878Z"
        clipRule="evenodd"
      />
    </>
  );

  const normalHover = (
    <>
      <path d="M12.05 39.478V8.521l16.4 2.59V20.5h1.3v-9.646a1 1 0 0 0-.844-.987l-17-2.685a1 1 0 0 0-1.156.988v31.66a1 1 0 0 0 1.156.987l17-2.684a1 1 0 0 0 .844-.988V28.5h-1.3v8.389l-16.4 2.59Z" />
      <path
        fillRule="evenodd"
        d="M41.673 24.936H23.188v-1.3h18.449l-3.778-3.779.919-.92 4.907 4.906a.653.653 0 0 1 0 .92l-4.971 4.971-.919-.92 3.878-3.878Z"
        clipRule="evenodd"
      />
    </>
  );

  const xSmall = (
    <>
      <path d="M12.392 39.078V8.922l15.716 2.481V20.5h1.642v-9.42c0-.622-.452-1.151-1.066-1.248L12.21 7.23a1.263 1.263 0 0 0-1.46 1.247v31.044c0 .776.694 1.369 1.46 1.248l16.474-2.602a1.263 1.263 0 0 0 1.066-1.247V28.5h-1.642v8.097l-15.716 2.481Z" />
      <path
        fillRule="evenodd"
        d="M38.673 24.936H20.188v-1.3h18.449l-3.778-3.779.919-.92 4.907 4.906a.653.653 0 0 1 0 .92l-4.971 4.971-.92-.92 3.879-3.878Z"
        clipRule="evenodd"
      />
    </>
  );

  const xSmallHover = (
    <>
      <path d="M12.392 39.078V8.922l15.716 2.481V20.5h1.642v-9.42c0-.622-.452-1.151-1.066-1.248L12.21 7.23a1.263 1.263 0 0 0-1.46 1.247v31.044c0 .776.694 1.369 1.46 1.248l16.474-2.602a1.263 1.263 0 0 0 1.066-1.247V28.5h-1.642v8.097l-15.716 2.481Z" />
      <path
        fillRule="evenodd"
        d="M41.673 24.936H23.188v-1.3h18.449l-3.778-3.779.919-.92 4.907 4.906a.653.653 0 0 1 0 .92l-4.971 4.971-.92-.92 3.879-3.878Z"
        clipRule="evenodd"
      />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Logout;
