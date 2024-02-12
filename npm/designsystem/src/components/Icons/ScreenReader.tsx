import React from 'react';

import { getIcon } from '../../utils/icon';
import { SvgPathProps } from '../Icon';

const ScreenReader: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path d="M41.182 8.613c1.87 2.359 2.462 6.463.013 9.358l.993.84c2.934-3.47 2.179-8.274.013-11.006l-1.019.808Zm-2.713 1.88c1.218 1.727 1.42 3.822.022 5.585l1.018.808c1.832-2.31 1.496-5.052.022-7.142l-1.062.749Z" />
      <path
        fillRule="evenodd"
        d="M34.574 6.222 30.449 9H25.3a1.3 1.3 0 0 0-1.3 1.3v6a1.3 1.3 0 0 0 1.3 1.3h4.965l4.309 2.903a1.3 1.3 0 0 0 2.026-1.079V7.3a1.3 1.3 0 0 0-2.026-1.078ZM25.3 16.3h5.361l4.639 3.124V7.3l-4.454 3H25.3v6Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M20.841 15H9.42a3.08 3.08 0 0 0-3.078 3.077v17.322H4v2.392a3.325 3.325 0 0 0 3.322 3.321h32.309a3.325 3.325 0 0 0 3.322-3.321v-2.392h-2.341V21.455l-1.301-1.098V35.4H7.642V18.077c0-.98.797-1.777 1.777-1.777h11.422V15Zm18.79 24.812a2.022 2.022 0 0 0 2.021-2.021v-1.092H5.3v1.092c0 1.115.907 2.021 2.022 2.021h32.309Z"
        clipRule="evenodd"
      />
      <path d="M30 21H11v1.3h19V21Zm-19 4h19v1.3H11V25Zm15 4H11v1.3h15V29Z" />
    </>
  );

  const normalHover = (
    <>
      <path d="M41.182 8.613c1.87 2.359 2.462 6.463.013 9.358l.993.84c2.934-3.47 2.179-8.274.013-11.006l-1.019.808Zm-2.713 1.88c1.218 1.727 1.42 3.822.022 5.585l1.018.808c1.832-2.31 1.496-5.052.022-7.142l-1.062.749Z" />
      <path
        fillRule="evenodd"
        d="M34.574 6.222 30.449 9H25.3a1.3 1.3 0 0 0-1.3 1.3v6a1.3 1.3 0 0 0 1.3 1.3h4.965l4.309 2.903a1.3 1.3 0 0 0 2.026-1.079V7.3a1.3 1.3 0 0 0-2.026-1.078ZM25.3 16.3h5.361l4.639 3.124V7.3l-4.454 3H25.3v6Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M20.841 15H9.42a3.08 3.08 0 0 0-3.078 3.077v17.322H4v2.392a3.325 3.325 0 0 0 3.322 3.321h32.309a3.325 3.325 0 0 0 3.322-3.321v-2.392h-2.341V21.455l-1.301-1.098V35.4H7.642V18.077c0-.98.797-1.777 1.777-1.777h11.422V15Zm18.79 24.812a2.022 2.022 0 0 0 2.021-2.021v-1.092H5.3v1.092c0 1.115.907 2.021 2.022 2.021h32.309Z"
        clipRule="evenodd"
      />
      <path d="M31.86 21H11v1.3h20.86V21ZM11 25h24.3v1.3H11V25Zm18.358 4H11v1.3h18.358V29Z" />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default ScreenReader;
